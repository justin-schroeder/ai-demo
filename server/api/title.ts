import OpenAI from 'openai'
import { OpenAIStream } from 'ai'
import type { ChatCompletionMessageParam } from 'openai/resources/chat'

export default defineLazyEventHandler(async () => {
  const apiKey = useRuntimeConfig().openaiApiKey
  if (!apiKey) throw new Error('Missing OpenAI API key')
  const openai = new OpenAI({
    apiKey: apiKey,
  })

  return defineEventHandler(async (event) => {
    const { messages } = (await readBody(event)) as {
      messages: ChatCompletionMessageParam[]
    }

    messages.push({
      content: `Return a JSON object with a \`title\` and a \`slug\` property. These values should be be derived from summaries of the content provided in future messages. The title property should be a short post title, while the slug should be a URL safe slugified version of the title.`,
      role: 'system',
    })

    // Ask OpenAI for a streaming chat completion given the prompt
    const response = await openai.chat.completions.create({
      model: 'gpt-4-1106-preview', // GPT-4 Turbo
      stream: true,
      messages: messages.map((message) => ({
        content: message.content,
        role: message.role,
      })) as ChatCompletionMessageParam[],
      response_format: { type: 'json_object' },
    })

    // Convert the response into a friendly text-stream
    return OpenAIStream(response)
  })
})

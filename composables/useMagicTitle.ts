import { watchRegistry } from '@formkit/core'
import type { FormKitNode } from '@formkit/core'
import type { UseChatHelpers } from 'ai/vue'
import { useChat } from 'ai/vue'

export const useUseMagicTitle = (nodeID: string) => {
  const loading = ref<boolean | undefined>(false)
  watchRegistry(nodeID, ({ payload: node }: { payload: FormKitNode }) => {
    const { append, isLoading } = useChat({
      headers: { 'Content-Type': 'application/json' },
      api: '/api/title',
      onResponse: async (response) => {
        const data = await response.json()
        if (
          data &&
          typeof data === 'object' &&
          'title' in data &&
          'slug' in data &&
          data.title &&
          data.slug
        ) {
          const titleNode = node.at('title')
          const slugNode = node.at('slug')
          if (titleNode) titleNode.props.suggestion = data.title
          if (slugNode) slugNode.props.suggestion = data.slug
        }
      },
    })

    watchEffect(() => {
      loading.value = isLoading.value
    })

    node.at('$root')?.use((child) => {
      child.addProps(['suggestion'])
    })

    node.on('commit', ({ payload: content }) => {
      append({
        role: 'user',
        content,
      })
    })
  })
  return loading
}

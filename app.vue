<script setup lang="ts">
import { FormKitIcon } from '@formkit/vue'
useHead({
  title: 'Create a new post',
})

async function submitHandler(_data, node) {
  // Simulate an api request
  await new Promise((resolve) => setTimeout(resolve, 2000))
  alert('Good job! You created a new post.')
  node.reset()
}

const isLoading = ref(false)
</script>

<template>
  <PostEditor>
    <FormKit
      type="form"
      #default="{ state: { valid, loading } }"
      :actions="false"
      @submit="submitHandler"
    >
      <FormKit
        type="textarea"
        :delay="500"
        name="post"
        id="postBody"
        label="Blog post"
        help="Enter you blog post here, markdown formatting is acceptable."
        validation="required"
        auto-height
      />
      <FormKit
        type="text"
        name="title"
        label="Title"
        help="Enter a title for your blog post."
        validation="required"
      />
      <FormKit
        type="text"
        name="slug"
        label="Slug"
        help="Enter a unique page slug for your blog post."
        validation="required"
      />
      <FormKit
        type="submit"
        label="Save post"
        :disabled="isLoading || loading || !valid"
      />
    </FormKit>
  </PostEditor>
</template>

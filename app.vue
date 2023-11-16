<script setup lang="ts">
useHead({
  title: 'Create a new post',
})

const isLoading = ref(true)
</script>

<template>
  <PostEditor>
    <FormKit type="form" #default="{ state: { valid } }" :actions="false">
      <FormKit
        type="textarea"
        name="post"
        label="Blog post"
        help="Enter you blog post here, markdown formatting is acceptable."
        validation="required"
      />
      <FormKit
        type="text"
        name="title"
        label="Title"
        help="Enter a title for your blog post."
        :prefix-icon="isLoading ? 'spinner' : null"
        prefix-icon-class="animate-spin"
        validation="required"
      />
      <FormKit
        type="text"
        name="slug"
        label="Slug"
        help="Enter a unique page slug for your blog post."
        :prefix-icon="isLoading ? 'spinner' : null"
        prefix-icon-class="animate-spin"
        validation="required"
      />
      <FormKit
        type="submit"
        label="Save post"
        :disabled="isLoading || !valid"
      />
    </FormKit>
  </PostEditor>
</template>

<script lang="ts" setup></script>

<template>
  <div class="flex flex-col justify-center">
    <TheLogo />
    <div
      class="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 flex flex-col mx-auto w-1/2 min-w-[30em]"
    >
      <h2 class="text-2xl mb-8">Create a new post</h2>
      <ClientOnly>
        <slot />
      </ClientOnly>
    </div>
  </div>
</template>

<style></style>

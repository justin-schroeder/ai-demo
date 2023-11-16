import { defineFormKitConfig } from '@formkit/vue'
import { createAutoHeightTextareaPlugin } from '@formkit/addons'
import { rootClasses } from './formkit.theme'

export default defineFormKitConfig(() => {
  return {
    plugins: [createAutoHeightTextareaPlugin()],
    config: {
      rootClasses,
    },
  }
})

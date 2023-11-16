import { defineFormKitConfig } from "@formkit/vue";
import { rootClasses } from './formkit.theme'

export default defineFormKitConfig(() => {
  return {
    config: {
      rootClasses
    }
  }
})
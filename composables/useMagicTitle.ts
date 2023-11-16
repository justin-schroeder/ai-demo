import type { FormKitNode } from '@formkit/core'
import { getNode } from '@formkit/core'

export const useUseMagicTitle = (nodeID: string) => {
  const loading = ref(false)
  onMounted(() => {
    const node = getNode(nodeID)
    if (node) synthesizeTitle(node)
  })
  return loading
}

function synthesizeTitle(node: FormKitNode) {
  node.on('commit', ({ payload: value }) => {
    if (value) {
      alert(`You typed: ${value}`)
    }
  })
}

import { ref, computed } from 'vue'

export const collapsed = ref(true)
export const toggleSidebar = () => (collapsed.value = !collapsed.value)

export const SIDEBAR_POS = 0
export const SIDEBAR_POS_COLLAPSED = -100
export const sidebarLeft = computed(
  () => `${collapsed.value ? SIDEBAR_POS_COLLAPSED : SIDEBAR_POS}%`
)

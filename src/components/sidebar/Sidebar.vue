<script>
import SidebarLink from './SidebarLink.vue'
import { collapsed, toggleSidebar, sidebarLeft } from './state.js'

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarLeft }
  }
}
</script>

<template>
  <div class="sidebar max-h-screen w-full bg-gray-800" :style="{ left: sidebarLeft }">
    <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/dashboard" icon="fas fa-columns">Dashboard</SidebarLink>
    <SidebarLink to="/analytics" icon="fas fa-chart-bar">Analytics</SidebarLink>
    <SidebarLink to="/friends" icon="fas fa-users">Friends</SidebarLink>
    <SidebarLink to="/image" icon="fas fa-image">Images</SidebarLink>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #3b82f6;
  --sidebar-item-active: #276749;
}
</style>

<style scoped>
.sidebar {
  color: white;

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  top: 94px;
  left: -100%;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;

  border-right: 3px solid #3b82f6;
    border-bottom: 3px solid #3b82f6;
    margin-bottom: 4rem;
}

.sidebar h1 {
  height: 2.5em;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>

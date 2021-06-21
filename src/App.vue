<template>
  <div>
    <Sidebar />
    <div>
      <Header />
      <main>
        <router-view/>
      </main>
    </div>
    <NavBar />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import NavBar from './components/NavBar.vue'
import Sidebar from './components/sidebar/Sidebar.vue'
import { sidebarLeft } from './components/sidebar/state.js'

export default defineComponent({
  components: { 
    Header,
    Footer,
    NavBar,
    Sidebar
  },
  setup() {
    return { sidebarLeft }
  }
})
</script>
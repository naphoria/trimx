<script>
import { defineComponent } from 'vue'
import ButtonRepo from '@/components/ButtonRepo.vue'
import Search from '@/components/Search.vue'
import Featured from '@/components/Featured.vue'

export default defineComponent({
  components: { ButtonRepo, Search },
})
</script>

<template>
    <Search />
    <Featured />
</template>
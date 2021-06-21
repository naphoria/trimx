<template>
  <div class="fixed bottom-0 left-0 right-0 bg-gray-800 z-10">
    <div class="flex flex-col sm:flex-row sm:justify-around">
        <div class="w-full">
            <nav class="my-3 flex w-full justify-center items-center">
              <!-- <div v-for="item in items" :key="item.id" class="w-1/3 flex justify-center items-center">
                <router-link to="{{ item.link }}" class="link-{{ item.id }}">
                  <div>{{ item.icon }}</div>
                  <{{ item.icon }} class="h-10 w-10 text-blue-500"/>
                </router-link>
              </div> -->
              <div class="w-1/3 flex justify-center items-center">
                <router-link to="#nav" class="link-1">
                  <MenuAlt2Icon
                    class="h-10 w-10 text-blue-500 collapse-icon"
                    :class="{ 'rotate-180': collapsed }"
                    @click="toggleSidebar"
                  />
                </router-link>
              </div>
              <div class="w-1/3 flex justify-center items-center">
                <router-link to="#order" class="link-1">
                  <BookOpenIcon class="h-10 w-10 text-blue-500"/>
                </router-link>
              </div>
              <div class="w-1/3 flex justify-center items-center">
                <router-link to="/profile" class="link-1">
                  <UserIcon class="h-10 w-10 text-blue-500"/>
                </router-link>
              </div>
            </nav>
        </div>
    </div>
  </div>
</template>

<script>
import { HeartIcon, MenuAlt2Icon, BookOpenIcon, UserIcon } from '@heroicons/vue/solid'
import { collapsed, toggleSidebar } from './sidebar/state.js'


export default {
  components: { HeartIcon, MenuAlt2Icon, BookOpenIcon, UserIcon },
  setup() {
    return { collapsed, toggleSidebar }
  },
  data() {
    return {
      items: [
        { 
          id: 1,
          title: 'Menu',
          link: '#nav',
          icon: MenuAlt2Icon  
          // icon : 'svg'
        },
        { 
          id: 2, 
          title: 'Book Now', 
          link: '#', 
          other: 'ETA: 0:15',
          icon: BookOpenIcon
        },
        {
          id: 3,
          title: 'Orders',
          link: '#',
          other: 1,
          icon: UserIcon
        }
      ]
    }
  },
}

// console.log(this.items);
</script>

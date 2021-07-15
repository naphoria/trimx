<template>
    <header class="bg-gray-800 shadow mb-2 border-b-4 border-blue-500" v-if="$route.meta.title == 'Home'">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-white border-b-2 border-white inline-block pb-1">Marketplace</h1>
      </div>
    </header>
    <header class="bg-gray-800 shadow mb-2 border-b-4 border-blue-500" v-else-if="$route.meta.title">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-white border-b-2 border-white inline-block pb-1">{{ $route.meta.title }}</h1>
      </div>
    </header>
    <header class="bg-white shadow" v-else>
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">Page</h1>
      </div>
    </header>
</template>
<script>
export default {
    name: 'Header',
}
</script>
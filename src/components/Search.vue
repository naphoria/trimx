<!-- TODO: Form Validation Postcode & Select -->
<!-- TODO: Disable submit until inputs have values -->
<!-- TODO: Return services from firebase on submit -->
<!-- TODO: Return local providers & services from firebase -->
<script>
export default {
    name: "HereAddressLookup",
    data() {
        return {
            postcode: '',
            selected: ''
        }
    },
        props: {
        query: String
    },
    watch: { },
    methods: {
        findBarber(event) {
            console.log(postcode);
        }
    }
}

console.log('postcode')
</script>
<template>
    <div class="min-w-screen bg-gray-800 flex items-center justify-center px-5 py-8">
        <div class="w-full mx-auto rounded-xl bg-gray-100 shadow-lg p-10 text-gray-800 relative overflow-hidden resize-x min-w-80 max-w-3xl" x-data="app()" x-init="generatePassword()">
            <div class="relative mt-1">
                <h2 class="font-bold mb-5 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">Find your barber</h2>
                <input type="text" id="postcode" class="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors mb-4" placeholder="Postcode">
                <select id="service" v-model="selected" class="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors mb-4">
                    <option disabled value="">Select A Service</option>
                    <option>Fade</option>
                    <option>Trim</option>
                    <option>Beard Trim</option>
                </select>
                <button @click="findBarber" class="bg-gray-800 text-white w-full px-6 py-3 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors">Get Barber ETA</button>
            </div>
            <div class="absolute top-0 left-0 w-full h-2 flex">
                <div class="h-2 bg-blue-500 flex-1"></div>
                <div class="h-2 bg-red-500 flex-1"></div>
                <div class="h-2 bg-yellow-500 flex-1"></div>
                <div class="h-2 bg-blue-500 flex-1"></div>
                <div class="h-2 bg-green-500 flex-1"></div>
                <div class="h-2 bg-red-500 flex-1"></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.min-w-80 {
    min-width: 20rem;
}
.resize::-webkit-resizer,
.resize-x::-webkit-resizer,
.resize-y::-webkit-resizer {
    background-color: transparent;
}
.resize:after,
.resize-x:after,
.resize-y:after {
    display: block;
    position: absolute;
    bottom: 5px;
    right: 5px;
    width: 24px;
    height: 24px;
    content: '\F045D';
    font: normal normal normal 24px/1 "Material Design Icons";
    font-size: 24px;
    text-rendering: auto;
    line-height: 24px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: rgba(0,0,0,0.3);
}
</style>
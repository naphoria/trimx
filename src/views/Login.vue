<script>
import { getAuth, signInWithEmailAndPassword, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { VueTelInput } from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'

export default {
  components: {
    VueTelInput,
  },
  data() {
    return {
      phoneActive: true,
      emailActive: false,
      phone: '',
    };
  },
  methods: {
    phoneOpen: function() {
      this.phoneActive = true;
      this.emailActive = false;
      // some code to filter users
    },
    emailOpen: function() {
      this.emailActive = true;
      this.phoneActive = false;
      // some code to filter users
    },
    onInput(phone, phoneObject, input) {
      if (phoneObject?.formatted) {
        this.phone = phoneObject.formatted
      }
    }
  },
  setup() {
    const auth = getAuth()
    const router = useRouter()
    const appVerifier = window.recaptchaVerifier;
    const phoneNumber = '+447583459034'

    const VueTelInputOptions = {
        allCountries: ['GB']
    }

    const handleSubmit = async e => {
      // if(authType != 'email') {

      // } else {
        
      // }

      const { email, password } = e.target.elements
      try {
        if ((typeof email !== 'undefined')) {
          await signInWithEmailAndPassword(auth, email.value, password.value)
          router.push('/')
        } else {
          signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
              // SMS sent. Prompt user to type the code from the message, then sign the
              // user in with confirmationResult.confirm(code).
              window.confirmationResult = confirmationResult;
              // ...
            }).catch((error) => {
              // Error; SMS not sent
              // ...
            });
        }
      } catch (e) {
        alert(e.message)
      }
    }

    return { handleSubmit }
  }
}
</script>

<template>
  <div class="login bg-white flex flex-col space-y-10 justify-center items-center">
    <div class="bg-white w-96 shadow-xl rounded p-5">
      <h1 class="text-3xl font-medium">Welcome</h1>
      <p class="text-sm">Choose your preffered login method</p>

      <div class="my-4 flex text-center">
          <button class="w-1/2 text-center py-2 px-3 rounded" :class="{ active: phoneActive }" @click="phoneOpen()" pressed="active ? 'true' : 'false'">Phone</button
          ><br />
          <button class="w-1/2 text-center py-2 px-3 rounded" :class="{ active: emailActive }" @click="emailOpen()">Email</button>
      </div>

      <form @submit.prevent="handleSubmit"  class="space-y-5 mt-5">
        <div v-if="phoneActive == true">
          <vue-tel-input :value="phone" @input="onInput"></vue-tel-input>
        </div>
        <div v-else>
          <input name="email"  type="email" class="w-full h-12 border border-gray-800 rounded px-3" placeholder="Email" />
        </div>
        <div class="w-full flex items-center border border-gray-800 rounded px-3">
          <input name="password" type="password" class="border-0 p-0 w-4/5 h-12" placeholder="Password" />
          <span class="text-blue-700 hover:bg-blue-400 rounded-md px-3">Show</span>
        </div>

        <div class="flex">
          <div class="w-1/2">
            <a href="/forgot" class="font-medium text-blue-900 hover:bg-blue-300 rounded-md p-2">Forgot Password ?</a>
          </div>
          <div class="w-1/2">
            <a href="/signup" class="font-medium text-blue-900 hover:bg-blue-300 rounded-md p-2">Sign Up</a>
          </div>
        </div>

        <button class="text-center w-full bg-blue-900 rounded-md text-white py-3 font-medium">Login</button>
      </form>
    </div>
  </div>
</template>

<style scoped>

form .vue-tel-input {
  border: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid #202a37;
  border-radius: 0.25rem;
  height: 3rem;
}
form .vue-tel-input input.vti__input {
  padding-left: 1rem;
  padding-right: 0.75rem;
}

.active {
  @apply bg-blue-900 text-white;
}
.login form .select-dropdown input[type="radio"]:checked,
.select-dropdown input[type="radio"]:checked + label {
  display: inline-block;
}

      /* ------- code generated using built tool ------------*/
      
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

.login form button,
.login form input,
.login form optgroup,
.login form select,
.login form textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
.login form button,
.login form input {
  overflow: visible;
}
.login form button,
.login form select {
  text-transform: none;
}
.login form [type="button"],
.login form [type="reset"],
.login form [type="submit"],
.login form button {
  -webkit-appearance: button;
}
.login form [type="button"]::-moz-focus-inner,
.login form [type="reset"]::-moz-focus-inner,
.login form [type="submit"]::-moz-focus-inner,
.login form button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
/* .login form [type="button"]:-moz-focusring,
.login form [type="reset"]:-moz-focusring,
.login form [type="submit"]:-moz-focusring,
.login form button:-moz-focusring {
  outline: 1px dotted ButtonText;
} */
.login form fieldset {
  padding: 0.35em 0.75em 0.625em;
}
.login form legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}
.login form progress {
  vertical-align: baseline;
}
.login form textarea {
  overflow: auto;
}
.login form [type="checkbox"],
.login form [type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
.login form [type="number"]::-webkit-inner-spin-button,
.login form [type="number"]::-webkit-outer-spin-button {
  height: auto;
}
.login form [type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
.login form [type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
.login form ::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
.login form details {
  display: block;
}
.login form summary {
  display: list-item;
}
.login form [hidden],
.login form template {
  display: none;
}


      
</style>
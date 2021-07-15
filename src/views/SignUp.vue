<script>
import { getAuth, createUserWithEmailAndPassword, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { VueTelInput } from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'

import { firebaseApp } from '../firebase'


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
    },
    onSignInSubmit() {
      console.log(this.phone);
      // if (isPhoneNumberValid()) {
        window.signingIn = true;
        // updateSignInButtonUI();
        const auth = getAuth();
        var phoneNumber = this.getPhoneNumberFromUserInput();
        var appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then(function (confirmationResult) {
              // SMS sent. Prompt user to type the code from the message, then sign the
              // user in with confirmationResult.confirm(code).
              window.confirmationResult = confirmationResult;
              window.signingIn = false;
              console.log('done');
              // updateSignInButtonUI();
              // updateVerificationCodeFormUI();
              // updateVerifyCodeButtonUI();
              // updateSignInFormUI();
            }).catch(function (error) {
              // Error; SMS not sent
              console.error('Error during signInWithPhoneNumber', error);
              window.alert('Error during signInWithPhoneNumber:\n\n'
                  + error.code + '\n\n' + error.message);
              window.signingIn = false;

              grecaptcha.reset(window.recaptchaWidgetId);

              // updateSignInFormUI();
              // updateSignInButtonUI();
            });

        // const auth = getAuth();
        // signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        //   .then((confirmationResult) => {
        //     // SMS sent. Prompt user to type the code from the message, then sign the
        //     // user in with confirmationResult.confirm(code).
        //     window.confirmationResult = confirmationResult;
        //     // ...
        //   }).catch((error) => {
        //     // Error; SMS not sent
        //     // ...
        //   });

      // }
    },
    onVerifyCodeSubmit(e) {
      e.preventDefault();
      if (!!this.getCodeFromUserInput()) {
        console.log('Verify')
        window.verifyingCode = true;
        // updateVerifyCodeButtonUI();
        var code = this.getCodeFromUserInput();
        console.log('Confirm code =' + code)
        confirmationResult.confirm(code).then(function (result) {
          // User signed in successfully.
          var user = result.user;
          window.verifyingCode = false;
          window.confirmationResult = null;
          // updateVerificationCodeFormUI();
        }).catch(function (error) {
          // User couldn't sign in (bad verification code?)
          console.error('Error while checking the verification code', error);
          window.alert('Error while checking the verification code:\n\n'
              + error.code + '\n\n' + error.message);
          window.verifyingCode = false;
          // updateSignInButtonUI();
          // updateVerifyCodeButtonUI();
        });
      }
    },
    getCodeFromUserInput() {
      return document.getElementById('verification-code').value;
    },
    onSignOutClick() {
      firebase.auth().signOut();
    },
    /**
     * Reads the phone number from the user input.
     */
    getPhoneNumberFromUserInput() {
      // return document.getElementById('phone-number').find('input').value;
      return this.phone
    },
    /**
     * Returns true if the phone number is valid.
     */
    isPhoneNumberValid() {
      // var pattern = /^\+[0-9\s\-\(\)]+$/;
      // var phoneNumber = getPhoneNumberFromUserInput();
      return true;
    }
  },
  setup() {
    // const auth = getAuth()
    // const router = useRouter()

    // const handleSubmit = async e => {
    //   const { email, password } = e.target.elements
    //   try {
    //     await createUserWithEmailAndPassword(auth, email.value, password.value)
    //     router.push('/')
    //   } catch (e) {
    //     alert(e.message)
    //   }
    // }
    // return { handleSubmit }

    
  },
  mounted() {
    const auth = getAuth()
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
      }
    }, auth);
  }
}
</script>

<template>
  <div class="auth bg-white flex flex-col space-y-10 justify-center items-center">
    <div class="bg-white w-96 shadow-xl rounded p-5">
      <h1 class="text-3xl font-medium">Sign Up</h1>
      <p class="text-sm">Choose your preffered method of registration.</p>

      <div class="my-4 flex text-center">
          <button class="w-1/2 text-center py-2 px-3 rounded" :class="{ active: phoneActive }" @click="phoneOpen()" pressed="active ? 'true' : 'false'">Phone</button
          ><br />
          <button class="w-1/2 text-center py-2 px-3 rounded" :class="{ active: emailActive }" @click="emailOpen()">Email</button>
      </div>

      <!-- Phone Input : Default -->
      <div v-if="phoneActive == true" class="mt-5">
        <div>
          <vue-tel-input id="phone-number" :value="phone" @input="onInput"></vue-tel-input>
        </div>
        <button class="mt-4 text-center w-full bg-blue-900 rounded-md text-white py-3 font-medium" id="sign-in-button" v-on:click="onSignInSubmit">
          Sign Up
        </button>
        <div>
          <input type="text" id="verification-code" class="mt-4 border border-gray-800 rounded px-3 h-12 w-full" placeholder="SMS Code" />
        </div>
        <!-- <div class="mt-4 w-full flex items-center border border-gray-800 rounded px-3">
          <input name="password" type="password" class="border-0 p-0 w-4/5 h-12" placeholder="Password" />
          <span class="text-blue-700 hover:bg-blue-400 rounded-md px-3 cursor-pointer">Show</span>
        </div> -->
        <button class="mt-4 text-center w-full bg-blue-900 rounded-md text-white py-3 font-medium" v-on:click="onVerifyCodeSubmit">
          Confirm
        </button>
      </div>

      <!-- Email Input -->
      <form v-else @submit.prevent="handleSubmit" class="space-y-5 mt-5">
        <div>
          <input name="email"  type="email" class="w-full h-12 border border-gray-800 rounded px-3" placeholder="Email" />
        </div>
        <div class="w-full flex items-center border border-gray-800 rounded px-3">
          <input name="password" type="password" class="border-0 p-0 w-4/5 h-12" placeholder="Password" />
          <span class="text-blue-700 hover:bg-blue-400 rounded-md px-3 cursor-pointer">Show</span>
        </div>
        <div class="w-full flex items-center border border-gray-800 rounded px-3">
          <input name="passwordConfirm" type="password" class="border-0 p-0 w-4/5 h-12" placeholder="Password Repeat" />
          <span class="text-blue-700 hover:bg-blue-400 rounded-md px-3 cursor-pointer">Show</span>
        </div>

        <button class="text-center w-full bg-blue-900 rounded-md text-white py-3 font-medium">Sign In</button>
      </form>

      <div class="flex mt-4">
        <div class="w-full">
          <a href="/login" class="font-medium text-blue-900 hover:bg-blue-300 rounded-md p-2">Log In</a>
        </div>
      </div>

      <!-- Add a container for reCaptcha -->
      <div id="recaptcha-container"></div>
    
    </div>
  </div>
</template>

<style scoped>

.auth 

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
.auth form .select-dropdown input[type="radio"]:checked,
.select-dropdown input[type="radio"]:checked + label {
  display: inline-block;
}

.auth form button,
.auth form input,
.auth form optgroup,
.auth form select,
.auth form textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
}
.auth form button,
.auth form input {
  overflow: visible;
}
.auth form button,
.auth form select {
  text-transform: none;
}
.auth form [type="button"],
.auth form [type="reset"],
.auth form [type="submit"],
.auth form button {
  -webkit-appearance: button;
}
.auth form [type="button"]::-moz-focus-inner,
.auth form [type="reset"]::-moz-focus-inner,
.auth form [type="submit"]::-moz-focus-inner,
.auth form button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
/* .auth form [type="button"]:-moz-focusring,
.auth form [type="reset"]:-moz-focusring,
.auth form [type="submit"]:-moz-focusring,
.auth form button:-moz-focusring {
  outline: 1px dotted ButtonText;
} */
.auth form fieldset {
  padding: 0.35em 0.75em 0.625em;
}
.auth form legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}
.auth form progress {
  vertical-align: baseline;
}
.auth form textarea {
  overflow: auto;
}
.auth form [type="checkbox"],
.auth form [type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
.auth form [type="number"]::-webkit-inner-spin-button,
.auth form [type="number"]::-webkit-outer-spin-button {
  height: auto;
}
.auth form [type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
.auth form [type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
.auth form ::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
.auth form details {
  display: block;
}
.auth form summary {
  display: list-item;
}
.auth form [hidden],
.auth form template {
  display: none;
}


      
</style>
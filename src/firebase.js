import { getAuth, onAuthStateChanged, RecaptchaVerifier } from 'firebase/auth'
import { ref, computed, onMounted, onUnmounted } from 'vue'

import { initializeApp } from 'firebase/app'

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyCrB3Qfl0E5fIIOhJn7fYgQCnolSF4FVlw",
    authDomain: "phade-marketplace.firebaseapp.com",
    projectId: "phade-marketplace",
    storageBucket: "phade-marketplace.appspot.com",
    messagingSenderId: "912227842913",
    appId: "1:912227842913:web:a1b45e6ae09070a6ade320",
    measurementId: "G-0337B65N93"
})

export const getUserState = () =>
  new Promise((resolve, reject) =>
    onAuthStateChanged(getAuth(), resolve, reject)
  )

export const useAuthState = () => {
  const user = ref(null)
  const error = ref(null)

  const auth = getAuth()
  let unsubscribe
  onMounted(() => {
    unsubscribe = onAuthStateChanged(
      auth,
      u => (user.value = u),
      e => (error.value = e)
    )
  })
  onUnmounted(() => unsubscribe())

  const isAuthenticated = computed(() => user.value != null)

  return { user, error, isAuthenticated }
}

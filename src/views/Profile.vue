<script>
import { getAuth, signOut, linkWithCredential, EmailAuthProvider } from 'firebase/auth'
import { useAuthState } from '../firebase'
import { useRouter } from 'vue-router'

export default {
  name: 'Home',
  data() {
    const auth = getAuth()

    return {
      isEditing: false,
      userFirstName: 'John',
      userLastName: 'Smith',
      userPhone: auth.phoneNumber
    };
  },
  setup() {
    const { user } = useAuthState()
    const auth = getAuth()

    const router = useRouter()
    const signOutUser = async () => {
      try {
        await signOut(auth)
        router.push('/login')
      } catch (e) {
        alert(e.message)
      }
    }

    console.log(user);
    const userPhone = user?.phoneNumber
    console.log(user.phoneNumber);

    return { user, signOutUser }

    // // Construct the email link credential from the current URL.
    // const credential = EmailAuthProvider.credentialWithLink(
    //   email, window.location.href);

    // // Link the credential to the current user.
    // const auth = getAuth();
    // linkWithCredential(auth.currentUser, credential)
    //   .then((usercred) => {
    //     // The provider is now successfully linked.
    //     // The phone user can now sign in with their phone number or email.
    //   })
    //   .catch((error) => {
    //     // Some error occurred.
    //   });
  }
}
</script>
<template>
  <h1>Welcome {{ user?.email }}!</h1>
  <h1>Welcome {{ user?.phoneNumber }}!</h1>

  <!-- User Settings -->
    <!-- User Role -->
      <!-- Apply to become a trimx/ valetx vendor (For them to provide there services & we charge a fee for any sales) -->
    <!-- User Email -->
    <!-- User Phone -->
    <!-- User Name -->
    <!-- User Address -->


  <!-- Vendor -->
    <!-- User Vendor Name -->
    <!-- User Vendor Role (Apprentice Barber, Barber, Hair Tech) -->
    <!-- User Vendor Messages -->

  <!-- User Role -->

  <!-- component -->
  <!-- component -->
  <!-- This is an example component -->

  <div class="h-full">
  
    <div class="border-b-2 block md:flex">

      
      <div class="max-w-7xl mx-auto w-full p-8 bg-white shadow-md">
        <div class="flex justify-between mb-4">
          <span class="text-xl font-semibold block">Profile</span>
          <button id="edit-profile" href="#" class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Edit</button>
          <button disabled id="save-profile" href="#" class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Save</button>
        </div>
        <div class="rounded  shadow p-6">
          <div class="pb-6">
            <label for="name" class="font-semibold text-gray-700 block pb-1">Name</label>
            <div class="flex">
              <input disabled id="username" class="border-1  rounded-r px-4 py-2 w-full" type="text" value="Jane Name" />
            </div>
          </div>
          <div class="pb-4">
            <label for="about" class="font-semibold text-gray-700 block pb-1">Email</label>
            <input disabled id="email" class="border-1  rounded-r px-4 py-2 w-full" type="email" value="example@example.com" />
          </div>
          <div class="pb-4">
            <label for="about" class="font-semibold text-gray-700 block pb-1">Phone</label>
            <!-- <input v-model="userPhone" :placeholder="userPhone" disabled id="email" class="border-1  rounded-r px-4 py-2 w-full" type="email" value="01234567890" /> -->
          </div>
          <div class="pb-4">
            <label for="about" class="font-semibold text-gray-700 block pb-1">Address</label>
            <input disabled id="email" class="border-1  rounded-r px-4 py-2 w-full" type="email" value="1 Street Avenue" />
          </div>
          <div class="pb-4">
            <label for="about" class="font-semibold text-gray-700 block pb-1">Postcode</label>
            <input disabled id="email" class="border-1  rounded-r px-4 py-2 w-full" type="email" value="WF2 7AW" />
          </div>
          <div class="pb-4">
            <label for="about" class="font-semibold text-gray-700 block pb-1">Town</label>
            <input disabled id="email" class="border-1  rounded-r px-4 py-2 w-full" type="email" value="Wood Town" />
          </div>
        </div>
      </div>

    </div>
  
  </div>

  <button @click="signOutUser">Sign Out</button>
</template>

<template>
  <header class="flex flex-col justify-between bg-[#1e2139] md:min-h-full min-w-[70px] z-50 md:flex-column md:rounded-r-lg">
    <div class="flex bg-[#7c5dfa] justify-center p-4 md:w-full h-[64px] cursor-pointer">
      <div>
        <img
          src="../assets/file-invoice-dollar-solid.png"
          alt="icon"
          class="w-full h-[30px]"
        >
      </div>
    </div>
    <div
      v-if="isLoggedIn"
      class="flex bg-[#7c5dfa] justify-center p-4 md:w-full h-[64px] cursor-pointer"
      @click="handleSignOut"
    >
      <div>
        <img
          src="../assets/logout.png"
          alt="icon"
          class="w-full h-[30px]"
        >
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import { useRouter } from "vue-router"

const isLoggedIn = ref(false)
let auth
const router = useRouter()

onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
    }
  })
})
const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push('/')
  })
}
</script>

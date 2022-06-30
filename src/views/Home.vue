<template>
  <div class="max-w-2xl mt-14 mx-auto text-white">
    <div class="flex items-center gap-x-10">
      <div class="w-1/2">
        <img
          src="../assets/anonymous.jpg"
          alt="anonymous"
        >
      </div>
      <div class="w-1/2">
        <div class=" flex flex-col gap-y-4">
          <router-link
            :to="{ name: 'Login' }"
            class="group flex items-center gap-x-5 p-5 border border-solid border-white rounded-md"
          >
            <img
              src="../assets/login.png"
              alt="icon"
              class="w-[48px]"
            >
            <div class="flex flex-col ">
              <span
                class="text-xl mb-1 relative group-hover:after:w-full after:content-[''] after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[1px] after:bg-white after:transition-all after:duration-500 after:hover:w-full;"
              >Logowanie</span>
              <span class="text-xs">Posiadam konto</span>
            </div>
          </router-link>
          <router-link
            :to="{ name: 'Register' }"
            class="group flex items-center gap-x-5 p-5 border border-solid border-white rounded-md"
          >
            <img
              src="../assets/register.png"
              alt="icon"
              class="w-[48px]"
            >
            <div class="flex flex-col ">
              <span
                class="text-xl mb-1 relative group-hover:after:w-full after:content-[''] after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[1px] after:bg-white after:transition-all after:duration-500 after:hover:w-full;"
              >Rejestracja</span>
              <span class="text-xs">Załóż konto.</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

}
</script>

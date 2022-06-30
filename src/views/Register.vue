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
        <div class="flex flex-col gap-y-3">
          <span class="text-xl">Rejestracja</span>
          <div class="flex flex-col gap-y-2 mb-2">
            <input
              v-model="email"
              type="text"
              placeholder="Email"
              class="w-full bg-[#1e2139] text-white rounded border-0 py-3 px-1  focus:outline-0"
            >
            <div class="relative">
              <input
                :type="isPassVisible ? 'text' : 'password'"
                v-model="password"
                placeholder="Hasło"
                class=" w-full bg-[#1e2139] text-white rounded border-0 py-3 px-1 focus:outline-0"
              >
              <svg
                @click="isPassVisible = !isPassVisible"
                class="absolute right-4 fill-[#141625] w-6 h-6 top-1/2 translate-y-[-50%] cursor-pointer"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <!-- eslint-disable -->
                <template v-if="isPassVisible">
                  <path
                    d="M2.07 12c2.03 3.61 5.68 6 9.82 6 4.15 0 7.8-2.39 9.83-6-2.03-3.61-5.68-6-9.83-6-4.14 0-7.8 2.39-9.82 6Zm-1.01-.24C3.2 7.74 7.25 5 11.89 5c4.65 0 8.69 2.74 10.84 6.76a.5.5 0 0 1 0 .48C20.58 16.26 16.54 19 11.89 19c-4.64 0-8.68-2.74-10.83-6.76a.5.5 0 0 1 0-.48Z"
                  />
                  <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"/>
                </template>
                <template v-else>
                  <path
                    d="M11.9 6.25c-4.24 0-7.96 2.5-9.96 6.24a.5.5 0 0 1-.88-.48C3.2 8 7.25 5.25 11.89 5.25c4.65 0 8.69 2.74 10.84 6.76a.5.5 0 0 1-.88.48c-2-3.75-5.72-6.24-9.96-6.24Z"
                  />
                  <path d="M20.1 4.15c.2.2.2.5 0 .7L4.6 20.35a.5.5 0 1 1-.7-.7l15.5-15.5c.2-.2.5-.2.7 0Z"/>
                  <path d="M15.5 12.25c0-.93-.36-1.78-.96-2.4l.73-.7a4.49 4.49 0 0 1-3.27 7.6c-1.2 0-2.29-.47-3.1-1.23l.7-.73a3.5 3.5 0 0 0 5.9-2.54Z"/>
                </template>
                <!-- eslint-enable -->
              </svg>
            </div>
          </div>
          <div class="flex flex-col gap-y-3">
            <button
              class="bg-[#252945] text-base py-2"
              @click="signWithGoogle"
            >
              Zarejestruj się za pomocą Google
            </button>
            <button
              class="bg-[#7c5dfa] text-base py-2"
              @click="register"
            >
              Stwórz konto
            </button>
          </div>
          <div class="flex mt-6 pt-4">
            <router-link
              class="group text-[#7c5dfa] text-sm underline flex items-center"
              to="/"
            >
              <span>Powrót</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="group-hover:translate-x-[2px] transition ease-in-out"
              >
                <line
                  x1="5"
                  y1="12"
                  x2="19"
                  y2="12"
                />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref("")
const password = ref("")
const isPassVisible = ref(false)

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      router.push('/start')
    })
    .catch((error) => {
      console.log(error.code)
      console.log(error.message)
    })
}

const signWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user)
      router.push('/start')

    })
    .catch((error) => {
      console.log(error.code)
      console.log(error.message)
    })
}

</script>


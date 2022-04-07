<template>
  <div class="flex flex-col md:flex-row min-h-screen bg-[#141625]">
    <div
      v-if="!mobile"
      class="flex w-full"
    >
      <Navigation />
      <div class="relative p-5 flex-1">
        <Modal v-if="modalActive" />
        <transition name="invoice">
          <InvoiceModal v-if="invoiceModal" />
        </transition>
        <router-view />
      </div>
    </div>
    <div
      v-else
      class="flex flex-col text-white justify-center items-center h-screen  "
    >
      <h2 class="font-bold text-xl">
        Sorry, this app is not supported on Mobile Devices
      </h2>
      <p class="mt-3">
        To use this app, please use a computer or Tablet
      </p>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Navigation from "./components/Navigation.vue"
import InvoiceModal from "./components/InvoiceModal.vue"
import Modal from "./components/partials/Modal.vue"

export default {
  components: {
    Navigation,
    InvoiceModal,
    Modal
  },
  data () {
    return {
      mobile: null,
    }
  },
  created () {
    this.checkScreen()
    window.addEventListener("resize", this.checkScreen)
  },
  computed: {
    ...mapState(['invoiceModal', 'modalActive'])
  },
  methods: {
    checkScreen () {
      const windowWidth = window.innerWidth
      if (windowWidth <= 750) {
        this.mobile = true
        return
      }
      this.mobile = false
    }
  }
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

button,
.button {
  cursor: pointer;
  padding: 16px 24px;
  border-radius: 30px;
  border: none;
  font-size: 12px;
  margin-right: 8px;
  color: #fff;
}

.dark-purple {
  background-color: #252945;
}

.red {
  background-color: #ec5757;
}

.purple {
  background-color: #7c5dfa;
}

.green {
  background-color: #33d69f;
}

.orange {
  background-color: #ff8f00;
}

.invoice-enter-active,
.invoice-leave-active {
  transition: 0.8s ease all;
}

.invoice-enter-from,
.invoice-leave-to {
  transform: translateX(-900px);
}


</style>

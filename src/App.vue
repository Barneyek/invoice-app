<template>
  <div class="flex flex-col md:flex-row min-h-screen bg-[#141625]">
    <div
      v-if="!mobile"
      class="flex w-full"
    >
      <Navigation v-if="!route.meta?.noUi" />
      <div class="relative p-5 flex-1">
        <Modal v-if="modalActive && !route.meta?.noUi" />
        <transition name="invoice">
          <InvoiceModal v-if="invoiceModal && !route.meta?.noUi" />
        </transition>
        <router-view />
      </div>
    </div>
    <div
      v-else
      class="flex flex-col text-white justify-center items-center h-screen"
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
import { mapState, mapActions } from 'vuex'
import Navigation from "./components/Navigation.vue"
import InvoiceModal from "./components/InvoiceModal.vue"
import Modal from "./components/partials/Modal.vue"
import { useRoute } from 'vue-router'

export default {
  components: {
    Navigation,
    InvoiceModal,
    Modal
  },
  setup () {
    const route = useRoute()
    return {
      mobile: null,
      route,
    };
  },
  created () {
    this.GET_INVOICES()
    this.checkScreen()
    window.addEventListener("resize", this.checkScreen)
  },
  computed: {
    ...mapState(['invoiceModal', 'modalActive', 'invoicesLoaded'])
  },
  methods: {
    ...mapActions(['GET_INVOICES']),
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

.invoice-enter-active,
.invoice-leave-active {
  transition: 0.8s ease all;
}

.invoice-enter-from,
.invoice-leave-to {
  transform: translateX(-900px);
}


</style>

<template>
  <div class="modal fixed flex justify-center items-center h-screen w-full z-50">
    <div class="rounded-xl py-10 px-8 max-w-[450px] text-white bg-[#252945]">
      <p class="text-center">
        Czy chcesz wyjść? Zmiany nie zostaną zapisane?
      </p>
      <div class="flex justify-between mt-7">
        <button
          class="flex-1 purple py-3 mr-3"
          @click="closeModal"
        >
          Powrót
        </button>
        <button
          class="flex-1 red py-3"
          @click="closeInvoice"
        >
          Zamknij
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState} from 'vuex'

export default {
  name: "Modal",
  data () {
    return {}
  },
  computed: {
    ...mapState(['editInvoice']),
  },
  methods: {
    ...mapMutations(['TOGGLE_MODAL', 'TOGGLE_INVOICE', 'TOGGLE_EDIT_INVOICE']),
    closeModal () {
      this.TOGGLE_MODAL()
    },
    closeInvoice () {
      this.TOGGLE_MODAL()
      this.TOGGLE_INVOICE()
      if (this.editInvoice) {
        this.TOGGLE_EDIT_INVOICE()
      }
    }
  }
}
</script>

<style scoped>

</style>

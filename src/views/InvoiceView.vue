<template>
  <div
    v-if="currentInvoice"
    class="max-w-2xl mt-14 mx-auto text-white"
  >
    <router-link
      class="no-underline flex mb-8 items-center text-white text-xs"
      :to="{name: 'Home' }"
    >
      <img
        src="../assets/icon-arrow-left.svg"
        alt="icon"
        class="mr-4 w-[7px] h-[10px]"
      >
      Powrót
    </router-link>
    <div class="flex items-center text-xs py-7 px-6 bg-[#1e2139] rounded-2xl">
      <div class="flex items-center">
        <span class="text-[#dfe3fa] mr-2">Status:</span>
        <div
          class="flex"
          :class="{paid: currentInvoice.invoicePaid, draft : currentInvoice.invoiceDraft, pending : currentInvoice.invoicePending}"
        >
          <div class="relative">
            <span
              v-if="currentInvoice.invoicePaid"
              class="flex-1 text-xs bg-[#293840] text-[#white] text-center min-w-[100px] pl-2 block py-1 rounded-lg before:content-[''] before:w-2 before:h-2 before:bg-[#40d640] before:absolute before:top-1/2 before:translate-y-[-50%] before:left-[10px] before:rounded-full"
            >
              Opłacona
            </span>
          </div>
          <div class="relative">
            <span
              v-if="currentInvoice.invoiceDraft"
              class="flex-1 text-xs bg-[#35394c] text-[white] text-center min-w-[70px] pl-5 pr-2 block py-1 rounded-lg before:content-[''] before:w-2 before:h-2 before:bg-[white] before:absolute before:top-1/2 before:translate-y-[-50%] before:left-[10px] before:rounded-full"
            >
              Szkic
            </span>
          </div>
          <div class="relative">
            <span
              v-if="currentInvoice.invoicePending"
              class="flex-1 text-xs bg-[#46393c] text-[#ffb23f] min-w-[90px] block text-center pl-2 py-1 rounded-lg before:content-[''] before:w-2 before:h-2 before:bg-[#ffb23f] before:absolute before:top-1/2 before:translate-y-[-50%] before:left-[10px] before:rounded-full"
            >
              Oczekuje
            </span>
          </div>
        </div>
      </div>
      <div class="flex flex-1 justify-end gap-2">
        <button
          class="dark-purple py-3 px-6 text-white"
          @click="toggleEditInvoice"
        >
          Edytuj
        </button>
        <button
          class="red py-3 px-6 text-white"
          @click="deleteInvoice(currentInvoice.docId)"
        >
          Usuń
        </button>
        <button
          v-if="currentInvoice.invoicePending"
          class="green py-3 px-6 text-white"
          @click="updateStatusToPaid(currentInvoice.docId)"
        >
          Oznacz jako opłaconą
        </button>
        <button
          v-if="currentInvoice.invoiceDraft || currentInvoice.invoicePaid"
          class="orange bg-[#ff8f00] px-3"
          @click="updateStatusToPending(currentInvoice.docId)"
        >
          Oczekiwanie na płatność
        </button>
      </div>
    </div>

    <!-- Invoice Details -->
    <div class="flex flex-col bg-[#1e2139] rounded-2xl py-7 px-6 mt-6">
      <div class="flex">
        <div class="flex flex-col flex-1 text-[#dfe3fa] text-xs">
          <p class="text-lg uppercase text-white mb-2">
            <span class="text-[#888eb0]">#</span>{{ currentInvoice.invoiceId }}
          </p>
          <p class="text-xs">
            {{ currentInvoice.productDescription }}
          </p>
        </div>
        <div class="flex flex-1 flex-col text-[#dfe3fa] text-xs items-end">
          <p>{{ currentInvoice.billerStreetAddress }}</p>
          <p>{{ currentInvoice.billerCity }}</p>
          <p>{{ currentInvoice.billerZipCode }}</p>
          <p>{{ currentInvoice.billerCountry }}</p>
        </div>
      </div>

      <div class="flex mt-10 text-[#dfe3fa] gap-10">
        <div class="flex flex-col">
          <h4 class="text-xs font-normal mb-3">
            Data faktury:
          </h4>
          <p class="text-base flex-1 font-semibold">
            {{ currentInvoice.invoiceDate }}
          </p>
          <h4 class="mt-8 text-xs font-normal mb-3">
            Data terminu płatności:
          </h4>
          <p class="text-base flex-1 font-semibold">
            {{ currentInvoice.paymentDueDate }}
          </p>
        </div>
        <div class="flex flex-col">
          <h4 class="text-xs font-normal mb-3">
            Informacje fakturo odbiorcy
          </h4>
          <p class="text-base mb-5 flex-1">
            {{ currentInvoice.clientName }}
          </p>
          <p class="text-sm flex-1">
            {{ currentInvoice.clientStreetAddress }}
          </p>
          <p class="text-sm flex-1">
            {{ currentInvoice.clientCity }}
          </p>
          <p class="text-sm flex-1">
            {{ currentInvoice.clientZipCode }}
          </p>
          <p class="text-sm flex-1">
            {{ currentInvoice.clientCountry }}
          </p>
        </div>
        <div class="flex flex-col">
          <h4 class="text-xs font-normal mb-3">
            Adres email
          </h4>
          <p class="text-base">
            {{ currentInvoice.clientEmail }}
          </p>
        </div>
      </div>

      <div class="flex flex-col mt-10 mb-3">
        <div class="flex flex-col p-8 rounded-t-lg bg-[#252945]">
          <div class="flex mb-6">
            <p class="text-xs text-[#dfe3fa] flex-[3] text-left">
              Nazwa Przedmiotu
            </p>
            <p class="text-xs text-[#dfe3fa] flex-1 text-left">
              Ilość
            </p>
            <p class="text-xs text-[#dfe3fa] flex-1 text-left">
              Cena
            </p>
            <p class="text-xs text-[#dfe3fa] flex-1 text-right">
              Wszystkich
            </p>
          </div>
          <div
            v-for="(item, index) in currentInvoice.invoiceItemList"
            :key="index"
            class="flex mb-8 text-xs text-white last:mb-0"
          >
            <p class="flex-[3] text-left">
              {{ item.itemName }}
            </p>
            <p class="flex-1 text-left">
              {{ item.qty }}
            </p>
            <p class="flex-1 text-left">
              {{ item.price }}
            </p>
            <p class="flex-1 text-right">
              {{ item.total }}
            </p>
          </div>
        </div>
        <div class="flex justify-between bg-[#141625] bg-opacity-50 p-8 items-center rounded-b-lg">
          <p class="text-xs">
            Do zapłaty
          </p>
          <p class="text-lg text-right">
            {{ currentInvoice.invoiceTotal }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex"

export default {
  name: "InvoiceView",
  data () {
    return {
      currentInvoice: null,
    }
  },
  computed: {
    ...mapState(['currentInvoiceArray', 'editInvoice']),
  },
  watch: {
    editInvoice() {
      if (!this.editInvoice) {
        this.currentInvoice = this.currentInvoiceArray[0]
      }
    },
  },
  created () {
    this.getCurrentInvoice()
  },
  methods: {
    ...mapMutations(['SET_CURRENT_INVOICE', 'TOGGLE_EDIT_INVOICE', "TOGGLE_INVOICE"]),
    ...mapActions(['DELETE_INVOICE', 'UPDATE_STATUS_TO_PENDING', 'UPDATE_STATUS_TO_PAID']),
    getCurrentInvoice () {
      this.SET_CURRENT_INVOICE(this.$route.params.invoiceId)
      this.currentInvoice = this.currentInvoiceArray[0]
    },
    toggleEditInvoice () {
      this.TOGGLE_EDIT_INVOICE()
      this.TOGGLE_INVOICE()
    },
    async deleteInvoice(docId) {
      await this.DELETE_INVOICE(docId)
      this.$router.push({name: 'Home' })
    },
    updateStatusToPaid(docId) {
      this.UPDATE_STATUS_TO_PAID(docId)
    },
    updateStatusToPending(docId) {
      this.UPDATE_STATUS_TO_PENDING(docId)
    },
  },
}
</script>

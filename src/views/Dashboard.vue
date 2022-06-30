<template>
  <div class="max-w-2xl mt-14 mx-auto text-white">
    <div class="header flex mb-10">
      <div class="left flex  flex-col">
        <h1 class="text-2xl">
          Faktury
        </h1>
        <span class="text-xs">Istnieją {{ invoiceData.length }} faktury</span>
      </div>
      <div class="right flex flex-1 justify-end items-center">
        <div
          class="filter flex items-center relative mr-10 cursor-pointer"
          @click="toggleFilterMenu"
        >
          <span class="text-sm mr-1">Filtruj po statusie: <span v-if="filteredInvoice">{{ filteredInvoice }}</span></span>
          <img
            class="pointer-events-none"
            src="../assets/icon-arrow-down.svg"
            alt="icon"
          >
          <ul
            v-show="filterMenu"
            class="filter-menu w-[120px] absolute top-[25px] list-none bg-[#1e2139] shadow-md"
          >
            <li
              class="cursor-pointer text-sm py-3 px-5 hover:text-[#1e2139] hover:bg-white"
              @click="filteredInvoices"
            >
              Szkic
            </li>
            <li
              class="cursor-pointer text-sm py-3 px-5 hover:text-[#1e2139] hover:bg-white"
              @click="filteredInvoices"
            >
              Oczekiwanie
            </li>
            <li
              class="cursor-pointer text-sm py-3 px-5 hover:text-[#1e2139] hover:bg-white"
              @click="filteredInvoices"
            >
              Opłacone
            </li>
            <li
              class="cursor-pointer text-sm py-3 px-5 hover:text-[#1e2139] hover:bg-white"
              @click="filteredInvoices"
            >
              Wyczyść
            </li>
          </ul>
        </div>
        <div
          class="button flex items-center py-2 px-3 bg-[#7c5dfa] rounded-3xl"
          @click="newInvoice"
        >
          <div class="inner-button flex justify-center items-center mr-1 rounded-full p-2 bg-white">
            <img
              class="pointer-events-none"
              src="../assets/icon-plus.svg"
              alt="icon"
            >
          </div>
          <span class="text-xs ml-1">Nowa faktura</span>
        </div>
      </div>
    </div>
    <div v-if="invoiceData.length > 0">
      <Invoice
        v-for="(invoice, key) in filteredData"
        :key="key"
        :invoice="invoice"
      />
    </div>
    <div
      v-else
      class="flex flex-col items-center mt-16"
    >
      <img
        alt="empty"
        class="w-[214px] h-[200px]"
        src="../assets/illustration-empty.svg"
      >
      <h3 class="text-2xl mt-5">
        Brak faktur
      </h3>
      <p class="max-w-[260px] text-xs mt-1 text-center font-light">
        Stwórz nową fakturę klikając w przycisk Nowa faktura
      </p>
    </div>
  </div>
</template>

<script>

import Invoice from  "../components/Invoice.vue"
import { mapMutations, mapState } from "vuex"

export default {
  name: 'Dashboard',
  components: {
    Invoice,
  },
  data () {
    return {
      filteredInvoice: null,
      filterMenu: false,
    }
  },
  computed: {
    ...mapState(['invoiceData']),

    filteredData () {
      return this.invoiceData.filter(invoice => {
        if (this.filteredInvoice === "Szkic") {
          return invoice.invoiceDraft === true
        }
        if (this.filteredInvoice === "Oczekiwanie") {
          return invoice.invoicePending === true
        }
        if (this.filteredInvoice === "Opłacone") {
          return invoice.invoicePaid === true
        }
        return invoice
      })
    }
  },
  methods: {
    ...mapMutations(['TOGGLE_INVOICE']),
    newInvoice () {
      this.TOGGLE_INVOICE()
    },
    toggleFilterMenu () {
      this.filterMenu = !this.filterMenu
    },
    filteredInvoices (e) {
      if (e.target.innerText === 'Wyczyść') {
        this.filteredInvoice = null
        return
      }
      this.filteredInvoice = e.target.innerText
    }
  }
}
</script>
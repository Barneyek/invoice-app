<template>
  <div class="max-w-2xl mt-14 mx-auto text-white">
    <div class="header flex mb-10">
      <div class="left flex  flex-col">
        <h1 class="text-2xl">
          Invoices
        </h1>
        <span class="text-xs">There are 4 total invoices</span>
      </div>
      <div class="right flex flex-1 justify-end items-center">
        <div
          class="filter flex items-center relative mr-10 cursor-pointer"
          @click="toggleFilterMenu"
        >
          <span class="text-sm mr-1">Filter by status</span>
          <img
            class="pointer-events-none"
            src="../assets/icon-arrow-down.svg"
            alt="icon"
          >
          <ul
            v-show="filterMenu"
            class="filter-menu w-[120px] absolute top-[25px] list-none bg-[#1e2139] shadow-md"
          >
            <li class="cursor-pointer text-sm py-3 px-5 hover:text-[#1e2139] hover:bg-white">
              Draft
            </li>
            <li class="cursor-pointer text-sm py-3 px-5 hover:text-[#1e2139] hover:bg-white">
              Pending
            </li>
            <li class="cursor-pointer text-sm py-3 px-5 hover:text-[#1e2139] hover:bg-white">
              Paid
            </li>
            <li class="cursor-pointer text-sm py-3 px-5 hover:text-[#1e2139] hover:bg-white">
              Clear Filter
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
          <span class="text-xs ml-1">New innovice</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: "Home",
  components: {},
  data () {
    return {
      filterMenu: false,
    }
  },
  methods: {
    ...mapMutations(['TOGGLE_INVOICE']),
    newInvoice () {
        this.TOGGLE_INVOICE();
    },
    toggleFilterMenu () {
      this.filterMenu = !this.filterMenu
    }
  }
}
</script>

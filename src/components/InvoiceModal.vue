<template>
  <div
    ref="invoiceWrap"
    class="scrollbar flex flex-col fixed top-0 left-0 bg-transparent	w-full h-screen overflow-scroll	left-[90px] max-w-[700px]"
    @click="checkClick"
  >
    <form
      class="invoice-content relative p-14  w-full bg-[#141625] text-white shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"
      @submit.prevent="submitForm"
    >
      <h1 class="text-3xl font-bold mb-5 text-white">
        New Invoice
      </h1>
      <div class="bill-form flex flex-col">
        <h4 class="text-[#7c5dfa] text-sm mb-3">
          Bill Form
        </h4>
        <div class="input mb-6 flex flex-col">
          <label class="text-xs mb-1" for="billerStreetAddress">Street Address:</label>
          <input
            id="billerStreetAddress"
            v-model="billerStreetAddress"
            class="w-full bg-[#1e2139] text-white rounded border-0 py-3 px-1 focus:outline-0"
            type="text"
            required
          >
        </div>

        <!-- Bill From-->
        <div class="localization-details mb-12 flex gap-4">
          <div class="input mb-6 flex flex-col flex-1">
            <label
              class="text-xs mb-1"
              for="billerCity"
            >
              Biller City:
            </label>
            <input
              id="billerCity"
              v-model="billerCity"
              class="w-full bg-[#1e2139] text-white rounded border-0 py-3 px-1 focus:outline-0"
              type="text"
              required
            >
          </div>
          <div class="input mb-6 flex flex-col flex-1">
            <label
              class="text-xs mb-1"
              for="billerZipCode"
            >
              Biller Zip Code:
            </label>
            <input
              id="billerZipCode"
              v-model="billerZipCode"
              class="w-full bg-[#1e2139] text-white rounded border-0 py-3 px-1 focus:outline-0"
              type="text"
              required
            >
          </div>
          <div class="input mb-6 flex flex-col flex-1">
            <label
              class="text-xs mb-1"
              for="billerCountry"
            >
              Biller Country:
            </label>
            <input
              id="billerCountry"
              v-model="billerCountry"
              class="w-full bg-[#1e2139] text-white rounded border-0 py-3 px-1 focus:outline-0"
              type="text"
              required
            >
          </div>
        </div>

        <!-- Bill To-->
        <div class="bill-to mb-12 flex flex-col">
          <h4 class="text-[#7c5dfa] text-sm mb-3">
            Bill to
          </h4>
          <div class="input mb-6 flex flex-col">
            <label
              class="text-xs mb-1"
              for="clientName"
            >
              Client name:
            </label>
            <input
              id="clientName"
              v-model="clientName"
              class="w-full bg-[#1e2139] text-white rounded border-0 py-3 px-1 focus:outline-0"
              type="text"
              required
            >
          </div>
          <div class="input mb-6 flex flex-col">
            <label
              class="text-xs mb-1"
              for="clientEmail"
            >
              Client e-mail:
            </label>
            <input
              id="clientEmail"
              v-model="clientEmail"
              class="w-full bg-[#1e2139] text-white rounded border-0 py-3 px-1 focus:outline-0"
              type="text"
              required
            >
          </div>
          <div class="input mb-6 flex flex-col">
            <label
              class="text-xs mb-1"
              for="clientStreetAddress"
            >
              Client street Address:
            </label>
            <input
              id="clientStreetAddress"
              v-model="clientStreetAddress"
              class="w-full bg-[#1e2139] text-white rounded border-0 py-3 px-1 focus:outline-0"
              type="text"
              required
            >
          </div>
          <div class="localization-details flex gap-4">
            <div class="input mb-6 flex flex-col flex-1">
              <label
                class="text-xs mb-1"
                for="clientCity"
              >
                Client city:
              </label>
              <input
                id="clientCity"
                v-model="clientCity"
                class="w-full bg-[#1e2139] text-white rounded border-0 py-3 px-1 focus:outline-0"
                type="text"
                required
              >
            </div>
            <div class="input mb-6 flex flex-col flex-1">
              <label
                class="text-xs mb-1"
                for="clientZipCode"
              >
                Client zip code:
              </label>
              <input
                id="clientZipCode"
                v-model="clientZipCode"
                class="w-full bg-[#1e2139] text-white rounded border-0 py-3 px-1 focus:outline-0"
                type="text"
                required
              >
            </div>
            <div class="input mb-6 flex flex-col flex-1">
              <label
                class="text-xs mb-1"
                for="clientCountry"
              >
                Client country:
              </label>
              <input
                id="clientCountry"
                v-model="clientCountry"
                class="w-full bg-[#1e2139] text-white rounded border-0 py-3 px-1 focus:outline-0"
                type="text"
                required
              >
            </div>
          </div>
        </div>

        <!-- Inovice Work Details-->
        <div class="invoice-work flex flex-col">
          <div class="payment flex gap-4">
            <div class="input mb-6 flex flex-col flex-1">
              <label
                class="text-xs mb-1"
                for="invoiceDate"
              >
                Invoice Date
              </label>
              <input
                id="invoiceDate"
                v-model="invoiceDate"
                class="w-full bg-[#1e2139] text-white rounded border-0 py-3 px-1 focus:outline-0"
                type="text"
                disabled
              >
            </div>
            <div class="input mb-6 flex flex-col flex-1">
              <label
                class="text-xs mb-1"
                for="paymentDueDate"
              >
                Payment Due date:
              </label>
              <input
                id="paymentDueDate"
                v-model="paymentDueDate"
                class="w-full bg-[#1e2139] text-white rounded border-0 py-3 px-1 focus:outline-0"
                type="text"
                disabled
              >
            </div>
          </div>
          <div class="input mb-6 flex flex-col">
            <label
              class="text-xs mb-1"
              for="paymentTerms"
            >
              Payment Terms:
            </label>
            <select
              id="paymentTerms"
              v-model="paymentTerms"
              class="w-full bg-[#1e2139] text-white rounded-sm border-0 py-3 px-1 cursor-pointer focus:outline-0"
              type="text"
            >
              <option value="30">
                30 days
              </option>
              <option value="60">
                60 days
              </option>
            </select>
          </div>
          <div class="input mb-6 flex flex-col">
            <label
              class="text-xs mb-1"
              for="productDescription"
            >
              Product Description:
            </label>
            <input
              id="productDescription"
              v-model="productDescription"
              class="w-full bg-[#1e2139] text-white rounded border-0 py-3 px-1 focus:outline-0"
              type="text"
              disabled
            >
          </div>
          <div class="work-items">
            <h3 class="mb-3 text-xl font-bold text-[#777f98]">
              Item List
            </h3>
            <table class="item-list w-full">
              <tr class="table-heading mb-4 flex gap-4 text-xs">
                <th class="item-name flex basis-1/2 text-left">
                  Item Name
                </th>
                <th class="qty basis-[10%] text-left">
                  Qty
                </th>
                <th class="price basis-[20%] text-left">
                  Price
                </th>
                <th class="total basis-[20%] items-center text-left">
                  Total
                </th>
              </tr>
              <tr
                v-for="(item, index) in invoiceItemList"
                :key="index"
                class="table-items relative mb-6 flex gap-4 text-xs"
              >
                <td class="item-name flex basis-1/2">
                  <input
                    v-model="item.itemName"
                    class="w-full bg-[#1e2139] text-white rounded border-0 py-3 px-1 focus:outline-0"
                    type="text"
                  >
                </td>
                <td class="qty basis-[10%]">
                  <input
                    v-model="item.qty"
                    class="w-full bg-[#1e2139] text-white rounded border-0 py-3 px-1 focus:outline-0"
                    type="text"
                  >
                </td>
                <td class="price basis-[20%]">
                  <input
                    v-model="item.price"
                    class="w-full bg-[#1e2139] text-white rounded border-0 py-3 px-1 focus:outline-0"
                    type="text"
                  >
                </td>
                <td class="total basis-[20%] items-center">
                  {{ (item.total = item.qty * item.price) }}
                </td>
                <img
                  src="../assets/icon-delete.svg"
                  alt="icon"
                  class="absolute top-[15px] right-0 w-[12px] h-[16px]"
                  @click="deleteInvoiceItem(item.id)"
                >
              </tr>
            </table>
            <div
              class="flex items-center justify-center w-full button text-white bg-[#252945]"
              @click="addNewInoviceItem"
            >
              <img
                src="../assets/icon-plus.svg"
                alt="icon"
                class="mr-1"
              >
              Add New Item
            </div>
          </div>
        </div>

        <!-- Save/Exit-->
        <div class="save flex mt-16">
          <div class="left flex flex-1">
            <button
              class="red py-4 px-6"
              @click="closeInvoice"
            >
              Cancel
            </button>
          </div>
          <div class="right flex gap-3">
            <button
              class="dark-purple py-4 px-6"
              @click="saveDraft"
            >
              Save Draft
            </button>
            <button
              class="purple py-4 px-6"
              @click="publishInvoice"
            >
              Create Invoice
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex"

export default {
  name: "InvoiceModal",
  data () {
    return {
      dateOptions: {year: "numeric", month: "short", day: "numeric"},
      billerStreetAddress: null,
      billerCity: null,
      billerZipCode: null,
      billerCountry: null,
      clientName: null,
      clientEmail: null,
      clientStreetAddress: null,
      clientCity: null,
      clientZipCode: null,
      clientCountry: null,
      invoiceDateUnix: null,
      invoiceDate: null,
      paymentTerms: null,
      paymentDueDateUnix: null,
      paymentDueDate: null,
      productDescription: null,
      invoicePending: null,
      invoiceDraft: null,
      invoiceItemList: [],
      invoiceTotal: 0
    }
  },
  watch: {
    paymentTerms () {
      const futureDate = new Date()
      this.paymentDueDateUnix = futureDate.setDate(futureDate.getDate() + parseInt(this.paymentTerms))
      this.paymentDueDate = new Date(this.paymentDueDateUnix).toLocaleDateString('en-us', this.dateOptions)
    }
  },
  created () {
    this.invoiceDateUnix = Date.now()
    this.invoiceDate = new Date(this.invoiceDateUnix).toLocaleDateString('pl-PL', this.dateOptions)
  },
  methods: {
    ...mapMutations(['TOGGLE_INVOICE']),
    closeInvoice () {
      this.TOGGLE_INVOICE()
    }
  },
}
</script>

<style>
.scrollbar::-webkit-scrollbar {
  display: none;
}
</style>

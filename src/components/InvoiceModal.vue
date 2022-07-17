<template>
  <div
    ref="invoiceWrap"
    class="scrollbar flex flex-col fixed top-0 left-0 bg-transparent w-full h-screen overflow-scroll left-[71px] z-20"
    @click="checkClick"
  >
    <form
      class="relative p-14 w-full bg-[#141625] text-white border-r border-white  max-w-[700px]"
      @submit.prevent="submitForm"
    >
      <Loading v-show="loading" />
      <h1
        v-if="!editInvoice"
        class="text-3xl font-bold mb-5 text-white"
      >
        Nowa faktura
      </h1>
      <h1
        v-else
        class="text-3xl font-bold mb-5 text-white"
      >
        Edytuj fakturę
      </h1>
      <div class="bill-form flex flex-col">
        <h4 class="text-[#7c5dfa] text-sm mb-3">
          Dane od:
        </h4>
        <div class="input mb-6 flex flex-col">
          <label
            class="text-xs mb-1"
            for="billerStreetAddress"
          >
            Ulica
          </label>
          <input
            id="billerStreetAddress"
            v-model="billerStreetAddress"
            class="w-full bg-[#1e2139] text-white rounded border-0 py-3 px-1 focus:outline-0"
            type="text"
          >
          <span
            v-if="v$.billerStreetAddress.$error"
            class="text-[#f14f4f] text-xs pt-1"
          >
            To pole jest wymagane!
          </span>
        </div>
        <div class="mb-12 flex gap-4">
          <div class="input mb-6 flex flex-col flex-1">
            <label
              class="text-xs mb-1"
              for="billerCity"
            >
              Miasto
            </label>
            <input
              id="billerCity"
              v-model="billerCity"
              class="w-full bg-[#1e2139] text-white rounded border-0 py-3 px-1 focus:outline-0"
              type="text"
            >
            <div v-if="v$.billerCity.$error">
              <span
                v-if="v$.billerCity.required.$invalid"
                class="text-[#f14f4f] text-xs pt-1"
              >
                To pole jest wymagane!
              </span>
              <span
                v-if="v$.billerCity.minLength.$invalid"
                class="text-[#f14f4f] text-xs pt-1"
              >
                Minimalna długośc znaków musi być dłuższa niż 3!
              </span>
            </div>
          </div>
          <div class="input mb-6 flex flex-col flex-1">
            <label
              class="text-xs mb-1"
              for="billerZipCode"
            >
              Kod pocztowy
            </label>
            <input
              id="billerZipCode"
              v-model="billerZipCode"
              class="w-full bg-[#1e2139] text-white rounded border-0 py-3 px-1 focus:outline-0"
              type="text"
            >
            <span
              v-if="v$.billerZipCode.$error"
              class="text-[#f14f4f] text-xs pt-1"
            >
              To pole jest wymagane!
            </span>
          </div>
          <div class="input mb-6 flex flex-col flex-1">
            <label
              class="text-xs mb-1"
              for="billerCountry"
            >
              Państwo
            </label>
            <input
              id="billerCountry"
              v-model="billerCountry"
              class="w-full bg-[#1e2139] text-white rounded border-0 py-3 px-1 focus:outline-0"
              type="text"
            >
            <div v-if="v$.billerCountry.$error">
              <span
                v-if="v$.billerCountry.required.$invalid"
                class="text-[#f14f4f] text-xs pt-1"
              >
                To pole jest wymagane!
              </span>
              <span
                v-if="v$.billerCountry.minLength.$invalid"
                class="text-[#f14f4f] text-xs pt-1"
              >
                Minimalna długośc znaków musi być dłuższa niż 3!
              </span>
            </div>
          </div>
        </div>

        <!-- Bill To-->
        <div class="bill-to mb-12 flex flex-col">
          <h4 class="text-[#7c5dfa] text-sm mb-3">
            Dane klienta:
          </h4>
          <div class="input mb-6 flex flex-col">
            <label
              class="text-xs mb-1"
              for="clientName"
            >
              Imię
            </label>
            <input
              id="clientName"
              v-model="clientName"
              class="w-full bg-[#1e2139] text-white rounded border-0 py-3 px-1 focus:outline-0"
              type="text"
            >
            <span
              v-if="v$.clientName.$error"
              class="text-[#f14f4f] text-xs pt-1"
            >
              To pole jest wymagane!
            </span>
          </div>
          <div class="input mb-6 flex flex-col">
            <label
              class="text-xs mb-1"
              for="clientEmail"
            >
              Adres e-mail
            </label>
            <input
              id="clientEmail"
              v-model="clientEmail"
              class="w-full bg-[#1e2139] text-white rounded border-0 py-3 px-1 focus:outline-0"
              type="text"
            >
            <div v-if="v$.clientEmail.$error">
              <span
                v-if="v$.clientEmail.required.$invalid"
                class="text-[#f14f4f] text-xs pt-1"
              >
                To pole jest wymagane!
              </span>
              <span
                v-if="v$.clientEmail.email.$invalid"
                class="text-[#f14f4f] text-xs pt-1"
              >
                Niepoprawny adres email.
              </span>
            </div>
          </div>
          <div class="input mb-6 flex flex-col">
            <label
              class="text-xs mb-1"
              for="clientStreetAddress"
            >
              Ulica
            </label>
            <input
              id="clientStreetAddress"
              v-model="clientStreetAddress"
              class="w-full bg-[#1e2139] text-white rounded border-0 py-3 px-1 focus:outline-0"
              type="text"
            >
            <span
              v-if="v$.clientStreetAddress.$error"
              class="text-[#f14f4f] text-xs pt-1"
            >
              To pole jest wymagane!
            </span>
          </div>
          <div class="localization-details flex gap-4">
            <div class="input mb-6 flex flex-col flex-1">
              <label
                class="text-xs mb-1"
                for="clientCity"
              >
                Miasto
              </label>
              <input
                id="clientCity"
                v-model="clientCity"
                class="w-full bg-[#1e2139] text-white rounded border-0 py-3 px-1 focus:outline-0"
                type="text"
              >
              <div v-if="v$.clientCity.$error">
                <span
                  v-if="v$.clientCity.required.$invalid"
                  class="text-[#f14f4f] text-xs pt-1"
                >
                  To pole jest wymagane!
                </span>
                <span
                  v-if="v$.clientCity.minLength.$invalid"
                  class="text-[#f14f4f] text-xs pt-1"
                >
                Minimalna długośc znaków musi być dłuższa niż 3!
              </span>
              </div>
            </div>
            <div class="input mb-6 flex flex-col flex-1">
              <label
                class="text-xs mb-1"
                for="clientZipCode"
              >
                Kod pocztowy
              </label>
              <input
                id="clientZipCode"
                v-model="clientZipCode"
                class="w-full bg-[#1e2139] text-white rounded border-0 py-3 px-1 focus:outline-0"
                type="text"
              >
              <span
                v-if="v$.clientZipCode.$error"
                class="text-[#f14f4f] text-xs pt-1"
              >
                              To pole jest wymagane!
              </span>
            </div>
            <div class="input mb-6 flex flex-col flex-1">
              <label
                class="text-xs mb-1"
                for="clientCountry"
              >
                Państwo
              </label>
              <input
                id="clientCountry"
                v-model="clientCountry"
                class="w-full bg-[#1e2139] text-white rounded border-0 py-3 px-1 focus:outline-0"
                type="text"
              >
              <div v-if="v$.clientCountry.$error">
                <span
                  v-if="v$.clientCountry.required.$invalid"
                  class="text-[#f14f4f] text-xs pt-1"
                >
                  To pole jest wymagane!
                </span>
                <span
                  v-if="v$.clientCountry.minLength.$invalid"
                  class="text-[#f14f4f] text-xs pt-1"
                >
                Minimalna długośc znaków musi być dłuższa niż 3!
              </span>
              </div>
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
                Data faktury
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
                Termin płatności
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
              Czas zapłaty
            </label>
            <select
              id="paymentTerms"
              v-model="paymentTerms"
              class="w-full bg-[#1e2139] text-white rounded-sm border-0 py-3 px-1 cursor-pointer focus:outline-0"
              type="text"
            >
              <option value="30">
                30 dni
              </option>
              <option value="60">
                60 dni
              </option>
            </select>
            <span
              v-if="v$.paymentTerms.$error"
              class="text-[#f14f4f] text-xs pt-1"
            >
              To pole jest wymagane!
            </span>
          </div>
          <div class="input mb-6 flex flex-col">
            <label
              class="text-xs mb-1"
              for="productDescription"
            >
              Opis produktów:
            </label>
            <input
              id="productDescription"
              v-model="productDescription"
              class="w-full bg-[#1e2139] text-white rounded border-0 py-3 px-1 focus:outline-0"
              type="text"
            >
          </div>
          <div class="work-items">
            <h3 class="mb-3 text-xl font-bold text-[#777f98]">
              Lista produktów
            </h3>
            <table class="item-list w-full">
              <tr class="table-heading mb-4 flex gap-4 text-xs">
                <th class="item-name flex basis-1/2 text-left">
                  Nazwa przedmiotu
                </th>
                <th class="qty basis-[10%] text-left">
                  Ilość
                </th>
                <th class="price basis-[20%] text-left">
                  Cena za szt
                </th>
                <th class="total basis-[20%] items-center text-left">
                  Razem
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
                <td class="total basis-[20%] flex items-center">
                  {{ (item.total = item.qty * item.price) }} zł
                </td>
                <img
                  src="../assets/icon-delete.svg"
                  alt="icon"
                  class="absolute top-[15px] right-0 w-[12px] h-[16px] cursor-pointer"
                  @click="deleteInvoiceItem(item.id)"
                >
              </tr>
            </table>
            <div
              class="flex items-center justify-center w-full button text-white bg-[#252945]"
              @click="addNewInvoiceItem"
            >
              <img
                src="../assets/icon-plus.svg"
                alt="icon"
                class="mr-1"
              >
              Dodaj nowy przedmiot
            </div>
          </div>
        </div>

        <!-- Save/Exit-->
        <div class="flex mt-16">
          <div class="flex flex-1">
            <button
              type="button"
              class="bg-[#ec5757] py-4 px-6"
              @click="closeInvoice"
            >
              Anuluj
            </button>
          </div>
          <div class="flex gap-3">
            <button
              v-if="!editInvoice"
              type="submit"
              class="bg-[#252945] py-4 px-6 rounded-2xl bg"
              @click="saveDraft"
            >
              Zapisz szkic
            </button>
            <button
              v-if="!editInvoice"
              type="submit"
              class="bg-[#7c5dfa] py-4 px-6"
              @click="publishInvoice"
            >
              Stwórz fakturę
            </button>
            <button
              v-if="editInvoice"
              type="submit"
              class="bg-[#7c5dfa] py-4 px-6"
              @click="publishInvoice"
            >
              Aktualizuj
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import db from '../firebase/firebaseInit'
import { mapMutations, mapState, mapActions } from "vuex"
import { uid } from 'uid'
import Loading from "./partials/Loading.vue"
import useValidate from '@vuelidate/core'
import { required, email, minLength } from "@vuelidate/validators"

export default {
  name: "InvoiceModal",
  components: {
    Loading,
  },
  data () {
    return {
      v$: useValidate(),
      loading: null,
      docId: null,
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
      invoicePaid: null,
      invoiceDraft: null,
      invoiceItemList: [],
      invoiceTotal: 0
    }
  },
  computed: {
    ...mapState(['editInvoice', 'currentInvoiceArray'])
  },
  watch: {
    paymentTerms () {
      const futureDate = new Date()
      this.paymentDueDateUnix = futureDate.setDate(futureDate.getDate() + parseInt(this.paymentTerms))
      this.paymentDueDate = new Date(this.paymentDueDateUnix).toLocaleDateString('en-us', this.dateOptions)
    }
  },
  created () {
    if (!this.editInvoice) {
      this.invoiceDateUnix = Date.now()
      this.invoiceDate = new Date(this.invoiceDateUnix).toLocaleDateString('pl-PL', this.dateOptions)
    }

    if (this.editInvoice) {
      const currentInvoice = this.currentInvoiceArray[0]
      console.dir(currentInvoice)
      this.docId = currentInvoice.docId
      this.billerStreetAddress = currentInvoice.billerStreetAddress
      this.billerCity = currentInvoice.billerCity
      this.billerZipCode = currentInvoice.billerZipCode
      this.billerCountry = currentInvoice.billerCountry
      this.clientName = currentInvoice.clientName
      this.clientEmail = currentInvoice.clientEmail
      this.clientStreetAddress = currentInvoice.clientStreetAddress
      this.clientCity = currentInvoice.clientCity
      this.clientZipCode = currentInvoice.clientZipCode
      this.clientCountry = currentInvoice.clientCountry
      this.invoiceDateUnix = currentInvoice.invoiceDateUnix
      this.invoiceDate = currentInvoice.invoiceDate
      this.paymentTerms = currentInvoice.paymentTerms
      this.paymentDueDateUnix = currentInvoice.paymentDueDateUnix
      this.paymentDueDate = currentInvoice.paymentDueDate
      this.productDescription = currentInvoice.productDescription
      this.invoicePending = currentInvoice.invoicePending
      this.invoicePaid = currentInvoice.invoicePaid
      this.invoiceDraft = currentInvoice.invoiceDraft
      this.invoiceItemList = currentInvoice.invoiceItemList
      this.invoiceTotal = currentInvoice.invoiceTotal
    }
  },
  validations () {
    return {
      billerStreetAddress: { required },
      billerCity: { required, minLength: minLength(3) },
      billerZipCode: { required },
      billerCountry: { required, minLength: minLength(3)},
      clientName: { required },
      clientEmail: { required, email },
      clientStreetAddress: { required },
      clientCity: { required, minLength: minLength(3) },
      clientZipCode: { required },
      clientCountry: { required, minLength: minLength(3) },
      paymentTerms: { required },
    }
  },
  methods: {
    ...mapMutations(['TOGGLE_INVOICE', 'TOGGLE_MODAL', 'TOGGLE_EDIT_INVOICE']),
    ...mapActions(['UPDATE_INVOICE', 'GET_INVOICES']),
    checkClick (e) {
      if (e.target === this.$refs.invoiceWrap) {
        this.TOGGLE_MODAL()
      }
    },
    closeInvoice () {
      this.TOGGLE_INVOICE()
      if (this.editInvoice) {
        this.TOGGLE_EDIT_INVOICE()
      }
    },
    addNewInvoiceItem () {
      this.invoiceItemList.push({
        id: uid(),
        itemName: "",
        qty: "",
        price: 0,
        total: 0
      })
    },
    deleteInvoiceItem (id) {
      this.invoiceItemList = this.invoiceItemList.filter(item => item.id !== id)
    },
    calInvoiceTotal () {
      this.invoiceTotal = 0
      this.invoiceItemList.forEach(item => {
        this.invoiceTotal += item.total
      })
    },
    publishInvoice () {
      this.invoicePending = true
    },
    saveDraft () {
      this.invoiceDraft = true
    },
    async uploadInvoice () {
      if (this.invoiceItemList.length <= 0) {
        alert('Upewnij się, że wypełniłeś listę rzeczy')
        return
      }

      const result = await this.v$.$validate()
      if (!result) {
        alert('Bład, sprawdź wszystkie pola')
        return
      }
      this.loading = true
      this.calInvoiceTotal()

      const dataBase = db.collection('invoices').doc()
      await dataBase.set({
        invoiceId: uid(6),
        billerStreetAddress: this.billerStreetAddress,
        billerCity: this.billerCity,
        billerZipCode: this.billerZipCode,
        billerCountry: this.billerCountry,
        clientName: this.clientName,
        clientEmail: this.clientEmail,
        clientStreetAddress: this.clientStreetAddress,
        clientCity: this.clientCity,
        clientZipCode: this.clientZipCode,
        clientCountry: this.clientCountry,
        invoiceDateUnix: this.invoiceDateUnix,
        invoiceDate: this.invoiceDate,
        paymentTerms: this.paymentTerms,
        paymentDueDateUnix: this.paymentDueDateUnix,
        paymentDueDate: this.paymentDueDate,
        productDescription: this.productDescription,
        invoicePaid: this.invoicePaid,
        invoicePending: this.invoicePending,
        invoiceDraft: this.invoiceDraft,
        invoiceItemList: this.invoiceItemList,
        invoiceTotal: this.invoiceTotal,
      })
      this.loading = false
      this.TOGGLE_INVOICE()
      this.GET_INVOICES()
    },
    async updateInvoice () {
      if (this.invoiceItemList.length <= 0) {
        alert('Upewnij się, że wypełniłeś listę rzeczy')
        return
      }

      this.loading = true
      this.calInvoiceTotal()

      const dataBase = db.collection('invoices').doc(this.docId)

      await dataBase.update({
        billerStreetAddress: this.billerStreetAddress,
        billerCity: this.billerCity,
        billerZipCode: this.billerZipCode,
        billerCountry: this.billerCountry,
        clientName: this.clientName,
        clientEmail: this.clientEmail,
        clientStreetAddress: this.clientStreetAddress,
        clientCity: this.clientCity,
        clientZipCode: this.clientZipCode,
        clientCountry: this.clientCountry,
        paymentTerms: this.paymentTerms,
        paymentDueDateUnix: this.paymentDueDateUnix,
        paymentDueDate: this.paymentDueDate,
        productDescription: this.productDescription,
        invoiceItemList: this.invoiceItemList,
        invoiceTotal: this.invoiceTotal,
      })

      this.loading = false
      const data = {
        docId: this.docId,
        routeId: this.$route.params.invoiceId,
      }

      this.UPDATE_INVOICE(data)
    },

    submitForm () {
      if (this.editInvoice) {
        this.updateInvoice()
        return
      }
      this.uploadInvoice()
    },

  },
}
</script>

<style>
.scrollbar::-webkit-scrollbar {
  display: none;
}
</style>

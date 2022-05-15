<template>
  <div>
    <router-link
      class="flex items-center no-underline cursor-pointer gap-6 mb-4 text-white rounded-2xl py-7 px-6 bg-[#1e2139] outline-0"
      :to="{ name: 'Invoice', params: {invoiceId: invoice.invoiceId}}"
    >
      <div class="flex items-center basis-[60%] gap-4">
        <span class="uppercase flex-1 text-xs">
          #{{ invoice.invoiceId }}
        </span>
        <span class="flex-1 text-xs">{{ invoice.paymentDueDate }}</span>
        <span class="flex-1 text-xs">{{ invoice.clientName }}</span>
      </div>
      <div class="flex items-center basis-[40%] gap-4">
        <span class="flex-1 text-sm font-bold">${{ invoice.invoiceTotal }}</span>
        <div
          class="flex"
          :class="{paid: invoice.invoicePaid, draft : invoice.invoiceDraft, pending : invoice.invoicePending}"
        >
          <span
            v-if="invoice.invoicePaid"
            class="flex-1 text-xs text-xs bg-[#46393c] text-[#ffb23f] px-4 py-1 rounded-lg"
          >Paid</span>
          <span
            v-if="invoice.invoiceDraft"
            class="flex-1 text-xs text-xs bg-[#46393c] text-[#ffb23f] px-4 py-1 rounded-lg"
          >Draft</span>
          <span
            v-if="invoice.invoicePending"
            class="flex-1 text-xs bg-[#46393c] text-[#ffb23f] px-4 py-1 rounded-lg"
          >Pending</span>
        </div>
        <div>
          <img src="../assets/icon-arrow-right.svg" alt="" />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Invoice",
  props: ['invoice'],
}
</script>


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
          <div class="relative">
            <span
              v-if="invoice.invoicePaid"
              class="flex-1 text-xs text-xs bg-[#293840] min-w-[100px] text-center text-[white] pl-2 block py-1 rounded-lg before:content-[''] before:w-2 before:h-2 before:bg-[#40d640] before:absolute before:top-1/2 before:translate-y-[-50%] before:left-[10px] before:rounded-full"
            >
              Opłacona
            </span>
          </div>
          <div class="relative">
            <span
              v-if="invoice.invoiceDraft"
              class="flex-1 text-xs bg-[#35394c] text-[white] text-center min-w-[70px] pl-5 pr-2 block py-1 rounded-lg before:content-[''] before:w-2 before:h-2 before:bg-[white] before:absolute before:top-1/2 before:translate-y-[-50%] before:left-[10px] before:rounded-full"
            >
              Szkic
            </span>
          </div>
          <div class="relative">
            <span
              v-if="invoice.invoicePending"
              class="flex-1 text-xs bg-[#46393c] text-[#ffb23f] min-w-[90px] block text-center pl-2 py-1 rounded-lg before:content-[''] before:w-2 before:h-2 before:bg-[#ffb23f] before:absolute before:top-1/2 before:translate-y-[-50%] before:left-[10px] before:rounded-full"
            >
              Oczekuje
            </span>
          </div>
        </div>
        <div>
          <img
            src="../assets/icon-arrow-right.svg"
            alt="icon"
          >
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


<template>
  <div
    v-if="totalPages() > 0"
    class="relative flex items-center justify-center"
  >
    <div class="flex items-center">
      <div
        v-if="showPreviousLink()"
        class="h-8 w-8 bg-[#1f2139] rounded-full relative cursor-pointer after:content-['<'] after:text-xl after:text-white after:absolute after:left-[10px] after:top-1/2 after:translate-y-[-50%]"
        @click="updatePage(currentPage - 1)"
      />
      <span class="mr-2 ml-2">{{ currentPage + 1 }} of {{ totalPages() }}</span>
      <div
        v-if="showNextLink()"
        class="h-8 w-8 bg-[#1f2139] rounded-full relative cursor-pointer after:content-['>'] after:text-xl after:text-white after:absolute after:left-[10px] after:top-1/2 after:translate-y-[-50%]"
        @click="updatePage(currentPage + 1)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ['dataToPaginate', 'currentPage', 'pageSize'],
  methods: {
    updatePage (pageNumber) {
      this.$emit('page:update', pageNumber)
    },
    totalPages () {
      return Math.ceil(this.dataToPaginate.length / this.pageSize)
    },
    showPreviousLink () {
      return this.currentPage !== 0
    },
    showNextLink () {
      return this.currentPage !== (this.totalPages() - 1)
    }
  }
}
</script>


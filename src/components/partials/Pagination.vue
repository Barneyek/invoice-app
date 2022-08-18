<template>
  <div v-if="totalPages() > 0">
    <span
      v-if="showPreviousLink()"
      class="pagination-btn"
      @click="updatePage(currentPage - 1)"
    > wstecz </span>
    {{ currentPage + 1 }} of {{ totalPages() }}
    <span
      v-if="showNextLink()"
      class="pagination-btn"
      @click="updatePage(currentPage + 1)"
    > next </span>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ['todos', 'currentPage', 'pageSize'],
  methods: {
    updatePage(pageNumber) {
      this.$emit('page:update', pageNumber);
    },
    totalPages() {
      console.log(this.todos)
      return Math.ceil(this.todos.length / this.pageSize);
    },
    showPreviousLink() {
      return this.currentPage == 0 ? false : true;
    },
    showNextLink() {
      return this.currentPage == (this.totalPages() - 1) ? false : true;
    }
  }
}
</script>

<style scoped>
.pagination-btn {
  cursor: pointer;
}
</style>

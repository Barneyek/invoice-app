<template>
  <div class="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-50 overflow-hidden bg-gray-900 opacity-75 flex flex-col items-center justify-center">
    <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4" />
  </div>
</template>

<script>
export default {
  name: "Loading"
}
</script>

<style scoped>
.loader {
  border-top-color: #7c5dfa;
  animation: spinner 1.5s linear infinite;
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>

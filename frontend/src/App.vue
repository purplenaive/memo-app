<template>
  <ground-comp></ground-comp>
</template>

<script>
  import groundComp from "@/components/ground.vue";

  export default {
    components: { groundComp, }
  }
</script>

<style lang="scss">
  @import "~@/assets/css/_common.scss";

  html, body {
    min-height: 100vh;
  }
  #app {
    min-height: 100vh;
    padding-bottom: 40px;
  }
</style>
<template>
  <main-header></main-header>
  <memo-comp></memo-comp>
  <main-footer></main-footer>
</template>

<script>
  import mainHeader from "@/components/header.vue";
  import mainFooter from "@/components/footer.vue";
  import memoComp from "@/components/memo.vue";

  export default {
    name: "groundComp",
    components: { mainHeader, mainFooter, memoComp, }
  }
</script>

<style scoped>
</style>

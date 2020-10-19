<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('my/requestCustomerInfo');
  },

}
</script>

<style>
.page {
  position: absolute;
  width: 100%;
  left: 0;
  top: 50px;
  bottom: 48px;
}
</style>
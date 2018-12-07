<template lang='pug'>
v-container
  v-layout.justify-center
    v-flex.xs6
      v-form.login-form.text-xs-center
        v-text-field(label="Email", required)
        v-text-field(label="Password", required)
        v-btn Login
</template>

<script>
  export default {
    name: 'Login'
  }
</script>

<style scoped>

</style>
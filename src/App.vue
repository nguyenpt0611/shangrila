<template lang="pug">
  v-app
    Navigation
    v-content
      router-view
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'App',
  components: {
    Navigation
  },
}
</script>

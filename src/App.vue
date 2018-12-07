<template lang="pug">
  v-app
    Navigation
    v-content(:style="{'padding-top': '100px'}")
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

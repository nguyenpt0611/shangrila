<template lang="pug">
  v-toolbar(height='100', color='#ffffff')
    v-toolbar-side-icon
    v-flex
      v-img(:src='imgLogo', max-height='78', contain)
    v-toolbar-items.hidden-sm-and-down
      v-layout.align-center
        v-btn(icon='true') 
          v-avatar
            v-img(:src='imgAvt')
        p Welcome, 
        p NguyenPham
        p Logout
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      imgLogo: require('@/assets/images/logo.png'),
      imgAvt: require('@/assets/images/avt.png'),
    }
  }
}
</script>

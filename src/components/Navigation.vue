<template lang="pug">
  v-toolbar(height='100', color='#ffffff')
    v-toolbar-side-icon
    v-flex
      v-img(:src='imgLogo', max-height='78', contain)
    v-toolbar-items.hidden-sm-and-down
      v-layout.align-center
        v-btn(icon, fab) 
          v-avatar
            v-img(:src='imgAvt')
        v-layout.column.align-start
          v-flex.xs12.header-login__title
            p.mb-0 Welcome, 
              span NguyenPham
          v-flex.xs12
            router-link(to='/dashboard') Logout

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

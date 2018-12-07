<template lang="pug">
  div.application-header
    v-toolbar(absolute, height='100', color='#ffffff')
      v-toolbar-side-icon(@click='isShowedDrawer = !isShowedDrawer')
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
    v-navigation-drawer(hide-overlay, absolute,temporary, v-model='isShowedDrawer')
      v-list.pa-1.text-xs-center
        v-list-tile
          v-list-tile-content
            v-list-tile-title 
              h6.title Menu
      v-list(dense)
        v-divider
        v-list-tile(@click="", to='/dashboard')
          v-list-tile-action
            v-icon home
          v-list-tile-content
            v-list-tile-title Dashboard
        v-divider
        v-list-tile(@click="", to='/directory')
          v-list-tile-action
            v-icon people
          v-list-tile-content
            v-list-tile-title Directory
        v-divider
        v-list-tile(@click="", to='/structure')
          v-list-tile-action
            v-icon info
          v-list-tile-content
            v-list-tile-title Structure
        v-divider
        v-list-tile(@click="", to='/')
          v-list-tile-action
            v-icon account_box
          v-list-tile-content
            v-list-tile-title Login
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      isShowedDrawer: false,
      imgLogo: require('@/assets/images/logo.png'),
      imgAvt: require('@/assets/images/avt.png'),
    }
  }
}
</script>

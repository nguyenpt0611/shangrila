<template lang='pug'>
  v-container
    v-layout.justify-center
      v-flex.xs12.text-xs-center
        v-btn.node-root(icon, outline, color='#707070', @click='isShowed = !isShowed')
          v-icon keyboard_arrow_up
        v-layout.tree-list(v-if='isShowed')
          v-flex.column-one.xs4
            div.position-title.py-2.px-3
              span.pr-4 Human resource
              v-icon(color='#fff') person
              span 10
            div.level-one
              v-card.tree-item
                v-layout.column.justify-center.align-center.pa-2  
                  v-flex.xs12.pt-2.pl-2(:style="{'width':'100%'}")
                    v-layout
                      v-flex.xs2.text-xs-left
                        v-avatar
                          img(src='@/assets/images/avt.png')
                      v-flex.xs10.text-xs-left.pa-1.pl-2
                        h4 Tom
                        h6 Team leader
                  v-flex.xs12.pt-2(:style="{'width':'100%'}")
                    v-card-actions.justify-space-between
                      v-btn(flat, icon)
                        v-icon(color='#707070') email
                      v-btn(flat, icon)
                        v-icon(color='#707070') phone
                      v-btn(flat, icon)
                        v-icon(color='#707070') phone_iphone
              v-card.tree-item
                v-layout.column.justify-center.align-center.pa-2  
                  v-flex.xs12.pt-2.pl-2(:style="{'width':'100%'}")
                    v-layout
                      v-flex.xs2.text-xs-left
                        v-avatar
                          img(src='@/assets/images/avt.png')
                      v-flex.xs10.text-xs-left.pa-1.pl-2
                        h4 Tom
                        h6 Team leader
                  v-flex.xs12.pt-2(:style="{'width':'100%'}")
                    v-card-actions.justify-space-between
                      v-btn(flat, icon)
                        v-icon(color='#707070') email
                      v-btn(flat, icon)
                        v-icon(color='#707070') phone
                      v-btn(flat, icon)
                        v-icon(color='#707070') phone_iphone
          v-flex.column-two.xs4
            div.position-title.py-2.px-3
              span.pr-4 Administrative & General
              v-icon(color='#fff') person
              span 12
            div.level-one
              v-card.tree-item
                v-layout.column.justify-center.align-center.pa-2  
                  v-flex.xs12.pt-2.pl-2(:style="{'width':'100%'}")
                    v-layout
                      v-flex.xs2.text-xs-left
                        v-avatar
                          img(src='@/assets/images/avt.png')
                      v-flex.xs10.text-xs-left.pa-1.pl-2
                        h4 Tom
                        h6 Team leader
                  v-flex.xs12.pt-2(:style="{'width':'100%'}")
                    v-card-actions.justify-space-between
                      v-btn(flat, icon)
                        v-icon(color='#707070') email
                      v-btn(flat, icon)
                        v-icon(color='#707070') phone
                      v-btn(flat, icon)
                        v-icon(color='#707070') phone_iphone
              div.level-two
                v-card.tree-item
                  v-layout.column.justify-center.align-center.pa-2  
                    v-flex.xs12.pt-2.pl-2(:style="{'width':'100%'}")
                      v-layout
                        v-flex.xs2.text-xs-left
                          v-avatar
                            img(src='@/assets/images/avt.png')
                        v-flex.xs10.text-xs-left.pa-1.pl-2
                          h4 Tom
                          h6 Team leader
                    v-flex.xs12.pt-2(:style="{'width':'100%'}")
                      v-card-actions.justify-space-between
                        v-btn(flat, icon)
                          v-icon(color='#707070') email
                        v-btn(flat, icon)
                          v-icon(color='#707070') phone
                        v-btn(flat, icon)
                          v-icon(color='#707070') phone_iphone
                v-card.tree-item
                  v-layout.column.justify-center.align-center.pa-2  
                    v-flex.xs12.pt-2.pl-2(:style="{'width':'100%'}")
                      v-layout
                        v-flex.xs2.text-xs-left
                          v-avatar
                            img(src='@/assets/images/avt.png')
                        v-flex.xs10.text-xs-left.pa-1.pl-2
                          h4 Tom
                          h6 Team leader
                    v-flex.xs12.pt-2(:style="{'width':'100%'}")
                      v-card-actions.justify-space-between
                        v-btn(flat, icon)
                          v-icon(color='#707070') email
                        v-btn(flat, icon)
                          v-icon(color='#707070') phone
                        v-btn(flat, icon)
                          v-icon(color='#707070') phone_iphone
              v-card.tree-item
                v-layout.column.justify-center.align-center.pa-2  
                  v-flex.xs12.pt-2.pl-2(:style="{'width':'100%'}")
                    v-layout
                      v-flex.xs2.text-xs-left
                        v-avatar
                          img(src='@/assets/images/avt.png')
                      v-flex.xs10.text-xs-left.pa-1.pl-2
                        h4 Tom
                        h6 Team leader
                  v-flex.xs12.pt-2(:style="{'width':'100%'}")
                    v-card-actions.justify-space-between
                      v-btn(flat, icon)
                        v-icon(color='#707070') email
                      v-btn(flat, icon)
                        v-icon(color='#707070') phone
                      v-btn(flat, icon)
                        v-icon(color='#707070') phone_iphone
          v-flex.column-three.xs4
            div.position-title.py-2.px-3
              span.pr-4 Development & Projects
              v-icon(color='#fff') person
              span 6
            div.level-one
              v-card.tree-item
                v-layout.column.justify-center.align-center.pa-2  
                  v-flex.xs12.pt-2.pl-2(:style="{'width':'100%'}")
                    v-layout
                      v-flex.xs2.text-xs-left
                        v-avatar
                          img(src='@/assets/images/avt.png')
                      v-flex.xs10.text-xs-left.pa-1.pl-2
                        h4 Tom
                        h6 Team leader
                  v-flex.xs12.pt-2(:style="{'width':'100%'}")
                    v-card-actions.justify-space-between
                      v-btn(flat, icon)
                        v-icon(color='#707070') email
                      v-btn(flat, icon)
                        v-icon(color='#707070') phone
                      v-btn(flat, icon)
                        v-icon(color='#707070') phone_iphone
</template>

<script>
  export default {
    name: 'Structure',
    data() {
      return {
        isShowed: true,
      }
    }
  }
</script>

<style lang='scss'>
  $length: 100%/3;
  $space-top: 200px;
  $item-height: 120px;
  $line-size: 50px;
  .tree-list {
    position: relative;
    margin-top: 12px;
    padding-top: $space-top;
    &::before {
      position: absolute;
      top: -19px;
      left: calc(50% - 1px);
      display: block;
      height: 20px;
      border-left: 1px solid #777;
      content: "";
    }
  }
  .position-title {
    position: absolute;
    background: #B99653;
    color: #fff;
    max-width: 320px;
    left: -30px;
    top: $space-top/2 - 21;
    z-index: 999;
  }
  .column-one {
    &::before {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      display: block;
      width: $length;
      border-top: 1px solid #777;
      content: "";
    }
  }
  .column-two {
    &::before {
      position: absolute;
      left: $length;
      right: 0;
      top: 0;
      display: block;
      width: $length/2;
      border-top: 1px solid #777;
      content: "";
    }
    .position-title {
      left: calc(50% - #{$length/2} - 30px);
    }
  }
  .column-three {
    &::before {
      position: absolute;
      left: $length*1.5;
      right: 0;
      top: 0;
      display: block;
      width: $length/2;
      border-top: 1px solid #777;
      content: "";
    }
    .position-title {
      left: calc(#{$length*2} - 30px);
    }
  }
  .column-one, .column-two, .column-three {
    .level-one {
      position: relative;
      &::after {
        position: absolute;
        left: 0;
        top: 0;
        bottom: $item-height/2;
        display: block;
        border-left: 1px solid #777;
        content: "";
      }
    }
    .level-two {
      margin-left: 100px;
      padding-top: 10px;
      position: relative;
      &::after {
        position: absolute;
        left: 0;
        top: 0;
        bottom: $item-height/2;
        display: block;
        border-left: 1px solid #777;
        content: "";
      }
      .tree-item {
        margin-top: 15px;
        &::before {
          border-left: 0;
        }
      }
    }
  }
  .tree-item {
    max-width: 320px;
    height: $item-height;
    margin-left: $line-size;
    &:not(:first-child) {
      margin-top: $item-height/3;
    }
    &:first-child::before{
      position: absolute;
      left: -$line-size;
      top: -$space-top;
      display: block;
      content: "";
      height: calc(50% + #{$space-top});
      border-left: 1px solid #777;
    }
    &::before {
      position: absolute;
      left: -$line-size;
      top: -$space-top;
      display: block;
      width: $line-size;
      border-bottom: 1px solid #777;
      content: "";
      height: calc(50% + #{$space-top});
    }
  }
</style>
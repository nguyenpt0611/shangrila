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
            span {{data.human_resource.size}}
          div.level-one
            template(v-for='employee in data.human_resource.data')
              v-card.tree-item(:id="'item-'+employee.id", :class='{highlight: (highlightId == employee.id)}')
                v-layout.column.justify-center.align-center.pa-2  
                  v-flex.xs12.pt-2.pl-2(:style="{'width':'100%'}")
                    v-layout
                      v-flex.xs2.text-xs-left
                        v-avatar
                          img(src='@/assets/images/avt.png')
                      v-flex.xs10.text-xs-left.pa-1.pl-2
                        h4 {{employee.name}}
                        h6 {{employee.position}}
                  v-flex.xs12.pt-2(:style="{'width':'100%'}")
                    v-card-actions.justify-space-between
                      v-btn(flat, icon, :href="'mailto:'+employee.email", :title="'Email: '+employee.email")
                        v-icon(color='#707070') email
                      v-btn(flat, icon, :href="'tel:'+employee.phone", :title="'Direct dial: '+employee.phone")
                        v-icon(color='#707070') phone
                      v-btn(flat, icon, :href="'tel:'+employee.mobile", :title="'Work mobile: '+employee.mobile")
                        v-icon(color='#707070') phone_iphone
              div.level-two(v-if='employee.team.length > 0')
                v-card.tree-item(v-for='teamer in employee.team', :id="'item-'+teamer.id", :class='{highlight: (highlightId == teamer.id)}')
                  v-layout.column.justify-center.align-center.pa-2  
                    v-flex.xs12.pt-2.pl-2(:style="{'width':'100%'}")
                      v-layout
                        v-flex.xs2.text-xs-left
                          v-avatar
                            img(src='@/assets/images/avt.png')
                        v-flex.xs10.text-xs-left.pa-1.pl-2
                          h4 {{teamer.name}}
                          h6 {{teamer.position}}
                    v-flex.xs12.pt-2(:style="{'width':'100%'}")
                      v-card-actions.justify-space-between
                        v-btn(flat, icon, :href="'mailto:'+teamer.email", :title="'Email: '+teamer.email")
                          v-icon(color='#707070') email
                        v-btn(flat, icon, :href="'tel:'+teamer.phone", :title="'Direct dial: '+teamer.phone")
                          v-icon(color='#707070') phone
                        v-btn(flat, icon, :href="'tel:'+teamer.mobile", :title="'Work mobile: '+teamer.mobile")
                          v-icon(color='#707070') phone_iphone
        v-flex.column-two.xs4
          div.position-title.py-2.px-3
            span.pr-4 Administrative & General
            v-icon(color='#fff') person
            span {{data.admin_general.size}}
          div.level-one
            template(v-for='employee in data.admin_general.data')
              v-card.tree-item
                v-layout.column.justify-center.align-center.pa-2  
                  v-flex.xs12.pt-2.pl-2(:style="{'width':'100%'}")
                    v-layout
                      v-flex.xs2.text-xs-left
                        v-avatar
                          img(src='@/assets/images/avt.png')
                      v-flex.xs10.text-xs-left.pa-1.pl-2
                        h4 {{employee.name}}
                        h6 {{employee.position}}
                  v-flex.xs12.pt-2(:style="{'width':'100%'}")
                    v-card-actions.justify-space-between
                      v-btn(flat, icon, :href="'mailto:'+employee.email", :title="'Email: '+employee.email")
                        v-icon(color='#707070') email
                      v-btn(flat, icon, :href="'tel:'+employee.phone", :title="'Direct dial: '+employee.phone")
                        v-icon(color='#707070') phone
                      v-btn(flat, icon, :href="'tel:'+employee.mobile", :title="'Work mobile: '+employee.mobile")
                        v-icon(color='#707070') phone_iphone
              div.level-two(v-if='employee.team.length > 0')
                v-card.tree-item(v-for='teamer in employee.team', :id="'item-'+teamer.id", :class='{highlight: (highlightId == teamer.id)}')
                  v-layout.column.justify-center.align-center.pa-2  
                    v-flex.xs12.pt-2.pl-2(:style="{'width':'100%'}")
                      v-layout
                        v-flex.xs2.text-xs-left
                          v-avatar
                            img(src='@/assets/images/avt.png')
                        v-flex.xs10.text-xs-left.pa-1.pl-2
                          h4 {{teamer.name}}
                          h6 {{teamer.position}}
                    v-flex.xs12.pt-2(:style="{'width':'100%'}")
                      v-card-actions.justify-space-between
                        v-btn(flat, icon, :href="'mailto:'+teamer.email", :title="'Email: '+teamer.email")
                          v-icon(color='#707070') email
                        v-btn(flat, icon, :href="'tel:'+teamer.phone", :title="'Direct dial: '+teamer.phone")
                          v-icon(color='#707070') phone
                        v-btn(flat, icon, :href="'tel:'+teamer.mobile", :title="'Work mobile: '+teamer.mobile")
                          v-icon(color='#707070') phone_iphone
        v-flex.column-three.xs4
          div.position-title.py-2.px-3
            span.pr-4 Development & Projects
            v-icon(color='#fff') person
            span {{data.development_project.size}}
          div.level-one
            template(v-for='employee in data.development_project.data')
              v-card.tree-item(:id="'item-'+employee.id", :class='{highlight: highlightId == employee.id}')
                v-layout.column.justify-center.align-center.pa-2  
                  v-flex.xs12.pt-2.pl-2(:style="{'width':'100%'}")
                    v-layout
                      v-flex.xs2.text-xs-left
                        v-avatar
                          img(src='@/assets/images/avt.png')
                      v-flex.xs10.text-xs-left.pa-1.pl-2
                        h4 {{employee.name}}
                        h6 {{employee.position}}
                  v-flex.xs12.pt-2(:style="{'width':'100%'}")
                    v-card-actions.justify-space-between
                      v-btn(flat, icon, :href="'mailto:'+employee.email", :title="'Email: '+employee.email")
                        v-icon(color='#707070') email
                      v-btn(flat, icon, :href="'tel:'+employee.phone", :title="'Direct dial: '+employee.phone")
                        v-icon(color='#707070') phone
                      v-btn(flat, icon, :href="'tel:'+employee.mobile", :title="'Work mobile: '+employee.mobile")
                        v-icon(color='#707070') phone_iphone
              div.level-two(v-if='employee.team.length > 0')
                v-card.tree-item(v-for='teamer in employee.team', :id="'item-'+teamer.id", :class='{highlight: (highlightId == teamer.id)}')
                  v-layout.column.justify-center.align-center.pa-2  
                    v-flex.xs12.pt-2.pl-2(:style="{'width':'100%'}")
                      v-layout
                        v-flex.xs2.text-xs-left
                          v-avatar
                            img(src='@/assets/images/avt.png')
                        v-flex.xs10.text-xs-left.pa-1.pl-2
                          h4 {{teamer.name}}
                          h6 {{teamer.position}}
                    v-flex.xs12.pt-2(:style="{'width':'100%'}")
                      v-card-actions.justify-space-between
                        v-btn(flat, icon, :href="'mailto:'+teamer.email", :title="'Email: '+teamer.email")
                          v-icon(color='#707070') email
                        v-btn(flat, icon, :href="'tel:'+teamer.phone", :title="'Direct dial: '+teamer.phone")
                          v-icon(color='#707070') phone
                        v-btn(flat, icon, :href="'tel:'+teamer.mobile", :title="'Work mobile: '+teamer.mobile")
                          v-icon(color='#707070') phone_iphone
</template>

<script>
  import VueScrollTo from 'vue-scrollto'
  export default {
    name: 'Structure',
    data() {
      return {
        isShowed: true,
        highlightId: 0,
        data: {
          human_resource: {
            data: [
              {
                name: 'Tom',
                position: 'Team leader',
                email: 'abc@gmail.com',
                phone: '0987654321',
                mobile: '0987123456',
                team: [
                  {
                    id: 2,
                    name: 'Tom 2',
                    position: 'Team leader',
                    email: 'tom2@gmail.com',
                    phone: '0987654321',
                    mobile: '0987123456',
                  }
                ]
              },
              {
                name: 'Amy White',
                position: 'Admin',
                email: 'abc2@gmail.com',
                phone: '0987654321',
                mobile: '0987123456',
                team: [
                  {
                    name: 'Tom',
                    position: 'Team leader',
                    email: 'abc@gmail.com',
                    phone: '0987654321',
                    mobile: '0987123456',
                  }
                ]
              },
            ],
            size: 4
          },
          admin_general: {
            data: [
              {
                name: 'Johnny Turnner',
                position: 'Team leader',
                email: 'abc@gmail.com',
                phone: '0987654321',
                mobile: '0987123456',
                team: [
                  {
                    id: 3,
                    name: 'Tom 3',
                    position: 'Admin',
                    email: 'tom3@gmail.com',
                    phone: '0987654321',
                    mobile: '0987123456',
                  },
                  {
                    name: 'Tom',
                    position: 'Team leader',
                    email: 'abc@gmail.com',
                    phone: '0987654321',
                    mobile: '0987123456',
                  },
                ]
              },
              {
                name: 'Parker Smith',
                position: 'Admin',
                email: 'abc2@gmail.com',
                phone: '0987654321',
                mobile: '0987123456',
                team: [
                  {
                    name: 'Tom',
                    position: 'Team leader',
                    email: 'abc@gmail.com',
                    phone: '0987654321',
                    mobile: '0987123456',
                  }
                ]
              },
            ],
            size: 5
          },
          development_project: {
            data: [
              {
                id: 1,
                name: 'Tom 1',
                position: 'Team leader',
                email: 'tom1@gmail.com',
                phone: '0987654321',
                mobile: '0987123456',
                team: [
                  {
                    name: 'Tom',
                    position: 'Team leader',
                    email: 'abc@gmail.com',
                    phone: '0987654321',
                    mobile: '0987123456',
                  },
                  {
                    name: 'Tom',
                    position: 'Team leader',
                    email: 'abc@gmail.com',
                    phone: '0987654321',
                    mobile: '0987123456',
                  },
                  {
                    name: 'Tom',
                    position: 'Team leader',
                    email: 'abc@gmail.com',
                    phone: '0987654321',
                    mobile: '0987123456',
                  },
                ]
              },
              {
                name: 'Parker Smith',
                position: 'Admin',
                email: 'abc2@gmail.com',
                phone: '0987654321',
                mobile: '0987123456',
                team: [
                  {
                    name: 'Tom',
                    position: 'Team leader',
                    email: 'abc@gmail.com',
                    phone: '0987654321',
                    mobile: '0987123456',
                  },
                  {
                    name: 'Tom',
                    position: 'Team leader',
                    email: 'abc@gmail.com',
                    phone: '0987654321',
                    mobile: '0987123456',
                  },
                ]
              },
              {
                id: 4,
                name: 'Tom 4',
                position: 'Secretary',
                email: 'tom4@gmail.com',
                phone: '0987654321',
                mobile: '0987123456',
                team: [
                  {
                    id: 5,
                    name: 'Tom 5',
                    position: 'Team leader',
                    email: 'abc@gmail.com',
                    phone: '0987654321',
                    mobile: '0987123456',
                  },
                  {
                    id: 6,
                    name: 'Tom',
                    position: 'Team leader',
                    email: 'abc@gmail.com',
                    phone: '0987654321',
                    mobile: '0987123456',
                  },
                ]
              },
            ],
            size: 10
          },
        }
      }
    },
    mounted() {
      this.highlightId = 0;
      this.highlightId = this.$route.params.employeeId;
      VueScrollTo.scrollTo(`#item-${this.highlightId}`);
    }
  }
</script>

<style lang='scss'>
  $length: 100%/3;
  $space-top: 200px;
  $item-height: 120px;
  $line-size: 50px;
  .highlight{
    background: #F3EDFB!important;
  }
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
    z-index: 5;
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
      border-left: 1px solid #777;
      height: 80px;
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
      border-left: 1px solid #777;
      height: 80px;
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
      border-right: 1px solid #777;
      height: 80px;
    }
    .position-title {
      left: calc(#{$length*2} - 30px);
    }
  }
  .column-one, .column-two, .column-three {
    .level-one {
      padding-top: 10px;
      position: relative;
      & > .tree-item {
        z-index: 4;
      }
      .level-two:last-child {
        &::before {
          content: '';
          border-left: 1px solid #fff!important;
          display: block;
          position: absolute;
          left: -100px;
          top: -60px;
          z-index: 222;
          bottom: 60px;
        }
      }
    }
    .level-two {
      margin-left: 100px;
      padding-top: 10px;
      position: relative;
      &::before {
        content: '';
        border-left: 1px solid #777!important;
        display: block;
        position: absolute;
        left: -100px;
        top: -60px;
        z-index: 222;
        bottom: 60px;
      }
    }
  }
  .tree-item {
    max-width: 320px;
    height: $item-height;
    margin-left: $line-size;
    z-index: 3;
    &:not(:first-child) {
      margin-top: $item-height/3;
    }
    &::before {
      content: '';
      border-left: 1px solid #777!important;
      border-bottom: 1px solid #777!important;
      display: block;
      position: absolute;
      height: 160px;
      left: -50px;
      top: -100px;
      width: 50px;
      z-index: 0;
    }
  }
</style>
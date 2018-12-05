<template lang="pug">
  div.v-table
    v-flex.v-table__header
      p.table__header--title Browse Directory
      v-layout.xs6.pa-2
        img.mt-3.v-table-filter(src='@/assets/images/icon-filter.png')
        v-flex.xs1
          v-select.ml-3(label="Division", solo=true, :items='[7, 14, 21]')
        v-flex.xs1
          v-select.ml-3(label="Department", solo=true, :items='[7, 14, 21]')
      v-flex.xs6
    table.v-datatable.v-table.theme--light
      thead.v-table__head
        tr
          th.text-xs-left.column(v-for='header in headers', :class='{sortable: header.sortable ? header.sortable : false}', 
          v-on:click='selectedSort($event, header)',
          sort='none' )
            span {{header.text}}
            v-icon(v-if='header.sortable' size='16px') arrow_upward
      tbody
        tr(v-for='dessert in datatable')
          td.pa-2
            v-layout.align-center
              v-avatar
                v-img(:src='imgAvt')
              span.ml-2 {{dessert.name}}
          td {{dessert.job}}
          td {{dessert.organisation}}
          td {{dessert.division}}
          td {{dessert.department}}
          td 
            a(:href="'mailto:'+dessert.email") {{dessert.email}}
          td {{dessert.phone}}
          td 
            v-layout.align-center
              span {{dessert.mobile}}
              v-btn(fab, icon, small)
                img(src='@/assets/images/icon-detail.png')
    v-layout(align-center).v-datatable.v-table.v-datatable__actions
      v-flex(justify-start).xs4.v-datatable__actions__select
        v-flex.xs4
          v-select(label="No field", solo=true, :items='[7, 14, 21]', v-model='selected')
      v-flex.xs4.v-datatable__actions__range--control
        div.v-datatable__actions__pagination Showing 1 to 7 of {{length}} entries
      v-flex.xs4.v-datatable__actions__range--control
        v-flex.v-pagination
          ul.v-pagination
            li
              v-btn.v-pagination-nav(flat, :disabled='page == 1 ? true : false', v-on:click='page = 1') First
            li
              v-btn.v-pagination-nav(flat, :disabled='page == 1 ? true : false', v-on:click='page -= 1') Previous
            template(v-for='item in 4')
              li
                v-btn(flat, fab, :outline='item == page ? true : false', 
                :color='item == page ? "#7D75FF" : "#2c2c2c"',
                v-on:click='selectedPagination(item)').pagination-item {{item}}
            li
              v-btn.v-pagination-nav(flat, :disabled='page == length ? true : false', v-on:click='page += 1') Next
            li
              v-btn.v-pagination-nav(flat, :disabled='page == length ? true : false', v-on:click='page = length') Last
</template>

<script>
  import {sortColumn} from '@/common/common.js'
  export default {
    name: 'DirectoryTable',
    data() {
      return {
        selected: 7,
        length: 8,
        page: 1,
        imgAvt: require('@/assets/images/avt.png'),
        headers: [
          {
            text: 'Name',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          { text: 'Job Title', value: 'job' },
          { text: 'Organisation', value: 'organisation' },
          { text: 'Division', value: 'division' },
          { text: 'Department', value: 'department' },
          { text: 'Email', value: 'email' },
          { text: 'Direct Dial', value: 'phone' },
          { text: 'Work mobile', value: 'mobile' },
        ],
        datatable: [
          {
            value: false,
            name: 'Johnny Turnner1',
            job: 'Secretary',
            organisation: 'SLIM - Singapore RHQ',
            division: 'Human resources',
            department: 'hr/admin',
            email: 'miketurner@gmail.com',
            phone: '0918765421',
            mobile: '0987654321',
          },
          {
            value: false,
            name: 'Johnny Turnner2',
            job: 'Secretary',
            organisation: 'SLIM - Singapore RHQ',
            division: 'Human resources',
            department: 'hr/admin',
            email: 'miketurner@gmail.com',
            phone: '0918765421',
            mobile: '0987654321',
          },
          {
            value: false,
            name: 'Johnny Turnner3s',
            job: 'Secretary',
            organisation: 'SLIM - Singapore RHQ',
            division: 'Human resources',
            department: 'hr/admin',
            email: 'miketurner@gmail.com',
            phone: '0918765421',
            mobile: '0987654321',
          },
          {
            value: false,
            name: 'Johnny Turnner',
            job: 'Secretary',
            organisation: 'SLIM - Singapore RHQ',
            division: 'Human resources',
            department: 'hr/admin',
            email: 'miketurner@gmail.com',
            phone: '0918765421',
            mobile: '0987654321',
          },
          {
            value: false,
            name: 'Johnny Turnner',
            job: 'Secretary',
            organisation: 'SLIM - Singapore RHQ',
            division: 'Human resources',
            department: 'hr/admin',
            email: 'miketurner@gmail.com',
            phone: '0918765421',
            mobile: '0987654321',
          },
          {
            value: false,
            name: 'Johnny Turnner',
            job: 'Secretary',
            organisation: 'SLIM - Singapore RHQ',
            division: 'Human resources',
            department: 'hr/admin',
            email: 'miketurner@gmail.com',
            phone: '0918765421',
            mobile: '0987654321',
          },
          {
            value: false,
            name: 'Johnny Turnner',
            job: 'Secretary',
            organisation: 'SLIM - Singapore RHQ',
            division: 'Human resources',
            department: 'hr/admin',
            email: 'miketurner@gmail.com',
            phone: '0918765421',
            mobile: '0987654321',
          },
          {
            value: false,
            name: 'Johnny Turnner',
            job: 'Secretary',
            organisation: 'SLIM - Singapore RHQ',
            division: 'Human resources',
            department: 'hr/admin',
            email: 'miketurner@gmail.com',
            phone: '0918765421',
            mobile: '0987654321',
          },
        ]
      }
    },
    methods: {
      selectedPagination(pos) {
        this.page = pos;
      },
      selectedSort(event, header) {
        sortColumn(event, this.datatable, header);
      }
    }
  }
</script>

<style lang='scss' scoped>
  .v-table {
    &-filter {
      height: 24px;
      width: 24px;
    }
    &__head {
      th {
        color: #000;
        &.sortable .v-icon {
          opacity: 0;
        }
      }
    }
  }
  .v-pagination {
    .pagination-item {
      height: 30px;
      width: 30px;
    }
    .v-pagination-nav {
      padding: 0px;
      margin: 5px;
    }
  }
</style>
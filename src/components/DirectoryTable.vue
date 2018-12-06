<template lang="pug">
  div.v-table
    v-layout.row.wrap.v-table__header
      v-flex.xs12
        p.table__header--title Browse Directory
      v-flex.xs6 
        v-layout.xs6.pa-2
          img.mt-3.v-table-filter(v-if='isFiltering() == -1', src='@/assets/images/icon-filter.png')
          img.mt-3.v-table-filter(v-if='isFiltering() > -1', src='@/assets/images/icon-filter-active.png')
          v-flex(v-for='filter in table.filter.items', :key='filter.key').xs4
            v-select.ml-3(:label="filter.key", solo=true, multiple=true,
            :menu-props="{ maxHeight: '400' }",
            v-model='table.filter.itemsSelected[filter.key]' 
            :items='filter.data', @change='selectedFilter(filter.key, $event)')
              div(slot="prepend-item", ripple)
                a.v-list__tile.v-list__tile--link.theme--light(@click='clearFilter(filter.key)')
                  a.v-list__title Clear all
              template(slot='selection', slot-scope="{ item, index }")
                span(v-if="index === 0") {{item}}  
                span.grey--text.caption(v-if="index === 1") (+{{ table.filter.itemsSelected[filter.key].length - 1}} others)
      v-flex.xs6.d-flex.justify-end
        v-text-field.v-table__search-bar(hide-details,append-icon="search", clearable,single-line, solo, label='Seach', @click:append='handleSearch()', 
        @keyup.enter='handleSearch()',@click:clear='handleClearSearch()', v-model='table.search.text')
          v-btn(icon)
            v-icon search
    table.v-datatable.v-table.theme--light
      thead.v-table__head
        tr
          th.text-xs-left.column(v-for='header in table.headers', :class='{sortable: header.sortable ? header.sortable : false}', 
          @click='selectedSort($event, header)',
          sort='none' )
            span {{header.text}}
            v-icon(v-if='header.sortable' size='16px') arrow_upward
      tbody
        tr(v-for='(employee, index) in table.showData')
          td.pa-2
            v-layout.align-center
              v-avatar
                v-img(:src='imgAvt')
              span.ml-2 {{employee.name}}
          td {{employee.job}}
          td {{employee.organisation}}
          td {{employee.division}}
          td {{employee.department}}
          td 
            a(:href="'mailto:'+employee.email") {{employee.email}}
          td {{employee.phone}}
          td 
            v-layout.align-center
              span {{employee.mobile}}
              v-btn(fab, icon, small, @click.stop="handleDetail(employee)")
                img(src='@/assets/images/icon-detail.png')
    v-layout(align-center).v-datatable.v-table.v-datatable__actions
      v-flex(justify-start).xs4.v-datatable__actions__select
        v-flex.xs4
          v-select(label="No field", solo=true, :items='[4, 7, 21]', v-model='page.pageSize', @change='handleChangePageSize()')
            template(slot="selection",slot-scope="{ item, index }")
              span Show {{item}} entries
      v-flex.xs4.v-datatable__actions__range--control
        div.v-datatable__actions__pagination Showing {{pagination.showFromEntry}} to {{pagination.showToEntry}} of {{table.size}} entries
      v-flex.xs4.v-datatable__actions__range--control
        v-flex.v-pagination
          ul.v-pagination
            li
              v-btn.v-pagination-nav(flat, :disabled='page.currentPage == 1 ? true : false', @click='handlePagination(1)') First
            li
              v-btn.v-pagination-nav(flat, :disabled='page.currentPage == 1 ? true : false', @click='handlePagination(page.currentPage -= 1)') Previous
            template(v-for='item in pagination.showSize')
              li
                v-btn(flat, fab, :outline='item == page.currentPage ? true : false', 
                :color='item == page.currentPage ? "#7D75FF" : "#2c2c2c"',
                @click='handlePagination(item)').pagination-item {{item}}
            li
              v-btn.v-pagination-nav(flat, :disabled='page.currentPage == pagination.showSize ? true : false', @click='handlePagination(page.currentPage += 1)') Next
            li
              v-btn.v-pagination-nav(flat, :disabled='page.currentPage == pagination.showSize ? true : false', @click='handlePagination(pagination.showSize)') Last
    v-navigation-drawer(v-model="drawer",absolute, right, width='440', temporary, hide-overlay)
      v-container
        v-layout.column.v-table__nav-drawer
          v-flex.xs-12
            v-badge.d-flex.justify-center.v-badge__custom(bottom)
              img(size='50',src='@/assets/images/icon-detail-badge.png', slot="badge")
              v-avatar(size='158')
                img(src='@/assets/images/example_avt.png')
          v-flex.xs-12
            v-layout.column.wrap.detail-wrapper
              v-flex.xs-12.pt-3
                h6.title Name
                p.mt-2.title.font-weight-light {{selectedData.name}}
              v-flex.xs-12.pt-3
                h6.title Gender
                p.mt-2.title.font-weight-light {{selectedData.name}}
              v-flex.xs-12.pt-3
                h6.title Jobtitle
                p.mt-2.title.font-weight-light {{selectedData.job}}
              v-flex.xs-12.pt-3
                h6.title Organisation
                p.mt-2.title.font-weight-light {{selectedData.organisation}}
              v-flex.xs-12.pt-3
                h6.title Division
                p.mt-2.title.font-weight-light {{selectedData.division}}
              v-flex.xs-12.pt-3
                h6.title Department
                p.mt-2.title.font-weight-light {{selectedData.department}}
              v-flex.xs-12.pt-3
                h6.title Email
                p.mt-2.title.font-weight-light {{selectedData.email}}
              v-layout
                v-flex.xs-6.pt-3
                  h6.title Direct Dial
                  p.mt-2.title.font-weight-light {{selectedData.phone}}
                v-flex.xs-6.pt-3
                  h6.title Work Mobile
                  p.mt-2.title.font-weight-light {{selectedData.mobile}}
              v-layout.xs-12.mt-2.justify-center
                v-btn.mt4(float, color='#fff', :style="{ width: '85%'}") 
                  span(:style="{color: '#7D75FF'}") Reporting Manager
</template>

<script>
  import {sortColumn} from '@/common/common.js'
  export default {
    name: 'DirectoryTable',
    data() {
      return {
        // Page variables
        page: {
          pageSize: 4,
          currentPage: 1,
          currentPageData: [],
        },
        // Pagination varialbes
        pagination: {
          size: 0,
          maxSize: 4,
          showSize: 0,
          showFromEntry: 0,
          showToEntry: 0,
        },
        // Table data
        table: {
          headers: [
            {
              text: 'Name',
              align: 'left',
              sortable: true,
              value: 'name'
            },
            { text: 'Job Title', value: 'job' },
            { text: 'Organisation', value: 'organisation' },
            { text: 'Division', value: 'division', filter: true },
            { text: 'Department', value: 'department', filter: true },
            { text: 'Email', value: 'email' },
            { text: 'Direct Dial', value: 'phone' },
            { text: 'Work mobile', value: 'mobile' },
          ],
          size: 0,
          showData: [],
          data: [
            {
              value: false,
              name: 'Johnny Turnner1',
              job: 'Secretary',
              organisation: 'SLIM - Singapore RHQ',
              division: 'Human resources1',
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
              department: 'hr/admin3',
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
              division: 'Human resources 2',
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
          ],
          dataSave: [],
          // Filter data
          filter: {
            items: [],
            itemsSelected: {}
          },
          search: {
            text: ''
          }
        },
        // table drawer
        drawer: null,
        selectedData: {},
        // Declared variables
        imgAvt: require('@/assets/images/avt.png'),
      }
    },
    mounted() {
      this.table.dataSave = this.table.data;
      this.table.size = this.table.data.length;

      this.fetchingTable();
      this.getFilter();
    },
    methods: {
      // Table funcs
      fetchingTable(){
        this.setShowPagination(this.table.data, this.page.pageSize);
        this.setShowEntries();
        this.getShowData();
      },
      getShowData(){
        this.table.showData = this.table.data.slice(this.pagination.showFromEntry - 1, this.pagination.showToEntry);
      },
      handleDetail(data){
        this.drawer = !this.drawer
        this.selectedData = data;
      },
      // Sort Table
      selectedSort(event, header) {
        sortColumn(event, this.table.showData, header);
      },
      // Pagination funcs
      setShowPagination(dataTable, pageSize) {
        let div = dataTable.length/pageSize;
        let showSize = Math.floor(div);

        if((div - showSize) > 0)
          showSize++;
        this.pagination.size = showSize;
        this.pagination.showSize = this.pagination.size > this.pagination.maxSize ? this.pagination.maxSize : this.pagination.size;
      },
      setShowEntries(){
        this.pagination.showFromEntry = this.page.pageSize * (this.page.currentPage - 1) + 1;
        this.pagination.showToEntry = this.pagination.showFromEntry + this.page.pageSize - 1;
        if(this.pagination.showToEntry > this.table.size)
          this.pagination.showToEntry = this.table.size;
      },
      handleChangePageSize(){
        this.fetchingTable();
      },
      handlePagination(pos) {
        this.page.currentPage = pos;
        this.setShowEntries();
        this.getShowData();
      },
      // Filter funcs
      getFilter(){
        this.table.headers.find((item) => {
          if(item.filter) {
            let temp = {
              key: item.value,
              data: []
            };
            this.table.data.forEach((data) => {
              if(data[item.value]) {
                temp.data.push(data[item.value])
              }
            })
            this.table.filter.items.push(temp)
            this.table.filter.itemsSelected[item.value] = [];
          }
        })
      },
      isFiltering(){
        return this.table.filter.items.findIndex(item => this.table.filter.itemsSelected[item.key].length > 0)
      },
      selectedFilter(key, value){
        this.table.data = this.table.dataSave;
        this.table.filter.itemsSelected[key] = value;
        if(this.table.filter.itemsSelected[key].length > 0) {
          this.table.data = this.table.data.filter((item) => value.find(val => val == item[key]))
        }
        this.fetchingTable();
      },
      clearFilter(key){
        this.table.filter.itemsSelected[key] = [];
        this.table.data = this.table.dataSave;
        this.fetchingTable();
      },
      // Search bar
      handleSearch(){
        this.table.data = this.table.dataSave;
        if(this.table.search.text != null)
          this.table.data = this.table.data.filter(item => Object.keys(item).some(key => item[key].toString().toUpperCase().includes(this.table.search.text.toUpperCase())))
        this.fetchingTable();
      },
      handleClearSearch(){
        this.table.search.text = null;
        this.handleSearch();
      }
    }
  }
</script>

<style lang='scss'>
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
    &__search-bar {
      max-width: 80%;
    }
    tbody tr:hover:not(.v-datatable__expand-row) {
      box-shadow: 0px 7px 8px -4px rgba(0,0,0,0.2), 0px 12px 17px 2px rgba(0,0,0,0.14), 0px 5px 22px 4px rgba(0,0,0,0.12) !important;
      background: #ffffff;
      cursor: pointer;
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
  .title {
    color:#333333;
  }
  .v-badge__badge {
    left: 55%;
    width: 50px!important;
    height: 50px!important;
  }
</style>
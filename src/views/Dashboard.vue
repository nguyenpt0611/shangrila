<template lang="pug">
    div 
        p.tab-header Favorite
        v-container(fluid grid-list-sm)
          v-layout(row wrap)
            v-flex.align-center(v-for="fav in favs" :key="fav.title" xs2)
                    v-img(:src="getImgUrl(fav.pic)" aspect-ratio="1" )
                    span {{fav.title}}
        v-tabs(vmodel="active" color="white" slider-color="#50349B")
            v-tab(v-for="tab in tabs" :key="tab.title" ripple active-class="default-class tab-header") {{tab.title}}
            v-tab-item(v-for="tab in tabs" :key="tab.title")
                v-card(flat)
                    v-card-text djasdjfkslfjkdslajfkdls
</template>
<script>
export default {
    data () {
        return {
            tabs: [
                {title: "all function"},
                {title: "bussiness"},
                {title: "utilities"},
                {title: "productivities"}
            ],
            favs: [
                {title: "taxi", pic: "taxi"},
                {title: "time track", pic: "clock"},
                {title: "directory", pic: "id"},
                {title: "add more", pic: "plus"}
            ]
        }
    },
    methods: {
        getImgUrl(name) {
            return require('../assets/images/'+name+'.png');
        }
    }
}
</script>
<style>
    .tab-header{
        color: #50349B;
        font-size: 24px;
    }
    .align-center{
        text-align: center;
        text-transform: capitalize;
    }
    .v-tabs__div{
        color: #C6C6C6!important;
        font-size: 24px;
    }
    .v-tabs__item{
        text-transform: initial;
        display: block;
    }
    .v-tabs__item::first-letter{
        text-transform: uppercase!important;
    }
    .v-tabs__slider{
        height: 4px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
</style>



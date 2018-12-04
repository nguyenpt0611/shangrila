<template lang="pug">
    v-container 
        p.tab-header Favorite
        v-container(fluid grid-list-sm)
          v-layout(row wrap)
            v-flex.align-center(v-for="(fav,index) in favs" :key="`fav-${index}`" xs2) 
                v-img.margin-auto(:src="getImgUrl(fav.pic)" aspect-ratio="1" max-width="160")
                span {{fav.title}}
        v-tabs(vmodel="active" color="white" slider-color="#50349B")
            v-tab(v-for="tab in tabs" :key="tab.title" ripple active-class="default-class tab-header") {{tab.title}}
            v-tab-item(v-for="tab in tabs" :key="tab.key")
                v-container(fluid grid-list-sm)
                    v-layout(row wrap)
                        v-flex.align-center.xtra-m-b(v-for="(item,index) in getCollection(tab.key)" :key="`item-${index}`" xs2) 
                            v-img.margin-auto(:src="getImgUrl(item.pic)" aspect-ratio="1" max-width="160")
                            span {{item.title}}
</template>
<script>
export default {
    data () {
        return {
            tabs: [
                {title: "all function", key: "all"},
                {title: "bussiness", key: "buss"},
                {title: "utilities", key: "util"},
                {title: "productivities", key: "prod"}
            ],
            favs: [
                {title: "taxi", pic: "taxi"},
                {title: "time track", pic: "clock"},
                {title: "directory", pic: "id"},
                {title: "add more", pic: "plus"}
            ],
            collection: {
                all: [
                    {title: "taxi", pic: "taxi"},
                    {title: "business trip", pic: "airplane"},
                    {title: "time track", pic: "clock"},
                    {title: "directory", pic: "id"},
                    {title: "contract", pic: "doc"},
                    {title: "time track", pic: "clock"},                
                    {title: "taxi", pic: "taxi"},
                    {title: "business trip", pic: "airplane"},
                    {title: "time track", pic: "clock"}
                ],
                buss: [
                    {title: "taxi", pic: "taxi"},
                    {title: "business trip", pic: "airplane"},
                ],
                util: [
                    {title: "time track", pic: "clock"},
                    {title: "directory", pic: "id"},
                ],
                prod: [
                    {title: "contract", pic: "doc"},
                ]
            }
        }
    },
    methods: {
        getImgUrl(name) {
            return require('../assets/images/'+name+'.png');
        },
        getCollection(key){
            // debugger
            // return this.tabs[index].key
            return this.collection[key]
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
    }
    span{
        color: #50349B;
        font-size: 18px;
        text-transform: initial;
        display: inline-block;
        margin-top: 15px;
    }
    span::first-letter{
        text-transform: uppercase!important;
    }
    .margin-auto{
        margin: auto;
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
    .xtra-m-b{
        margin-bottom: 25px;
    }
</style>
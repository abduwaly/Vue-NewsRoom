<template>
  <div class='assistant'>
      <Header :headTitle='headTitle'/>
      <div class='content-wrapper'>
        <div id='activity-swiper' v-on:mouseenter="stopPlay()" v-on:mouseleave="play()" class="swiper-container swiper-container-horizontal">
          <div class="swiper-wrapper">
             <div v-for="value in swiperImgs" v-bind:key='value.pid' class="activity-slide swiper-slide swiper-slide-next" style="width: 100%; margin-right: 10px;" v-bind:style="{backgroundImage: 'url(' + value.imgs + ')'}">
             </div>
          </div>
        </div>
        <div id='type-swiper' class="swiper-container swiper-container-horizontal">
          <div class="swiper-wrapper">
            <div v-for="type in types" v-bind:key='type.tid' class='type-slide swiper-slide swiper-slide-next'>
              <div>{{ type.name }}</div>
            </div>
          </div>
        </div>
        <SearchContent @getContent='search'/>
        <div class='show-child-param'>[父子传参]This is what you searched : <strong>{{ searchedItem }}</strong></div>
        <hr>
        [vuex 状态管理]
        <ul v-for='(f, index) in fruits' v-bind:key='f.tid'>
          <li>{{ f.name }}  <span class='del' @click='remove(index)'>X</span></li>
        </ul>
      </div>
      <Footer :showFooter='showFooter' :currentPage='currentPage'/>
  </div>
</template>

<script>

import Header from './Header'
import Footer from './Footer'
import SearchContent from './SearchContent'
import Swiper from '../../static/swiper.min.js'
let activitiesSwiper
let typesSwiper

export default {
  name: 'Assistant',
  data () {
    return {
      headTitle: 'Assistant Home',
      showFooter: true,
      currentPage: 'assistant',
      searchedItem: '',
      swiperImgs: [
        {
          'pid': '1',
          'imgs': '../static/swipeImg/1.jpg'
        }, {
          'pid': '2',
          'imgs': '../static/swipeImg/2.jpg'
        }, {
          'pid': '3',
          'imgs': '../static/swipeImg/3.jpg'
        }
      ],
      types: [
        {
          'tid': '1',
          'name': 'apple'
        },
        {
          'tid': '2',
          'name': 'banana'
        },
        {
          'tid': '3',
          'name': 'car'
        },
        {
          'tid': '4',
          'name': 'dog'
        },
        {
          'tid': '5',
          'name': 'egg'
        }
      ]
    }
  },
  mounted () {
    this.initSwiper()
  },
  components: { Header, Footer, SearchContent },
  methods: {
    initSwiper () {
      activitiesSwiper = new Swiper('#activity-swiper', {
        spaceBetween: 10,
        grabCursor: true,
        initialSlide: 1,
        autoplay: 3000,
        loop: true,
        speed: 1000,
        autoplayDisableOnInteraction: false
      })
      typesSwiper = new Swiper('#type-swiper', {
        spaceBetween: 0,
        grabCursor: true,
        initialSlide: 0,
        autoplay: false,
        slidesPerView: 3.5,
        freeMode: true
      })
      typesSwiper.init()
    },
    stopPlay () {
      activitiesSwiper.stopAutoplay()
    },
    play () {
      activitiesSwiper.startAutoplay()
    },
    search (item) {
      console.log(item)
      this.searchedItem = item
    },
    remove (index) {
      console.log(index, this.$store.state.fruits)
      this.$store.commit('removeFruit', index)
    }
  },
  computed: {
    fruits () {
      return this.$store.state.fruits
    }
  }
}
</script>

<style scoped>
@import url("../../static/swiper.min.css");
#activity-swiper{
  width: 100%;
  height: 180px;
}
.activity-slide{
  background-size: 100%;
  -webkit-background-size: 100%;
}
#type-swiper{
  margin-top: 5px;
  height: 40px;
  line-height: 40px;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
}
.type-slide{
  border-right: solid 1px #ff664421;
}
.show-child-param{
  margin-top: 20px;
}
.del{
  border: 1px solid lightgray;
}
</style>

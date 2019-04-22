<template>
  <div id="app">
    <img src="https://yonatanberruecos.github.io/vueproject/src/assets/logo.png">
    <country @changee="getartist"></country>
    <ul><artis v-for="artist in artists" :artist="artist" :key="artist.name"></artis></ul>
    <loader v-show="loading"></loader>
  </div>
</template>

<script>
import getArtists from './api'
import Artis from './components/ListArtist.vue'
import Country from './components/CountryList.vue'
import loader from './components/loader.vue'

export default {
  name: 'App',
  data () {
    return {
      artists:[],
      loading:true
    }
  },
  components:{
    Artis,
    Country,
    loader
  },
  methods:{
     getartist: function(val) {
      this.loading=true
      this.artists=[]
        const self = this
         getArtists(val)
          .then (function (artists){
               self.artists=artists
               this.loading=false
        })
     }
 },
 beforeMount(){
    this.getartist('argentina')
 }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

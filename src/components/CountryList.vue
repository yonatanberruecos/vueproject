<template>
    <select @change="onChange($event)">
      <option v-for="pais in paises" :value="pais.value">{{pais.text}}</option>
    </select>
</template>

<script>
import getArtists from '../api'

export default {
  name:'Country',
  data () {
    return {
      paises: [
      {"value":"Uruguay","text":"Uruguay"},
      {"value":"colombia","text":"colombia"},
      {"value":"spain","text":"spain"},
      {"value":"argentina","text":"argentina"},
      {"value":"Uzbekistan",text:"Uzbekistan"},
      ]
    }
  },
  methods:{
  	onChange:function(event){
       this.$emit('changee',event.target.value)
       //alert(event.target.value)
    } 
  }
}
</script>

<style>
select{
	display:block;
	margin: 0 auto;
}
</style>

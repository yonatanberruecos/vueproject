<template>
    <li><a :href="artist.url"><h2>{{artist.name}}</h2><img :src="artist.image[2]['#text']"></a></li>
</template>

<script>
export default {
  name:'artis',
  props:['artist']
}
</script>

<style>

</style>

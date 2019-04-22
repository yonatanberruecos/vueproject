import config from './config'

const apikey=config.apiKey

export default function getartist(country){
   
   return fetch('https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country='+country+'&api_key='+apikey+'&format=json')
   .then(res=>res.json())
   .then(yeison=>yeison.topartists.artist)
} 
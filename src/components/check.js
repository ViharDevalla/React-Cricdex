const { colors } = require('@material-ui/core');
var axios = require('axios')
var i;
var api = "alPRhU4eOwgZAHsSaIbCP3CZvid2"
var playerFinder = "https://cricapi.com/api/playerFinder"
var playerStats = "https://cricapi.com/api/playerStats"
var playerFinderData={
    method:"POST",
    apikey:api,
    name:'Sachin',
}
var playerStatsData={
    method:"POST",
    apikey:api,
    pid:35320
}

/* axios.post(playerFinder,playerFinderData).then(function(response){
    var players = response.data.data
    for(i=0;i<players.length;i++){
        console.log(players[i].pid)
    }
    console.log(players)
}) */

axios.post(playerStats,{apikey:api,pid:35320}).then(function(response){
    var players = response.data
    console.log(players)
})

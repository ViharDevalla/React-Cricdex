import React, { useState, useEffect } from 'react'
import '../css/style.css'
import PlayerCard from './PlayerCard'
import PlayerDesc from './PlayerDesc'
import Popup from 'reactjs-popup';
import LoadingScreen from '../assets/loading.svg'
var axios = require('axios')
var i;

var api = "alPRhU4eOwgZAHsSaIbCP3CZvid2"
var playerFinder = "https://cricapi.com/api/playerFinder"
var playerStats = "https://cricapi.com/api/playerStats"

function Home() {
    const [loading,setLoading] = useState(true);
    const [styling,setStyling] = useState({"display":"none"});
    const [search,setSearch] = useState('');
    const [player,setPlayer] = useState([]);
    const [playerData,setPlayerData] = useState([]);



    useEffect(() => {
        setTimeout(() => setLoading(false),500)
    })
    
    function handleChange(e){
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    function getData(search){
        var playerFinderData={
            method:"POST",
            apikey:api,
            name:search,
        }
        setStyling({"display":"block"})
        axios.post(playerFinder,playerFinderData).then(function(response){
            setTimeout(() => setLoading(false),1000) 
            console.log(response.data)
             setPlayer(response.data.data)
             
            }).then(async function(){
            for(i=0;i<player.length;i++){
                await axios.post(playerStats,{apikey:api,pid:player[i].pid}).then(function(response){
                    console.log(response.data)
                    setPlayerData(playerData => playerData.concat(response.data)); 
                })
            }
            console.log(playerData)
        });
    }


     function handleClick(){
         setPlayer([]);
         setPlayerData([]);
        console.log("Search Term",search)
        getData(search)
    }   

    return (
        <div>
        {
        loading === true ? (
            <div className="loading">
              <img src={LoadingScreen} alt="Loading" />
            </div>
        ):
        (
            <div className='backg'>
                <div className='headtext'>
                    React Cricdex
                </div>
                <div className='searchdiv'>
                    <input type='text' placeholder='search for player' className="search" onChange={handleChange} />
                    <input type='submit' className='submit' onClick={handleClick}/>
                    
                </div>
                <div className="warn" style={styling}>1.Double-click on submit if no results 2.Click on card for more info</div>
                <div className='resdiv'>
                    {
                        loading === true ? (
                            <div className="loading">
                              <img src={LoadingScreen}  alt="Loading"/>
                            </div>
                        ):
                        (
                            playerData.map((playerName,key)=>{
                                return(
                                    
                                    <Popup key={key}
                                        trigger={<p><PlayerCard name={playerName.name} imgsrc={playerName.imageURL} type={playerName.playingRole} country={playerName.country} teams={playerName.majorTeams}/></p>}
                                        modal
                                        nested
                                    >
                                    {close => (
                                    <div>
                                        <button className="close" onClick={close}>
                                        &times;
                                        </button>
                                        <PlayerDesc name={playerName.name} imgsrc={playerName.imageURL} age={playerName.currentAge} born={playerName.born} type={playerName.playingRole} country={playerName.country} teams={playerName.majorTeams} bio={playerName.profile} batting={playerName.data.batting} bowling={playerName.data.bowling}  />
                                    </div>
                                    )}
                                </Popup>
                                
                                )
                            })
                        )
                    }

                </div>
                
            </div>
        )}
            
        
        </div>
    )
}

export default Home

import React from 'react'
import user from '../assets/defaultplayer.jpg'
import '../css/style.css'

function PlayerCard(props) {
    
    const {name,imgsrc,type,country,teams} = props;
    // 'https://www.cricapi.com/playerpic/35320.jpg'
    return (
        <div className='card'>
            <h2>{name}</h2>
            <div className="cardimg">
                <img src={imgsrc} className='image' alt="https://i.pinimg.com/236x/c4/34/d8/c434d8c366517ca20425bdc9ad8a32de.jpg"/>
            </div>
            <div className='cardbody'>
                Type : {type}<br/>
                Country : {country}<br/>
                Teams : {teams}
            </div>
        </div>
    )
}

PlayerCard.defaultProps={
    name:"Sachin Ramesh Tendulkar",
    imgsrc:'https://www.cricapi.com/playerpic/35320.jpg',
    type:'Top-order Batsman',
    country:"India",
    teams:"India,Asia XI,Mumbai,Mumbai Indians,Yorkshire"
};

export default PlayerCard
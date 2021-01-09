import React from 'react'
import '../css/style.css'

function PlayerCard(props) {
    
    var {name,imgsrc,type,country,teams} = props;
    if(imgsrc===null | imgsrc===''){
        imgsrc='https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg'
    }
    return (
        <div className='card'>
            <h2>{name}</h2>
            <div className="cardimg">
                <img src={imgsrc} className='image' alt="Not Found"/>
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
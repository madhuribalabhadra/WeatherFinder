import React from 'react';

const Weather =(props)=> {
    return (
        <div> 
            <p>City: {props.city} </p>
            <p>Country: {props.country} </p>
            <p>Temperature:  {props.temperature} </p>
            <p>Humidity :{props.humidity} </p>
            <p>Description: {props.description} </p>
        </div>
    );
}

export default Weather;
import React from 'react';

import Title from './Title';
import Form from './Form';
import Weather from './Weather';

const API_KEY='4ae101bbb74e67909572a34879efd97d';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            city:undefined,
            country:undefined,
            temperature:undefined,
            humidity:undefined,
            description:undefined,
            error:undefined
        }
        this.getWeather=this.getWeather.bind(this);
    }
   async getWeather(e) {
    e.preventDefault();
    const city=  e.target.elements.city.value;
    const country = e.target.elements.country.value;
     const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
       const data= await api_call.json();   
       console.log(data);
       this.setState({
        city:data.name,
        country: data.sys.country,
        temperature:data.main.temp,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:''        
       });
       
        
    }

    render() {
        return (
          <div>
              <Title />
              <Form getWeather={this.getWeather} />
              <Weather 
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              />
          </div>
        );
    }
} 

export default App;
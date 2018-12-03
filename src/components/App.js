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
     if(city && country){
       console.log(data);
       this.setState({
        city:data.name,
        country: data.sys.country,
        temperature:data.main.temp,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:''        
       });
    }else{
        this.setState({
            city:undefined,
            country:undefined ,
            temperature:undefined,
            humidity:undefined,
            description:undefined,
            error:'Please Enter The Values'        
           });
    }
       
        
    }

    render() {
        return (
          <div>
           <div className='wrapper'>
            <div className='main'>
            <div className='container'>           
            <div className="row">
             <div className="col-lg-5 title-container"> 
             <Title />
             </div>
             <div className="col-lg-7 form-container"> 
             <Form getWeather={this.getWeather} />  
              <Weather 
              city={this.state.city}
              country={this.state.country}
              temperature={this.state.temperature}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
              />
             </div>
            </div>
            </div>
            </div>
           </div>
          </div>
        );
    }
} 

export default App;
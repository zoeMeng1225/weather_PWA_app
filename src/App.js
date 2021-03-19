import React,{useState} from 'react';
import { Fetchweather } from './api/fetchweather';

import MainInfo from './components/mainInfo';
import InputBar from './components/input';
import Details from './components/details';

import {Grid, Grow} from '@material-ui/core';
import useStyle from './style';

import Rain from './assets/rain.jpeg';
import Thunder from './assets/thunderstorm.jpeg';
import Drizzle from './assets/drizzle.jpeg';
import Mist from './assets/mist.jpeg';
import Snow from './assets/snow.jpeg';
import Clond from './assets/cloud.jpeg';
import Clear from './assets/clear.jpeg';
import DefaultIma from './assets/default.jpeg';



const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const classes = useStyle();

  const search = async (e) => {
    if(e.key === 'Enter'){
      const data = await Fetchweather(query);
      setWeather(data) 
      setQuery('');
    }
  }

  

  const localTime = inputTime => {
    if(weather.timezone < 0){
      inputTime = new Date(weather.dt*1000-(weather.timezone*1000));
    }else if(weather.timezone > 0){
      inputTime = new Date(weather.dt*1000+(weather.timezone*1000));
    }

    return inputTime;
  }

  const weekday = num => {
    let weeknum;
  
    if(num === 1){
      weeknum = 'Mon.';
    }else if(num === 2){
      weeknum = 'Tues.';
    }else if(num === 3){
      weeknum = 'Wed.';
    }else if(num === 4){
      weeknum = 'Thur.';
    }else if(num === 5){
      weeknum = 'Fri.';
    }else if(num === 6){
      weeknum = 'Sat.';
    }else if(num === 7){
      weeknum = 'Sun.';
    }

    return weeknum;
  }

  const MonthConvert = num => {
    let month;

    if(num === 1){
      month = 'Jan.';
    }else if(num === 2){
      month = 'Feb.';
    }else if(num === 3){
      month = 'Mar.';
    }else if(num === 4){
      month = 'Apr.';
    }else if(num === 5){
      month = 'May.';
    }else if(num === 6){
      month = 'Jun.';
    }else if(num === 7){
      month = 'Jul.';
    }else if(num === 8){
      month = 'Aug.';
    }else if(num === 9){
      month = 'Sept.';
    }else if(num === 10){
      month = 'Oct.';
    }else if(num === 11){
      month = 'Nov.';
    }else if(num === 12){
      month = 'Dec.';
    }

    return month;
  };


  const getCurrentTime = () => {
    let curTime;
    if(weather.timezone){
      curTime = localTime(weather.timezone)
    }else{
      curTime = new Date();
    }
    return curTime;
  }

  
  // const changeHandle = e => {
  //   setQuery(e.target.value);
  // }

 

  const bgs = id => {
    let bg;
    if(id >= 200 && id < 233){
      bg = Thunder;
    }else if(id >= 300 && id < 322){
      bg = Drizzle;
    }else if(id >= 500 && id < 532){
      bg = Rain;
    }else if(id >= 600 && id < 623){
      bg = Snow;
    }else if(id >= 700 && id < 782){
      bg = Mist;
    }else if(id === 800 ){
      bg = Clear;
    }else if(id >= 801 && id < 805){
      bg = Clond;
    }
    return bg;
  }

  
  return (
  <>
   <div className = {classes.bodyContainer} style ={{
     backgroundImage : `url(${weather.main ? bgs(weather.weather[0].id): DefaultIma})`
  }}>
     <Grow in>
      <Grid  container spacing = {3} className = {classes.bodyWrapper}>
        {
          weather.main 
          ? 
          <Grid item xs = {12} sm= {8} className = {classes.mainInfoBody}>
            <MainInfo 
              className = {classes.maininfo} 
              temp = {Math.round(weather.main.temp)} 
              name = {weather.name} 
              sup = {weather.sys.country} 
              week = {weather.timezone ? weekday(localTime(weather.timezone).getDay()) : 'null'}
              month = {MonthConvert(getCurrentTime().getUTCMonth()+1)}
              day = {getCurrentTime().getDate()}
              icon = {`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              dec = {weather.weather[0].description}
              />
          </Grid> 
          :  
          <Grid item xs = {12} sm= {8} className = {classes.mainInfoBody}>
            <h2>Please type city in the search bar</h2>
          </Grid>
        }
          

          <Grid item xs = {12} sm = {4} className = {classes.inputBody}> 
            <div className = {classes.inputDetail}>
              <InputBar search = {search} value= {query}  autoComplete autoFocus setQuery = {setQuery}/>
              {
                weather.main ? 
                <Details 
                  cloudy = {weather.clouds.all}
                  humidity = {weather.main.humidity}
                  wind = {Math.round(weather.wind.speed)}
                  high = {weather.main.temp_max}
                  low = {weather.main.temp_min}
                  />
                  
                : <p></p>
              }
              
            </div>
          </Grid>
      </Grid>
     </Grow>
   
   </div>
  </>
  )

}

export default App;
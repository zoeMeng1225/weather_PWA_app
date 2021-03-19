import React from 'react';
import useStyle from './style';

import {Grid} from '@material-ui/core';

const MainInfo = ({item, temp, name, sup, week, month, day,icon, dec}) => {
  const classes = useStyle();

  return(
    <>
      <Grid className= {classes.infoContent1} container item = {item}>
          <Grid item className ={classes.tempInfo} xs={12} sm= {6}>
              {/* {Math.round(weather.main.temp)} */}
              <h1>{temp}
              <sup className = {classes.sup}>&deg; C</sup></h1>
          </Grid>
          <Grid item  container  xs={12} sm= {6} className= {classes.infoContainer}>
            <Grid item className ={classes.cityName} xs= {7}>
              <h2>{name}
                 <sup className = {classes.sup}>{sup}</sup>
              </h2>
              <div className= {classes.date}> 
                <p>{`${week}  ${month} ${day}`}</p>
              </div>
            </Grid>
            <Grid item className ={classes.icon} xs={5}>
              <img className ={classes.cityicon} src={icon} alt=''/>
              <p>{dec}</p>
            </Grid>
          </Grid>
          
          
      </Grid>
    </>
  )
}


export default MainInfo;
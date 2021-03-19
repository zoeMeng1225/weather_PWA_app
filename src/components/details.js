import React from 'react';
import useStyle from './style';
import { Grid } from '@material-ui/core';


const Details = ({cloudy, humidity, wind, high, low}) => {
  const classes = useStyle();

  return(
    <div  className = {classes.detailWrapper}>
      <h4>Weather Details</h4>
     <ul>
     <Grid container className = {classes.detaiui}>
          <Grid item xs = {6}>H</Grid>
          <Grid item xs = {6} className = {classes.detaili}>{`${Math.round(high)} C`}</Grid>
       </Grid>
       <Grid container className = {classes.detaiui}>
          <Grid item xs = {6}>L</Grid>
          <Grid item xs = {6} className = {classes.detaili}>{`${Math.round(low)} C`}</Grid>
       </Grid>
       <Grid container className = {classes.detaiui}>
          <Grid item xs = {6}> Cloudy</Grid>
          <Grid item xs = {6} className = {classes.detaili}>{`${cloudy}%`}</Grid>
       </Grid>
       <Grid container className = {classes.detaiui}>
          <Grid item xs = {6}>Humidity</Grid>
          <Grid item xs = {6} className = {classes.detaili}>{`${humidity}%`}</Grid>
       </Grid>
       <Grid container className = {classes.detaiui}>
          <Grid item xs = {6}>Wind</Grid>
          <Grid item xs = {6} className = {classes.detaili}>{`${wind}m/sec`}</Grid>
       </Grid>
       
     </ul>
    </div>
  )
}

export default Details;
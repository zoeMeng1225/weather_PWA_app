import React from 'react';
import useStyle from './style';
import { TextField} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {Autocomplete} from '@material-ui/lab';
import cities from './cityData';


const InputBar = ({search,query,setQuery}) => {
  const classes = useStyle();

  return(
    <div className = {classes.inputBody}>
        <div className={classes.inputWrapper}>
            <SearchIcon/>
            <Autocomplete
              id="size-small-standard"
              value={query}
              // onInputChange = {console.log(query)}
              onChange = {(query, event) => setQuery(query.target.innerText)}
              onKeyPress= {search}
              options = {cities}
              size = "small"
              className={classes.root}
              getOptionLabel = {option => option.city}
              fullWidth
              openOnFocus
              filterSelectedOptions
              renderInput={(params) =>  
              <TextField
                {...params}
                value={query}
                type="text"
                variant="standard" 
                className={classes.root}
                id="standard" 
                placeholder="Tap a city"
                fullWidth
                />}
            />
    </div>
   </div>
  )
}

export default InputBar;
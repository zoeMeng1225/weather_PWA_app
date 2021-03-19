import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(theme => ({

  infoContent:{
    alignItems:'flex-end'
  },
  
  root: {
    '& .MuiInput-root': {
      height:'100%',
      padding:'1em',
      color:'#fff',
    }, 
    '& .MuiITextField-root': {
     border:'none'
    },
    '& .MuiAutocomplete-hasOpenIcon-root': {
      color:'gray'
     },

  },

  

  
  inputWrapper:{
    display: 'flex',
    height:'5em',
    borderBottom:'gray',
    alignItems:"center"
  },

  detailWrapper:{
    marginRight:'1em',
    padding:'2em 1em'
  },

  cityInfo:{
    padding:'1em',
    boxSizing:'border-box'
  },

  detaiui:{
    margin:'0.5em 0',
    color:'#fff'
  },

  detaili:{
    textAlign:'right'
  },

  sup:{
    fontSize:'40%',
    marginLeft:'.3em'
  },

  cityName:{
    fontSize:'80%'
  },

  icon:{
    textAlign:'center'
  },

  infoContainer:{
    alignItems:'baseline'
  },

  cityicon:{
    width:'60%'
  },

  tempInfo:{
    display:'flex',
    alignItems:'flex-end'
  },

  [theme.breakpoints.up('sm')]:{
    tempInfo:{
      fontSize:'2.5em'
    }
  },

  [theme.breakpoints.down('xs')]:{
    inputWrapper:{
      height:'2em'
    },

    inputBody:{
      paddingTop:'1em'
    }


  }


 

}))
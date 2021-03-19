import {makeStyles} from '@material-ui/core/styles';


export default makeStyles(theme => ({
  bodyContainer:{
   maxWidth: '100vw',
   display:'flex',
   justifyContent:'center',
   backgroundSize:'cover',
   minHeight:'100vh',
  },

  bodyWrapper:{
    margin:'0'
  },

  mainInfoBody:{
    display:'flex',
    alignItems:'flex-end',
    padding:'5em !important',
  },

  inputBody:{
    backgroundColor:'#2e52637a',
    paddingTop:'0 !important',
   
  },

  inputDetail:{
    height:'100%',
    display:'grid'
  },

  [theme.breakpoints.down('xs')]:{
    mainInfoBody:{
      padding:'1em !important'
    }
  },

 


}))
import React from 'react'
import{Avatar, Box,makeStyles, Typography,TextField,Button} from '@material-ui/core'
import photo from './image/photo.jpg';
import abs from './image/abs.jpg';
import Footer from './Footer';


const useStyles=makeStyles({
    leftcontainer:{
        width:250,
        marginTop:140,
        marginLeft:240,
        position:'absolute',
    },
    container:{
       position:'absolute',
    },
    rightcontainer:{
       marginTop:80,
       marginLeft:780,
       
        
    },
    frame:{
        fontSize:30,
        marginLeft:80,
        color:'silver',
        fontWeight:'60'
    },
    flores:{
        marginLeft:64,
    },
    product:{
        marginLeft:115,
    },
    avatar:{
        marginLeft:120,
        position:'absolute',
    },
    avatar2:{
        // position:'absolute',
    marginLeft:200,
      marignBottom:100,
    },
    one:{
        
        display:'inline'
    }

})
export default function Productdetail() {
    const classes=useStyles();
    return (
        <>
        <Box className={classes.container}>
        <Box className={classes.leftcontainer}>
            <img src={photo}/>
            </Box>
            <Box className={classes.rightcontainer}>           
             <Typography variant="h5" className={classes.frame}>FRAMED ART PRINT</Typography>
             <hr style={{width:'80%',marginLeft:1}}/>
             <Typography className={classes.flores}><u>FLORES CYAN</u> BY <u>SUNSHINE CANTEEN</u></Typography>
             <br/>
             
             <Typography className={classes.product}>PRODUCT DETAILS</Typography>
             <hr style={{width:'35%',marginLeft:90}}/ >
                 <br/>
                 <Avatar className={classes.avatar}><img src={photo}/></Avatar>
                 <Avatar className={classes.avatar2}><img src={abs}/></Avatar>
                 <Box className={classes.one}>
                 <Typography style={{marginTop:25,position:'absolute' }}>STYLE</Typography>
                 <TextField
          id="standard-select-currency"
          select
          label="Classic"
        
          style={{width:'50%',marginBottom:2,marginLeft:190 }}
          
        >
            </TextField>
   <Typography style={{marginTop:25,marginBottom:240,position:'absolute'}}>FRAME</Typography>
   <TextField
          id="standard-select-currency"
          select
          label="Black"
        
          style={{width:'50%',marginLeft:190 }}
          
        >
            </TextField>
            <Typography style={{marginTop:25,marginBottom:240,position:'absolute'}}>SIZE</Typography>
   <TextField
          id="standard-select-currency"
          select
          label="8*x10*"
        
          style={{width:'50%',marginLeft:190 }}
          
        >
            
            </TextField>
            <br/>
           
            </Box>
  
  
  <hr style={{width:480,marginTop:20,marginLeft:1}}/>
  <Typography style={{fontSize:14,marginLeft:80}}>Deny Designer is for whole sale consumer only</Typography>
  <Button style={{color:'black',borderColor:'black',marginLeft:120,marginTop:10}}variant="contained">WHOLESALE LOGIN</Button>
            </Box>
            <br/>
            <br/>
            <Footer/>
            </Box>
            
    )
            </>
            
    )
}

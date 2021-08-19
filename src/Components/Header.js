import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { NavLink,Link } from 'react-router-dom';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Products from './Products';
import './header.css';
import {useState} from 'react';

const useStyles = makeStyles((theme) => ({
    appbar:{
        background:'#FFFFFF',
        boxShadow:'none',
        border:'none',
        color:'Black',
        display:'flex',
        display:'grid',

    },
    button:{
      align:'left',
      marginLeft:'auto',
      background:'#FFFFFF',
    },
    Product:{
        textDecoration:'none',
      marginLeft:60,
       alignItems:'left',
        color:'black',
        fontSize:15,

       
    },
    Products:{
     
      
    },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontWeight:'700',
    
    
  },
//   menuButton: {
//     display: 'none',
//     [theme.breakpoints.down('sm')]: {
//         display: 'block'
//     }
// },
// customButtons: {
//     margin: '0 5% 0 auto', 
//     [theme.breakpoints.down('sm')]: {
//         display: 'none'
//     } 
// }

}));
const ToolBar = withStyles({
  root: {
    minHeight: 55
  },
})(Toolbar);



  
  const Header=()=>{
    const [open, setOpen] = useState(false);

const handleClose = () => {
  setOpen(false);
}
const handleOpen = () => {
  setOpen(true);
}
    const classes = useStyles();
  return (
    
      <AppBar className={classes.appbar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"onClick={handleOpen}>
            <Menu/>
          </IconButton>
          <NavLink to="Home">
          <Typography variant="h6" className={classes.title}>
            DenyDesigns
          </Typography>
          </NavLink>
         
              <Link className={classes.Product} to="/Products">PRODUCTS</Link>
              <NavLink className={classes.Product} to="/Home">COLLECTION</NavLink>
              <NavLink className={classes.Product} to="/Product">OUR STORY</NavLink>
              <NavLink className={classes.Product} to="/Product">ART</NavLink>
              <NavLink className={classes.Product} to="/Product">WHOLESALE</NavLink>
              
          <NavLink className={classes.button} to="Login"><AccountBoxIcon/></NavLink>
          </Toolbar>
      </AppBar>

  );
}
export default Header;    

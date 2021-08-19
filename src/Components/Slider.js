import Carousel from "react-multi-carousel";
import imageone from './image/imageone.jpg';
import "react-multi-carousel/lib/styles.css";
import {makeStyles} from '@material-ui/core'
import {NavLink} from 'react-router-dom'
const useStyles=makeStyles({
    image:{
        width:1400,
        height:450,
    }
})
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }

};
const Slider=()=>{
const classes=useStyles();
return(
    <>
<Carousel responsive={responsive}>
  <div><img src={imageone} className={classes.image}/ ></div>
  <div><img src={imageone} className={classes.image}/ ></div>
  <div><img src={imageone} className={classes.image}/ ></div>
  

</Carousel>

</>
)
}
export default Slider;

import { Typography,Box,makeStyles, Button } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';

const useStyles=makeStyles({

	main:{
		marginTop:30,
		fontSize:20,
		position:'absolute',
		marginLeft:30,
	
	},
	text:{
		marginBottom:10,
		fontSize:5,
	
	},
	maintwo:{
		marginLeft:300,
		marginTop:30,
		position:'absolute',
		fontSize:20,
	},
	mainthree:{
		marginTop:30,
		marginLeft:600,
		position:'absolute',
		fontSize:20,
	},
	texttwo:{
width:250,
fontSize:15

	},

	mainfour:{
		position:'absolute',
		marginLeft:1000,
		marginTop:30,
		fontSize:20,
	},
btn:{
	marginBottom:6,
	marginRight:20,
	background:'black',
	color:'white',
	display:'absolute',
},
form:{
	
	marginRight:30,
	width:180,

},
two:{
	marginTop:200,
	position:'absolute',
	color:'silver',
	
},
color:{
	color:'black',
},
icon:{
	fontSize:17,
	
}
})


const Footer = () => {
	const classes=useStyles();
	return (
		<>
	<hr/>
	<Box className={classes.color}>
		<Box className={classes.main}>
			
				Company
				<Box className={classes.text}> 
				<Typography><b>Shipping</b></Typography>
				<Typography><b>Return Policy</b></Typography><Typography><b>Work with us</b></Typography><Typography><b>Terms and Conditions</b>	</Typography>
				</Box>
				</Box>
		<Box className={classes.maintwo}>
		
		Follow us out there
		<Box className={classes.text}> 
		<Typography><FacebookIcon className={classes.icon}/>Facebook</Typography>
		<Typography><TwitterIcon className={classes.icon}/>Twitter</Typography>
		<Typography><InstagramIcon className={classes.icon}/>Instagram</Typography>
		<Typography><PinterestIcon className={classes.icon}/>Pinterest</Typography>
		</Box>
		</Box>
		<Box className={classes.mainthree}>
			Thank You
			<Box className={classes.texttwo}>
			<Typography>Thank for the wonderfull talk over at Herbivore for letting us use their beautiful imaginary in this demo</Typography>
		</Box>
		</Box>
	
		
		<Box className={classes.mainfour}>
			<input className={classes.form}type="text"/>
			<Button className={classes.btn}>Subscribe</Button>
		</Box>
		<Box className={classes.two}>
			copyright &copy;
		</Box>
		<br/>
		<br/>
		<br/>
		</Box>
		
		</>
	)
}
 export default Footer;
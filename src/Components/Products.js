import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core'
import photo from './image/photo.jpg'
import { NavLink } from 'react-router-dom';
import Footer from './Footer'
const useStyles = makeStyles({
    product: {
        marginTop: 80,
        marginLeft: 38,
        positon: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
    },
    image: {
        height: 150,
        width: 150,
        position: 'relative',
        marginLeft: 120,
        border: 10,
        marginBottom: 20,
        flex: '1 0 21%',

    },
    text: {
        positon: 'relative',

        marginBottom: 20,
        marginLeft: 150,
    },
    text2: {

        postion: 'relative',
        color: 'silver',

        marginBottom: 10,
        marginLeft: 150,
        display: 'inline-block',
    }
})


function Products() {
    const classes = useStyles();
    return (


        <>

            <Box className={classes.product} >
                <NavLink to="/Productdetail">
                    <img className={classes.image} src={photo} />

                    <Typography className={classes.text}>  Flores gyan</Typography>
                    <Typography className={classes.text2}>Astra</Typography>
                </NavLink>
                <NavLink to="/Productdetail">
                    <img className={classes.image} src={photo} /><Typography className={classes.text}>  Flores gyan</Typography>
                    <Typography className={classes.text2}>Astra</Typography></NavLink>
                <NavLink to="/Productdetail">
                    <img className={classes.image} src={photo} />
                    <Typography className={classes.text}>  Flores gyan</Typography>
                    <Typography className={classes.text2}>Astra</Typography>

                </NavLink>

                <NavLink to="/Productdetail">
                    <img className={classes.image} src={photo} />
                    <Typography className={classes.text}>Flores gyan</Typography>
                    <Typography className={classes.text2}>By Astra</Typography>
                </NavLink>
                <NavLink to="/Productdetail">
                    <img className={classes.image} src={photo} /><Typography className={classes.text}>  Flores gyan</Typography>
                    <Typography className={classes.text2}>Astra</Typography></NavLink>
                <NavLink to="/Productdetail">
                    <img className={classes.image} src={photo} /><Typography className={classes.text}>  Flores gyan</Typography>
                    <Typography className={classes.text2}>Astra</Typography></NavLink>
                <NavLink to="/Productdetail">
                    <img className={classes.image} src={photo} /><Typography className={classes.text}>  Flores gyan</Typography>
                    <Typography className={classes.text2}>Astra</Typography></NavLink>
                <NavLink to="/Productdetail">
                    <img className={classes.image} src={photo} /><Typography className={classes.text}>  Flores gyan</Typography>
                    <Typography className={classes.text2}>Astra</Typography></NavLink>
                <NavLink to="/Productdetail">
                    <img className={classes.image} src={photo} /><Typography className={classes.text}>  Flores gyan</Typography>
                    <Typography className={classes.text2}>Astra</Typography></NavLink>
                <NavLink to="/Productdetail">
                    <img className={classes.image} src={photo} /><Typography className={classes.text}>  Flores gyan</Typography>
                    <Typography className={classes.text2}>Astra</Typography></NavLink>
                <NavLink to="/Productdetail">
                    <img className={classes.image} src={photo} /><Typography className={classes.text}>  Flores gyan</Typography>
                    <Typography className={classes.text2}>Astra</Typography></NavLink>
                <NavLink to="/Productdetail">
                    <img className={classes.image} src={photo} /><Typography className={classes.text}>  Flores gyan</Typography>
                    <Typography className={classes.text2}>Astra</Typography></NavLink>
                <NavLink to="/Productdetail">
                    <img className={classes.image} src={photo} /><Typography className={classes.text}>  Flores gyan</Typography>
                    <Typography className={classes.text2}>Astra</Typography></NavLink>
                    <NavLink to="/Productdetail">
                    <img className={classes.image} src={photo} /><Typography className={classes.text}>  Flores gyan</Typography>
                    <Typography className={classes.text2}>Astra</Typography></NavLink>
                    <NavLink to="/Productdetail">
                    <img className={classes.image} src={photo} /><Typography className={classes.text}>  Flores gyan</Typography>
                    <Typography className={classes.text2}>Astra</Typography></NavLink>
                    <NavLink to="/Productdetail">
                    <img className={classes.image} src={photo} /><Typography className={classes.text}>  Flores gyan</Typography>
                    <Typography className={classes.text2}>Astra</Typography></NavLink>
            </Box>
            <Box >
<Footer/>
            </Box>

        </>
    )
}
export default Products;
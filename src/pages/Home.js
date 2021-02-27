import {
  Button,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import AesopImage from "../assets/aesop.png";
import Header from "../components/Header";
import { BsArrowRightShort } from "react-icons/bs";

const main = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${AesopImage})`,
    backgroundSize: "100% 100%",
    height: "100vh",
  },
  content: {
    marginTop: "70px",
    // marginLeft: "60px",
    paddingLeft: "60px",
    color: "white",
    // fontSize: "40px",
  },
  heading: {
    fontSize: "2rem",
  },
  heading2: {
    fontSize: "30px",
  },
  subTitle: {
    fontSize: "14px",
  },
  button: {
    color: "white",
    fontSize: "14px",
    borderColor: "white",
    padding: "19px 55px 19px 23px",
    borderRadius: 0,
    textTransform: "none",
    marginTop: "25px",
  },
}));

const Home = () => {
  const classes = main();
  return (
    <div className={classes.root}>
      {/* <Hidden smDown> */}
      <Header />
      {/* </Hidden> */}

      <Grid container className={classes.content}>
        <Grid item md={1} lg={1}>
          <Typography className={classes.heading}>Aesop</Typography>
        </Grid>
        <Grid item md={1} lg={1} />
        <Grid item md={4} lg={5}>
          <Typography className={classes.heading2}>
            Treasure the ties that unite
          </Typography>
          <p className={classes.subTitle}>
            Wishing strength, prosperity and good fortune to you and yours this
            Lunar New Year—be they near or far.
          </p>
          <Button
            variant="outlined"
            className={classes.button}
            endIcon={<BsArrowRightShort />}
          >
            Explore auspicious gifts
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;

import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Bottle from "../assets/bottle.png";
import Card from "./Card";

const main = makeStyles((theme) => ({
  content: {
    marginTop: "50px",
  },
}));

const ProductSection = () => {
  const classes = main();
  return (
    // <div>
    //   <img src={Bottle} alt="bottle" className={classes.image} />
    //   <Typography className={classes.title}>Tacit</Typography>
    //   <Typography className={classes.subTitle}> Crisp</Typography>
    // </div>
    <Grid container className={classes.content}>
      <Grid item lg={4}>
        <Card />
      </Grid>
      <Grid item lg={4}>
        <Card />
      </Grid>
      <Grid item lg={4}>
        <Card />
      </Grid>
    </Grid>
  );
};

export default ProductSection;

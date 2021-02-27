import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

import Card from "./Card";

const main = makeStyles((theme) => ({
  content: {
    marginTop: "50px",
  },
}));

const ProductSection = () => {
  const classes = main();
  return (
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

import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const main = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "space-between",
    color: "white",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    margin: "20px 60px 0px 60px",
  },
  item1: {
    marginRight: "20px",
  },
  item2: {
    marginLeft: "20px",
  },
}));

const Header = () => {
  const classes = main();
  return (
    <div>
      <Grid container className={classes.main}>
        <Grid className={classes.nav}>
          <p className={classes.item1}>Shop</p>
          <p className={classes.item1}>Read</p>
          <p className={classes.item1}>Store</p>
          <p className={classes.item1}>Search</p>
        </Grid>
        <Grid></Grid>
        <Grid className={classes.nav}>
          <p className={classes.item2}>Login</p>
          <p className={classes.item2}>Cart</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;

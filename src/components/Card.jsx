import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Bottle from "../assets/bottle.png";
import Oil from "../assets/oil.png";

const main = makeStyles((theme) => ({
  title: {
    fontSize: "14px",
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitle: {
    fontSize: "14px",
    textAlign: "center",
  },
  image: {
    width: "90%",

    [theme.breakpoints.up("lg")]: {
      width: "397px",
      height: "387px",
    },
  },
}));

const Card = ({ oil }) => {
  const classes = main();
  return (
    <div>
      <img src={oil ? Oil : Bottle} alt="bottle" className={classes.image} />
      <Typography className={classes.title}>Tacit Eau de Parfum</Typography>
      <Typography className={classes.subTitle}>
        Crisp, green, citrus fragrance
      </Typography>
    </div>
  );
};

export default Card;

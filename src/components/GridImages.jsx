import { Grid } from "@material-ui/core";
import React from "react";

const GridComponent = () => {
  return (
    <div>
      <Grid
        Container
        style={{
          display: "flex",
          height: "100vh",
          marginRight: "100px",
          marginLeft: "100px",
        }}
      >
        <Grid
          item
          xs={4}
          style={{
            backgroundColor: "red",
            color: "white",
            textAlign: "center",
          }}
        >
          grid 1
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            backgroundColor: "green",
            color: "white",
            textAlign: "center",
          }}
        >
          grid 2
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            backgroundColor: "blue",
            color: "white",
            textAlign: "center",
          }}
        >
          grid 3
        </Grid>
      </Grid>
    </div>
  );
};

export default GridComponent;

import { Grid } from "@material-ui/core";
import React from "react";

const GridComponent = () => {
  return (
    <div>
      <Grid Container>
        <Grid />
        <Grid
          item
          xs={12}
          style={{
            backgroundColor: "#252525",
            height: "auto",
            padding: "10px",
            fontSize: "14px",
            color: "white",
            textAlign: "center",
          }}
        >
          Enjoy complimentary standard shipping on all orders.
        </Grid>
      </Grid>
    </div>
  );
};

export default GridComponent;

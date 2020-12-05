import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Divider, Typography } from "@material-ui/core";
import firebase from "firebase/app";
import "firebase/database";

const useStyles = makeStyles((theme) => ({
  button: { marginTop: 10, width: 150 },
}));

// scarab/tochka 3
// scud 4
export default function MainPage(props) {
  const classes = useStyles();
  // Get a reference to the database service
  var database = firebase.database();

  function writeUserData() {
    database.ref("incomingMissiles").push({
      lat: 24.2323,
      lng: 32.32323,
      radius: 40,
    });
  }

  const calculateImpactCoordinates = (param) => {
    console.log("hey");
    writeUserData();
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography>SCARAB / TOCHKA</Typography>
        <Button
          onClick={() => calculateImpactCoordinates("first")}
          className={classes.button}
          variant="contained"
        >
          First
        </Button>
        <Button
          onClick={() => calculateImpactCoordinates("second")}
          className={classes.button}
          variant="contained"
        >
          Second
        </Button>
        <Button
          onClick={() => calculateImpactCoordinates("third")}
          className={classes.button}
          variant="contained"
        >
          Third
        </Button>
      </Grid>
      <Divider />
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography>SCUD</Typography>
        <Button
          onClick={() => calculateImpactCoordinates("first")}
          className={classes.button}
          variant="contained"
        >
          First
        </Button>
        <Button
          onClick={() => calculateImpactCoordinates("second")}
          className={classes.button}
          variant="contained"
        >
          Second
        </Button>
        <Button
          onClick={() => calculateImpactCoordinates("third")}
          className={classes.button}
          variant="contained"
        >
          Third
        </Button>
        <Button
          onClick={() => calculateImpactCoordinates("fourth")}
          className={classes.button}
          variant="contained"
        >
          Fourth
        </Button>
      </Grid>
    </Grid>
  );
}

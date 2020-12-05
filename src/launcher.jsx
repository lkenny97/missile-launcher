import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import firebase from "firebase/app";
import "firebase/database";
import flag from "./imgs/flag.svg";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: 10,
    width: 150,
    color: "#FFF",
    borderColor: "#FFF",
    "&:hover": {
      backgroundColor: "#e2e2e2",
      color: "#000",
      borderColor: "#000",
    },
  },
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
    <div style={{ width: "100%" }}>
      <div>
        <img src={flag} alt="flag" width="500" />
      </div>
      <Typography
        style={{
          fontSize: 40,
          paddingTop: 20,
          paddingBottom: 5,
          fontWeight: "bold",
        }}
      >
        Ballistic Missile Detection Center
      </Typography>
      <Typography
        style={{ fontSize: 20, paddingBottom: 70, fontStyle: "italic" }}
      >
        Enter missile that has entered the air space.
      </Typography>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="start"
        spacing={10}
      >
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography
              style={{ fontWeight: "bold", fontSize: 20, paddingBottom: 10 }}
            >
              SCARAB / OTR-21 TOCHKA
            </Typography>
            <Button
              onClick={() => calculateImpactCoordinates("first")}
              className={classes.button}
              variant="outlined"
            >
              Scarab A
            </Button>
            <Button
              onClick={() => calculateImpactCoordinates("second")}
              className={classes.button}
              variant="outlined"
            >
              Scarab B
            </Button>
            <Button
              onClick={() => calculateImpactCoordinates("third")}
              className={classes.button}
              variant="outlined"
            >
              Scarab C
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography
              style={{ fontWeight: "bold", fontSize: 20, paddingBottom: 10 }}
            >
              SCUD / R11 / R300
            </Typography>
            <Button
              onClick={() => calculateImpactCoordinates("first")}
              className={classes.button}
              variant="outlined"
            >
              Scud A
            </Button>
            <Button
              onClick={() => calculateImpactCoordinates("second")}
              className={classes.button}
              variant="outlined"
            >
              Scud B
            </Button>
            <Button
              onClick={() => calculateImpactCoordinates("third")}
              className={classes.button}
              variant="outlined"
            >
              Scud C
            </Button>
            <Button
              onClick={() => calculateImpactCoordinates("fourth")}
              className={classes.button}
              variant="outlined"
            >
              Scud D
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item>
          <Typography
            style={{ fontSize: 30, paddingTop: 100, fontWeight: "bold" }}
          >
            #KarabakhisAzerbaijan
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            style={{ fontSize: 30, paddingTop: 100, fontWeight: "bold" }}
          >
            #QarabağAzərbaycandır
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            style={{ fontSize: 30, paddingTop: 100, fontWeight: "bold" }}
          >
            #CodeForPeace
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

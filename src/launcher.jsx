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

  const missileRangePredictionAlgorithm = (missile, missileType) => {
    // first calculate terminal velocity depending on missile type
    // missile 0 - scarab / missile 1 - scud
    // missileType - A B C / A B C D
    var velocity_terminal;
    var missile_mass;
    var gravitational_acceleration = 9.8;
    var drag_coefficient = 0.04;
    var air_density = 1.225;
    var cross_area_section;
    var missile_max_velocity;
    var time;
    var missile_range_predicted = 0;
    var missile_accuracy_radius;

    // scarab
    if (missile === 0 && missileType === "A") {
      missile_mass = 2000;
      cross_area_section = Math.PI * Math.pow(0.65, 2);
      missile_max_velocity = 1800; // m/s

      // calculate terminal velocity for scarab type
      velocity_terminal = Math.sqrt(
        (2 * missile_mass * gravitational_acceleration) /
          (drag_coefficient * air_density * cross_area_section)
      );

      // time to hit the ground for scarab type
      time = 70000 / missile_max_velocity;
      missile_accuracy_radius = 150;
    }

    if (missile === 0 && missileType === "B") {
      missile_mass = 2010;
      cross_area_section = Math.PI * Math.pow(0.65, 2);
      missile_max_velocity = 1800; // m/s

      // calculate terminal velocity for scarab type
      velocity_terminal = Math.sqrt(
        (2 * missile_mass * gravitational_acceleration) /
          (drag_coefficient * air_density * cross_area_section)
      );

      // time to hit the ground for scarab type
      time = 120000 / missile_max_velocity;
      missile_accuracy_radius = 150;
    }

    if (missile === 0 && missileType === "C") {
      missile_mass = 1800;
      cross_area_section = Math.PI * Math.pow(0.65, 2);
      missile_max_velocity = 1800; // m/s

      // calculate terminal velocity for scarab type
      velocity_terminal = Math.sqrt(
        (2 * missile_mass * gravitational_acceleration) /
          (drag_coefficient * air_density * cross_area_section)
      );

      // time to hit the ground for scarab type
      time = 185000 / missile_max_velocity;
      missile_accuracy_radius = 150;
    }

    // scud
    if (missile === 1 && missileType === "A") {
      missile_mass = 4400;
      cross_area_section = Math.PI * Math.pow(0.88, 2);
      missile_max_velocity = 1700; // m/s

      // calculate terminal velocity for scud type
      velocity_terminal = Math.sqrt(
        (2 * missile_mass * gravitational_acceleration) /
          (drag_coefficient * air_density * cross_area_section)
      );

      // time to hit the ground for scud type
      time = 180000 / missile_max_velocity;
      missile_accuracy_radius = 3000;
    }

    if (missile === 1 && missileType === "B") {
      missile_mass = 5900;
      cross_area_section = Math.PI * Math.pow(0.88, 2);
      missile_max_velocity = 1700; // m/s

      // calculate terminal velocity for scud type
      velocity_terminal = Math.sqrt(
        (2 * missile_mass * gravitational_acceleration) /
          (drag_coefficient * air_density * cross_area_section)
      );

      // time to hit the ground for scud type
      time = 300000 / missile_max_velocity;
      missile_accuracy_radius = 450;
    }

    if (missile === 1 && missileType === "C") {
      missile_mass = 6400;
      cross_area_section = Math.PI * Math.pow(0.88, 2);
      missile_max_velocity = 1700; // m/s

      // calculate terminal velocity for scud type
      velocity_terminal = Math.sqrt(
        (2 * missile_mass * gravitational_acceleration) /
          (drag_coefficient * air_density * cross_area_section)
      );

      // time to hit the ground for scud type
      time = 600000 / missile_max_velocity;
      missile_accuracy_radius = 700;
    }

    if (missile === 1 && missileType === "D") {
      missile_mass = 6500;
      cross_area_section = Math.PI * Math.pow(0.88, 2);
      missile_max_velocity = 1700; // m/s

      // calculate terminal velocity for scud type
      velocity_terminal = Math.sqrt(
        (2 * missile_mass * gravitational_acceleration) /
          (drag_coefficient * air_density * cross_area_section)
      );

      // time to hit the ground for scud type
      time = 700000 / missile_max_velocity;
      missile_accuracy_radius = 50;
    }

    // range to hit prediction
    missile_range_predicted =
      (Math.pow(velocity_terminal, 2) / gravitational_acceleration) *
      Math.log(
        (Math.pow(velocity_terminal, 2) +
          gravitational_acceleration * missile_max_velocity * time) /
          Math.pow(velocity_terminal, 2)
      );

    var totalRange = missile_range_predicted / 1000;
    console.log(totalRange.toPrecision(3) + "km");

    return missile_range_predicted;
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
            <Button
              onClick={() => missileRangePredictionAlgorithm(0, "A")}
              className={classes.button}
              variant="outlined"
            >
              Test
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

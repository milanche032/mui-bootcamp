import React from "react";
import { Typography, Button, ButtonGroup, Container } from "@mui/material";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";
import SendIcon from "@mui/icons-material/Send";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({});

export default function Create() {
  const classes = useStyles();
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
        className={classes.title}
      >
        Create a New Note
      </Typography>
      <Button
        variant="contained"
        type="submit"
        className={classes.btn}
        onClick={() => {
          console.log("button cloicked");
        }}
        endIcon={<SendIcon />}
      >
        Submit
      </Button>
    </Container>
  );
}

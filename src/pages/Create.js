import React, { useState } from "react";
import {
  Typography,
  Button,
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
} from "@mui/material";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";
import SendIcon from "@mui/icons-material/Send";
import { makeStyles } from "@mui/styles";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  field: {
    marginTop: "20px !important",
    marginBottom: "20px !important",
    display: "block !important",
  },
  groupflex: {
    display: "flex !important",
    flexDirection: "row !important",
  },
  btn: {
    float: "right !important",
  },
});

export default function Create() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title == "") {
      setTitleError(true);
    }

    if (details == "") {
      setDetailsError(true);
    }

    if (title && details) {
      Axios.post("http://localhost:8000/notes", {
        title: title,
        details: details,
        category: category,
      }).then(() => navigate("/"));
    }
  };
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note Title"
          color="secondary"
          fullWidth
          variant="outlined"
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          required
          error={detailsError}
        />
        <FormControl color="secondary" className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className={classes.groupflex}
          >
            <FormControlLabel
              value="money"
              control={<Radio color="secondary" />}
              label="Money"
            />
            <FormControlLabel
              value="todos"
              control={<Radio color="secondary" />}
              label="Todos"
            />
            <FormControlLabel
              value="reminders"
              control={<Radio color="secondary" />}
              label="Reminders"
            />
            <FormControlLabel
              value="work"
              control={<Radio color="secondary" />}
              label="Work"
            />
          </RadioGroup>
        </FormControl>

        <Button
          variant="contained"
          color="secondary"
          type="submit"
          className={classes.btn}
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

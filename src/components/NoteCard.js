import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  test: {
    border: (note) => {
      if (note.category == "work") {
        return "1px solid #0082CF";
      } else if (note.category == "money") {
        return "1px solid #9BE2A0";
      } else if (note.category == "todos") {
        return "1px solid #C17744";
      } else if (note.category == "reminders") {
        return "1px solid #9189E1";
      }
    },
  },
});

export default function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note);

  return (
    <div>
      <Card className={classes.test} elevation={3}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

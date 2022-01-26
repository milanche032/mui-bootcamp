import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Paper, Grid } from "@mui/material";
import NoteCard from "../components/NoteCard";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:8000/notes").then((response) => {
      setNotes(response.data);
    });
  }, []);

  const handleDelete = async (id) => {
    await Axios.delete("http://localhost:8000/notes/" + id).then(() => {
      console.log("deleted " + id);
    });

    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid xs={12} sm={6} md={4} lg={3} item key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

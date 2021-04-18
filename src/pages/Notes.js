import React, {useEffect, useState} from 'react';
import '../index.css'
//React components
import NoteCard from '../components/NotesCard';
//material-ui components
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
//react masonry
import Masonry from 'react-masonry-css';

export default function Notes() {
  const [notes, setNotes] = useState([]);
  //console.log(notes)

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8000/notes/${id}`,{
      method: 'DELETE'
    })
    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  }

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map(note => (
          <div item key={note.id} >
            <NoteCard note={note} handleDelete={handleDelete}/>
          </div>
        ))}
      </Masonry>
    </Container>
  )
}
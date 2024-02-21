import React from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"

console.log(notes)
function createNotes(note) {
  return (
    <Note
      key={note.id}
      id={note.id}
      title={note.title}
      content={note.content}
    />
  )
}

function App() {
  return (
    <div>
      <Heading/>
      {notes.map(createNotes)}
      <Footer/>
    </div>
  );
}

export default App;

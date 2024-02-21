import React from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"

console.log(notes)


function App() {
  return (
    <div>
      <Heading/>
      {notes.map((note) => <Note key={note.id} id={note.id} title={note.title} content={note.content} />)}
      <Footer/>
    </div>
  );
}

export default App;

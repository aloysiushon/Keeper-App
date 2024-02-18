import React from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div>
      <header><Heading/></header>
      <Note/>
      <footer><Footer/></footer>
    </div>
  );
}

export default App;

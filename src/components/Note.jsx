import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";


function Note(props) {
  function deleteItem() {
    props.onDelete(props.id);
    console.log("Notes Deleted");
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteItem}><DeleteIcon/></button>
    </div>
  );
}
export default Note;

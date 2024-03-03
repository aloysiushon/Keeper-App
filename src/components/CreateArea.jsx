import React, {useState} from "react";
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function CreateArea(props) {
  const [isExpend, setExpend] = useState(false);
  const [input, setInput] = useState({
    title: "",
    content: "",
  })

  function handleChange(event) {
    const { name, value } = event.target;
      // console.log(name);
      // console.log(value);
    setInput(prevInput => ({...prevInput, [name]: value }));
  }

  function submitNote(event) {
    props.onAdd(input);
    setInput({
      title: "",
      content: ""
    });
    event.preventDefault();
    console.log("Notes Added");
  }

  function expend() {
    setExpend(true);
  }

  return (
    <div>
      <form className="create-note">
      {isExpend && <input onChange={handleChange} value={input.title} name="title" placeholder="Title" />}
        <textarea
          onClick={expend}
          onChange={handleChange}
          value={input.content}
          name="content"
          placeholder="Take a note..."
          rows={ isExpend ? 3 : 1 }
        />
        <Zoom in={isExpend}>
          <Fab onClick={submitNote}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

import React, {useState} from "react";

function CreateArea(props) {
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

  return (
    <div>
      <form className="create-note">
        <input onChange={handleChange} value={input.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} value={input.content} name="content" placeholder="Take a note..." rows="3" />
        <button
          onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

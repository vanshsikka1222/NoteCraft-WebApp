import React from "react";

function CreateArea(props) {

  //State of an Object (note : title, content)
  const [Note, setNote] = React.useState({
    title: "",
    content: "",
  });

  //Function that trigger when "input" and "textarea" fields are changed (onChange)
  function handleChange(event) {
    //DeStructuring
    const { name, value } = event.target;

    //Setting a newState of "note"
    setNote((prevNote) => { // The argument to "setMote" is a function that takes the previous state (prevNote) as a parameter 
      return {
        //using SPREAD (...)
        ...prevNote,
        [name]: value,
      };
    });
  }

  //Function that trigger when Button (ADD) is Clicked
  function submit(event) {
    props.onAdd(Note);
    //Clearing the Title and Content after adding a Note
    setNote({
      title: "",
      content: "",
    });
    //Preventing Default action of SUBMIT button in Form (Refresh Page)
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">

        <input
          name="title"
          onChange={handleChange}
          value={Note.title}
          placeholder="Title"
        />


        <textarea
          name="content"
          onChange={handleChange}
          value={Note.content}
          placeholder="Craft a Note..."
        />
        <button onClick={submit}>ADD</button>
      </form>
    </div>
  );
}

export default CreateArea;

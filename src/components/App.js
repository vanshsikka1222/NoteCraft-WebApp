import React from "react";
//Importing Components
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  //State (Array)
  const [Notes, setNotes] = React.useState([]);

  //Triggers when "onAdd" is triggered in "CreateArea" component i.e on clicking ADD button
  function addNote(newNote) {
    setNotes(prevNotes => {
      //Adding newNote inside array of Notes
      return [...prevNotes, newNote];
    });
  }

  //Triggers when "onDelete" is triggered in "Note" component i.e on clicking DELETE button
  function deleteNote(id) {
    setNotes(prevNotes => {
      //Using FILTER to delete a note with given ID from Notes array
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} /> {/* "onAdd" is a prop used in "CreateArea" component */}
      {Notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote} /* "onDelete" is a prop used in "Note" component */
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

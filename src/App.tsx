import React from "react";
import "./App.css";
import { useState } from "react";
import GuitarChords from "./chords";
import search from "./img/search.svg";
const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
const chordDisplay = (input: any) => {
  if (input === "") {
    return (
      <div className="multi">
        {notes.map((i) => {
          return (
            <GuitarChords
              chord={i}
              height="10em"
              quality="MAJ"
              alternate={false}
            />
          );
        })}
        {notes.map((i) => {
          return (
            <GuitarChords
              chord={i}
              height="10em"
              quality="MIN"
              alternate={false}
            />
          );
        })}
        {notes.map((i) => {
          return (
            <GuitarChords
              chord={i}
              height="10em"
              alternate={true}
              quality="MAJ"
            />
          );
        })}
        {notes.map((i) => {
          return (
            <GuitarChords
              chord={i}
              height="10em"
              quality="MIN"
              alternate={true}
            />
          );
        })}
      </div>
    );
  } else if (input in notes !== true) {
    console.log(input);
    return (
      <div className="multi">
        <GuitarChords
          chord={input}
          height="15em"
          quality="MAJ"
          alternate={false}
        />
        <GuitarChords
          chord={input}
          height="15em"
          quality="MIN"
          alternate={false}
        />
        <GuitarChords
          chord={input}
          height="15em"
          quality="MAJ"
          alternate={true}
        />
        <GuitarChords
          chord={input}
          height="15em"
          quality="MIN"
          alternate={true}
        />
      </div>
    );
  }
};
function App() {
  const [input, setInput] = useState("");
  return (
    <div className="ChordHelper">
      <div className="heading">Guitar Chords</div>
      <input
        type="text"
        placeholder="Search"
        className="textInput"
        value={input}
        onInput={(event) => setInput((event.target as HTMLInputElement).value)}
      />
      <img className="searchIcon" alt="searchIcon" src={search} />
      {chordDisplay(input)}
    </div>
  );
}

export default App;

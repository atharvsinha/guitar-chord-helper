import React from "react";
import "./App.css";
import { useState } from "react";
import GuitarChord from "react-guitar-chord";
import search from "./img/search.svg";
const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
const notesMinor = [
  "Am",
  "A#m",
  "Bm",
  "Cm",
  "C#m",
  "Dm",
  "D#m",
  "Em",
  "Fm",
  "F#m",
  "Gm",
  "G#m",
];
const capitalise = (input: any) => {
  if (String(input).length === 0) return "";
  else if (input.length === 1) return input.toUpperCase();
  else if (input.length > 1) return input[0].toUpperCase() + input.slice(1);
  else return null;
};
function App() {
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
    } else if (notes.includes(input)) {
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
    } else if (notesMinor.includes(input)) {
      return (
        <div className="two">
          <GuitarChords
            chord={input.slice(0, input.length - 1)}
            height="16.5em"
            quality="MIN"
            alternate={false}
          />
          <GuitarChords
            chord={input.slice(0, input.length - 1)}
            height="16.5em"
            quality="MIN"
            alternate={true}
          />
        </div>
      );
    }
  };
  interface guitarChord {
    chord: any;
    height: any;
    alternate: any;
    quality: any;
  }

  const GuitarChords = ({ chord, height, alternate, quality }: guitarChord) => {
    const [states, setStates] = useState(true);
    return (
      <GuitarChord
        chord={chord}
        height={height}
        quality={quality}
        alternate={alternate}
        style={{ cursor: "pointer" }}
      />
    );
  };
  const [input, setInput] = useState("");
  return (
    <div className="ChordHelper">
      <div className="heading">Guitar Chords</div>
      <input
        type="text"
        placeholder="Search"
        className="textInput"
        value={input}
        onInput={(event) =>
          setInput(capitalise((event.target as HTMLInputElement).value))
        }
      />
      <img className="searchIcon" alt="searchIcon" src={search} />
      {chordDisplay(input)}
    </div>
  );
}

export default App;

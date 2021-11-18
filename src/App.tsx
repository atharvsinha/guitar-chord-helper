import React from "react";
import "./App.css";
import { useState } from "react";
import GuitarChord from "react-guitar-chord";
import search from "./img/search.svg";
const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
const table = {
  multi: { name: "multi", height: "10em" },
  four: { name: "four", height: "15em" },
  two: { name: "two", height: "16.5em" },
  one: { name: "one", height: "30em" },
};
const nullTable = {
  multi: { name: "multi", height: "0em" },
  four: { name: "four", height: "0em" },
  two: { name: "two", height: "0em" },
  one: { name: "one", height: "0em" },
};
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
};
function App() {
  const [tableData, setTable] = useState(table);
  const [buttonStatus, setButtonStatus] = useState("no-btn");
  const chordDisplay = (input: any) => {
    if (input === "") {
      return (
        <div className={tableData.multi.name}>
          {notes.map((i) => {
            return (
              <GuitarChords
                chord={i}
                height={tableData.multi.height}
                quality="MAJ"
                alternate={false}
              />
            );
          })}
          {notes.map((i) => {
            return (
              <GuitarChords
                chord={i}
                height={tableData.multi.height}
                quality="MIN"
                alternate={false}
              />
            );
          })}
          {notes.map((i) => {
            return (
              <GuitarChords
                chord={i}
                height={tableData.multi.height}
                alternate={true}
                quality="MAJ"
              />
            );
          })}
          {notes.map((i) => {
            return (
              <GuitarChords
                chord={i}
                height={tableData.multi.height}
                quality="MIN"
                alternate={true}
              />
            );
          })}
        </div>
      );
    } else if (notes.includes(input)) {
      return (
        <div className={tableData.four.name}>
          <GuitarChords
            chord={input}
            height={tableData.four.height}
            quality="MAJ"
            alternate={false}
          />
          <GuitarChords
            chord={input}
            height={tableData.four.height}
            quality="MIN"
            alternate={false}
          />
          <GuitarChords
            chord={input}
            height={tableData.four.height}
            quality="MAJ"
            alternate={true}
          />
          <GuitarChords
            chord={input}
            height={tableData.four.height}
            quality="MIN"
            alternate={true}
          />
        </div>
      );
    } else if (notesMinor.includes(input)) {
      return (
        <div className={tableData.two.name}>
          <GuitarChords
            chord={input.slice(0, input.length - 1)}
            height={tableData.two.height}
            quality="MIN"
            alternate={false}
          />
          <GuitarChords
            chord={input.slice(0, input.length - 1)}
            height={tableData.two.height}
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
  const initialLarge = {
    height: "0em",
    className: "null",
    chord: "",
    alternate: false,
    quality: "",
  };
  const [large, setLarge] = useState(initialLarge);
  const LargeChord = () => {
    return (
      <div className={large.className}>
        <GuitarChord
          chord={large.chord}
          quality={large.quality}
          height={large.height}
          alternate={large.alternate}
        />
      </div>
    );
  };
  const GuitarChords = ({ chord, height, alternate, quality }: guitarChord) => {
    return (
      <div
        className={chord}
        id="chordShape"
        onClick={() => {
          setTable(nullTable);
          setLarge({
            height: "30em",
            className: "enter",
            chord: chord,
            alternate: alternate,
            quality: quality,
          });
          setButtonStatus("btn");
        }}
      >
        <GuitarChord
          chord={chord}
          height={height}
          quality={quality}
          alternate={alternate}
          style={{ cursor: "pointer" }}
        />
      </div>
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
      <LargeChord />
      <button
        className={buttonStatus}
        onClick={() => {
          {
            setTable(table);
            setLarge(initialLarge);
            setButtonStatus("no-btn");
            console.log("out");
          }
        }}
      >
        Back
      </button>
    </div>
  );
}

export default App;

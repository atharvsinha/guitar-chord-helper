import GuitarChord from "react-guitar-chord";
import { useState } from "react";
interface guitarChord {
  chord: any;
  height: any;
  alternate: any;
  quality: any;
}
const GuitarChords = ({ chord, height, alternate, quality }: guitarChord) => {
  return (
    <GuitarChord
      chord={chord}
      height={height}
      quality={quality}
      alternate={alternate}
    />
  );
};
export default GuitarChords;

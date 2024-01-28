import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const imgSourceURI =
  "https://raw.githubusercontent.com/Heeuul/Readthm/main/assets/images/";

const MusicNoteContext = createContext();
export function MusicNoteProvider({ children }) {
  const [clef, SetClef] = useState("treble");
  const [pitch, SetPitch] = useState("natural");
  const [octave, SetOctave] = useState(4);
  const [alphabet, SetAlphabet] = useState("C");

  const [imgURI, SetImgURI] = useState(null);

  useEffect(() => {
    let clefDir = clef + "Clef";
    let pitchDir = pitch + "s";
    let filename =
      clef + "_" + alphabet + octave.toString() + "_" + pitch + "_img.png";

    let uri = imgSourceURI + clefDir + "/" + pitchDir + "/" + filename;
    SetImgURI(uri);

    console.log(
      "Showing " +
        alphabet +
        octave.toString() +
        " " +
        pitch +
        " on " +
        clef +
        " clef"
    );
  }, [alphabet, octave, pitch, clef]);

  const noteMemo = useMemo(
    () => ({
      imgURI,
      clef,
      pitch,
      octave,
      alphabet,
      SetAlphabet,
      SetOctave,
      SetPitch,
      SetClef,
    }),
    [imgURI]
  );

  return (
    <MusicNoteContext.Provider value={noteMemo}>
      {children}
    </MusicNoteContext.Provider>
  );
}

export default function useMusicNote() {
  return useContext(MusicNoteContext);
}

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const imgSourceURI =
  "https://raw.githubusercontent.com/Heeuul/Readthm/main/assets/images/notes/adjusted/";

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
      clef + "_" + octave.toString() + alphabet + "_" + pitch + ".png";

    let uri = imgSourceURI + clefDir + "/" + pitchDir + "/" + filename;
    SetImgURI(uri);
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

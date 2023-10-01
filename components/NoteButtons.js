import { View, Button } from "react-native";
import React, { useEffect, useState } from "react";

import useMusicNote from "../hooks/useMusicNote";

export default function NoteButtons() {
  const {
    clef,
    pitch,
    octave,
    alphabet,
    SetAlphabet,
    SetOctave,
    SetPitch,
    SetClef,
  } = useMusicNote();

  function SwapCleft() {
    SetClef(clef === "treble" ? "bass" : "treble");
  }
  function NextPitch() {
    switch (pitch) {
      case "flat":
        SetPitch("natural");
        break;
      case "natural":
        SetPitch("sharp");
        break;
      case "sharp":
        SetPitch("flat");
        break;
    }
  }

  const letter = ["C", "D", "E", "F", "G", "A", "B"];
  const [letterID, SetLetterID] = useState(0);
  function MoveUp() {
    if (
      (clef === "bass" && alphabet === "G" && octave === 5) ||
      (clef === "treble" && alphabet === "C" && octave === 8)
    )
      return;

    if (alphabet === "B") {
      SetLetterID(0);
      SetOctave(octave + 1);
    } else {
      SetLetterID(letterID + 1);
    }
  }
  function MoveDown() {
    if (
      (clef === "bass" && alphabet === "A" && octave === 0) ||
      (clef === "treble" && alphabet === "C" && octave === 2)
    )
      return;

    if (alphabet === "C") {
      SetLetterID(letter.length - 1);
      SetOctave(octave - 1);
    } else SetLetterID(letterID - 1);
  }
  useEffect(() => SetAlphabet(letter[letterID]), [letterID]);

  return (
    <View>
      <Button
        title={"Clef: " + clef}
        onPress={() => {
          SwapCleft();
        }}
      />
      <Button
        title={"Pitch: " + pitch}
        onPress={() => {
          NextPitch();
        }}
      />
      <Button title={"Move Up"} onPress={() => MoveUp()} />
      <Button title={"Move Down"} onPress={() => MoveDown()} />
    </View>
  );
}

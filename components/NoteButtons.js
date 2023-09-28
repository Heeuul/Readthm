import { View, Button } from "react-native";
import React, { useState } from "react";

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

  const letter = ["A", "B", "C", "D", "E", "F", "G"];
  const [letterID, SetLetterID] = useState(2);
  function NextOctave() {
    SetOctave(octave + 1 < letter.length ? letterID + 1 : 0);
  }
  function MoveUp() {
    if (letterID + 1 < letter.length) {
      SetLetterID(letterID + 1);
      SetAlphabet(letter[letterID]);
    }
  }
  function MoveDown() {
    if (letterID - 1 > 0) {
      SetLetterID(letterID - 1);
      SetAlphabet(letter[letterID]);
    }
  }

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

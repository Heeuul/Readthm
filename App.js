import { Image, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

import Note from "./components/Note";

export default function App() {
  const note1 = new Note("C", 4, "natural");
  const [img, SetImg] = useState(null);

  function IterateFiles() {}
  function TestImage() {
    // Alphabet: "A", "B", "C", "D", "E", "F"
    // Octave: 0 ~ 8
    // Pitch: "flat", "natural", "sharp"
    // Clef: "bass", "treble"
    // Image: URI

    const img = require("./assets/images/notes/adjusted/trebleClef/naturals/treble_3Cn.png");
    return img;
  }

  useEffect(() => {
    IterateFiles();
    SetImg(TestImage());
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Image
        style={{ width: 200, height: 200, resizeMode: "contain" }}
        source={img}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

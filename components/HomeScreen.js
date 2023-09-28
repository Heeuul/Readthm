import { Image, StyleSheet, View, Text } from "react-native";
import { useEffect, useState, React } from "react";

import useMusicNote from "../hooks/useMusicNote";

export default function HomeScreen() {
  const { imgURI } = useMusicNote();
  const [img, SetImg] = useState(null);

  function TestImage() {
    // Alphabet: "A", "B", "C", "D", "E", "F"
    // Octave: 0 ~ 8
    // Pitch: "flat", "natural", "sharp"
    // Clef: "bass", "treble"
    // Image: URI

    const img = require("../assets/images/notes/adjusted/trebleClef/naturals/treble_3C_natural.png");
    return img;
  }

  useEffect(() => {
    SetImg(TestImage());
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Image
        style={{ width: 200, height: 200, resizeMode: "contain" }}
        source={{ uri: imgURI }}
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

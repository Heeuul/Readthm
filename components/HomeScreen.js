import { Image, StyleSheet, View } from "react-native";
import { React } from "react";

import useMusicNote from "../hooks/useMusicNote";
import NoteButtons from "./NoteButtons";

export default function HomeScreen() {
  const { imgURI } = useMusicNote();

  return (
    <View style={styles.container}>
      <NoteButtons />
      <Image
        style={{ width: "80%", height: 200, resizeMode: "contain" }}
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

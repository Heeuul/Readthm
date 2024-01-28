import { View, Text, StyleSheet, Button, Switch } from "react-native";
import React, { useState } from "react";

export default function QuizScreen() {
  const [sEnabled, SetS] = useState(false);

  return (
    <View style={styles.container}>
      <Text>QuizScreen</Text>
      <View>
        <Text>Mode</Text>
        <Button title="Endless" />
        <Button title="Time Attack" />
        <Button title="Time Sprint" />
      </View>
      <View style={{ width: "50%" }}>
        <Text>Note types</Text>
        <View style={styles.noteSelect}>
          <Text>Treble clef</Text>
          <Switch value={sEnabled} onValueChange={() => SetS(!sEnabled)} />
        </View>
        <View style={styles.noteSelect}>
          <Text>Bass clef</Text>
          <Switch value={sEnabled} onValueChange={() => SetS(!sEnabled)} />
        </View>
        <View style={styles.noteSelect}>
          <Text>Sharps</Text>
          <Switch value={sEnabled} onValueChange={() => SetS(!sEnabled)} />
        </View>
        <View style={styles.noteSelect}>
          <Text>Naturals</Text>
          <Switch value={sEnabled} onValueChange={() => SetS(!sEnabled)} />
        </View>
        <View style={styles.noteSelect}>
          <Text>Flats</Text>
          <Switch value={sEnabled} onValueChange={() => SetS(!sEnabled)} />
        </View>
      </View>
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
  noteSelect: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

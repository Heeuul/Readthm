import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button
        title={"Nav"}
        onPress={() => {
          navigation.navigate("Nav");
        }}
      />
      <Button
        title={"Quiz"}
        onPress={() => {
          navigation.navigate("Quiz");
        }}
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

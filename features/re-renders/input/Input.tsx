import {useWarnReRender} from "@/helpers/useWarnReRender";
import {useState} from "react";
import {TextInput, View, StyleSheet, Text} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export const Input = () => {
  useWarnReRender("Input");

  const [value, setValue] = useState<string>("");

  return (
    <SafeAreaView
      edges={["bottom"]}
      style={styles.container}
    >
      <Text style={styles.label}>
        Write your name
      </Text>
        <TextInput
          value={value}
          onChangeText={setValue}
          style={styles.input}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
    gap: 8,
  },
  label: {
    fontSize: 16,
  },
  input: {
    height: 40,
    backgroundColor: "rgba(0, 122, 255, 0.2)",
    padding: 8,
    borderRadius: 8,
  }
})
import { Button, View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { useWarnReRender } from "@/helpers/useWarnReRender";
import { SafeAreaView } from "react-native-safe-area-context";

const Square = () => {
  useWarnReRender("Square");

  return <View style={styles.square} />;
};

export const Counter = () => {
  useWarnReRender("Counter");

  const [count, setCount] = useState<number>(0);

  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <Square />
      <View style={styles.countContainer}>
        <Text style={styles.count}>{count}</Text>
        <Button title={"Increment"} onPress={() => setCount(count + 1)} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
    gap: 8,
    flexDirection: "row",
  },
  square: {
    height: "100%",
    width: "30%",
    backgroundColor: "blue",
    borderRadius: 16,
  },
  countContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  count: {
    fontSize: 48,
    fontWeight: "bold",
  },
});

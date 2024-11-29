import { Button, View, Text, StyleSheet } from "react-native";
import { memo, useState } from "react";
import { useWarnReRender } from "@/helpers/useWarnReRender";
import { SafeAreaView } from "react-native-safe-area-context";

const Square = () => {
  useWarnReRender("Square");

  return <View className={"bg-blue-500 w-28 rounded-lg"} />;
};

export const Counter = () => {
  useWarnReRender("Counter");

  const [count, setCount] = useState<number>(0);

  return (
    <SafeAreaView
      edges={["bottom"]}
      className={"flex-1 bg-white flex-row p-4 gap-4"}
    >
      <Square />
      <View className={"flex-1 justify-center items-center"}>
        <Text className={"font-bold text-6xl"}>{count}</Text>
        <Button title={"Increment"} onPress={() => setCount(count + 1)} />
      </View>
    </SafeAreaView>
  );
};

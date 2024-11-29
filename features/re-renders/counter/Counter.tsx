import { Button, View, Text } from "react-native";
import { useState } from "react";
import { useWarnReRender } from "@/helpers/useWarnReRender";

export const Counter = () => {
  useWarnReRender();

  const [count, setCount] = useState<number>(0);

  return (
    <View>
      <View className={"h-8 w-8 bg-blue-50"} />
      <Text>{count}</Text>
      <Button title={"Increment"} onPress={() => setCount(count + 1)} />
    </View>
  );
};

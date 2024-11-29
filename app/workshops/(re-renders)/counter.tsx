import { useState } from "react";
import { Button, View, Text } from "react-native";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <View className={"flex-1 bg-white"}>
      <Text className={"font-bold text-xl"}>{count}</Text>
      <Button title={"Increment"} onPress={() => setCount(count + 1)} />
    </View>
  );
}

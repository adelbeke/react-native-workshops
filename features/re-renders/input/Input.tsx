import {useWarnReRender} from "@/helpers/useWarnReRender";
import {useState} from "react";
import {TextInput, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export const Input = () => {
  useWarnReRender("Input");

  const [value, setValue] = useState<string>("");

  return (
    <SafeAreaView
      edges={["bottom"]}
      className={"flex-1 bg-white flex-row p-4 gap-4"}
    >
      <View className={"bg-blue-200"}>
        <TextInput
          value={value}
          onChangeText={setValue}
        />
      </View>
    </SafeAreaView>
  )
}
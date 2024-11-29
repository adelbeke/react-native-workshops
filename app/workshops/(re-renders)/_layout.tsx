import { View } from "react-native";
import { Slot, Stack } from "expo-router";

export default function Layout() {
  return (
    <View className={"flex-1 bg-white p-4"}>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Re-renders",
          headerBackButtonDisplayMode: "minimal",
        }}
      />
      <Slot />
    </View>
  );
}

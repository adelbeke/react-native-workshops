import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View className={"flex-1 bg-white p-4"}>
      <Link href={"/re-renders"}>
        <Text className={"font-bold text-xl"}>1. Re renders</Text>
      </Link>
    </View>
  );
}

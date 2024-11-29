import { Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className={"flex-1 bg-white p-4"}>
      <Text className={"font-bold text-xl"}>1. Re renders</Text>
      <View className={"gap-3 mt-3"}>
        <Link href={"/workshops/re-render/counter"}>
          <Text className={"text-blue-500 text-lg"}>Counter</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}

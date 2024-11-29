import { Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className={"flex-1 bg-white p-4"}>
      <Link href={"/workshops/(re-renders)/list"}>
        <Text className={"font-bold text-xl"}>1. Re renders</Text>
      </Link>
    </SafeAreaView>
  );
}

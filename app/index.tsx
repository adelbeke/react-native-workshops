import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>1. Re renders</Text>
      <Text>
        You have to remove extra re-renders from the following exercises
      </Text>
      <View style={styles.links}>
        <Link href={"/workshops/re-render/counter"}>
          <Text style={styles.link}>Counter</Text>
        </Link>
        <Link href={"/workshops/re-render/input"}>
          <Text style={styles.link}>Input</Text>
        </Link>
        <Link href={"/workshops/re-render/context"}>
          <Text style={styles.link}>Context</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  links: {
    gap: 12,
  },
  link: {
    color: "rgb(0, 122, 255)",
    fontSize: 16,
  },
});

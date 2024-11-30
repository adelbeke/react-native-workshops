import {StyleSheet, Text, View, Image} from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/images/RNW.png')} resizeMode={"contain"} style={styles.logo}  />
      <Text style={styles.title}>Re renders</Text>
      <Text>
        You have to remove extra re-renders from the following exercises. Look
        at your console, every re-render will be logged with a console.warn.
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
        <Link href={"/workshops/re-render/memoization"}>
          <Text style={styles.link}>Memoization</Text>
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
    fontSize: 32,
    fontWeight: "bold",
  },
  links: {
    gap: 12,
    marginVertical: 16,
  },
  link: {
    color: "rgb(0, 122, 255)",
    fontSize: 16,
  },
  logo: {
    height: 50,
    alignSelf: 'center'
  }
});

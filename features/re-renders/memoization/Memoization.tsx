import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useWarnReRender } from "@/helpers/useWarnReRender";

const DisplayCandies = ({ candies }: { candies: number }) => {
  useWarnReRender("DisplayCandies");

  return <Text style={styles.candies}>🍬 {candies}</Text>;
};

const AddCandyButton = ({ onPress }: { onPress: () => void }) => {
  useWarnReRender("AddCandyButton");
  return (
    <View>
      <Button title={"Add Candy"} onPress={onPress} />
    </View>
  );
};

export const Memoization = () => {
  const [candies, setCandies] = useState<number>(0);

  const handleAddCandy = () => {
    setCandies(candies + 1);
  };

  return (
    <View style={styles.container}>
      <DisplayCandies candies={candies} />
      <AddCandyButton onPress={handleAddCandy} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  candies: {
    fontSize: 32,
    fontWeight: "bold",
    margin: 16,
    alignSelf: "center",
  },
});

import { create } from "zustand/react";
import { useWarnReRender } from "@/helpers/useWarnReRender";
import { Button, StyleSheet, Text, View } from "react-native";

// https://github.com/pmndrs/zustand

type CandiesStore = {
  candies: number;
  addCandy: () => void;
  eatCandy: () => void;
};

const useCandiesStore = create<CandiesStore>((set) => ({
  candies: 0,
  addCandy: () => set((state) => ({ candies: state.candies + 1 })),
  eatCandy: () => set((state) => ({ candies: state.candies - 1 })),
}));

const DisplayCandies = () => {
  useWarnReRender("DisplayCandies");

  const {candies} = useCandiesStore();

  return <Text style={styles.candies}>🍬 {candies}</Text>;
};

const AddCandyButton = () => {
  useWarnReRender("AddCandyButton");

  const {addCandy} = useCandiesStore();

  return (
      <Button title={"Add Candy"} onPress={addCandy} />
  );
};

const EatCandyButton = () => {
  useWarnReRender("EatCandyButton");

  const {eatCandy} = useCandiesStore();

  return (
      <Button title={"Eat Candy"} onPress={eatCandy} />
  );
};

export const Zustand = () => {
  return (
    <View style={styles.container}>
      <DisplayCandies />
      <AddCandyButton />
      <EatCandyButton />
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

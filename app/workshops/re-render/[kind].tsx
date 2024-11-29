import { Button, View, Text } from "react-native";
import {
  useFocusEffect,
  useLocalSearchParams,
  useNavigation,
} from "expo-router";
import { useCallback } from "react";

type Params = {
  kind: string;
};

export default function Page() {
  const navigation = useNavigation();
  const params = useLocalSearchParams<Params>();

  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        title: `${params.kind.at(0)?.toUpperCase()}${params.kind.slice(1)}`,
      });
    }, []),
  );

  return (
    <View className={"flex-1 bg-white"}>
      <Text className={"font-bold text-xl"}>{JSON.stringify(params)}</Text>
    </View>
  );
}

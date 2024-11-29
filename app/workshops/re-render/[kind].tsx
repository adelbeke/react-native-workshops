import { View } from "react-native";
import {
  useFocusEffect,
  useLocalSearchParams,
  useNavigation,
} from "expo-router";
import { useCallback } from "react";
import { RE_RENDERS_FEATURES } from "@/features/re-renders";

type Params = {
  kind: "counter";
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
    <View className={"flex-1 bg-white p-4"}>
      {RE_RENDERS_FEATURES[params.kind]()}
    </View>
  );
}

import "../global.css";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-2xl font-bold text-white">
        NativeWind Works!
      </Text>
    </View>
  );
}
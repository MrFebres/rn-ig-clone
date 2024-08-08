import { StyleSheet, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { Stack } from "expo-router";
import { useTheme } from "react-native-paper";

import IgLogo from "../components/IgLogo";
import Post from "../components/Post";

const DATA = [
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Third Item",
  },
  {
    title: "Fourth Item",
  },
  {
    title: "Fifth Item",
  },
  {
    title: "Sixth Item",
  },
  {
    title: "Seventh Item",
  },
];

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: theme.colors.surface },
          headerTitle: () => <IgLogo color={theme.colors.onSurface} />,
        }}
      />
      <View style={{ flex: 1, height: "100%", width: "100%" }}>
        <FlashList
          data={DATA}
          estimatedItemSize={564}
          renderItem={({ item }) => <Post />}
          style={{ flex: 1 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
});

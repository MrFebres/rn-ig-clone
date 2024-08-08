import { ActivityIndicator, useTheme } from "react-native-paper";
import { FlashList, type ListRenderItem } from "@shopify/flash-list";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import { useQuery } from "@tanstack/react-query";

import { apiFetch } from "../services/api";
import IgLogo from "../components/IgLogo";
import Post from "../components/Post";
import type { InstagramPost } from "../_types";

export default function HomeScreen() {
  const theme = useTheme();

  const { data, isLoading } = useQuery<InstagramPost[]>({
    queryFn: () => apiFetch("GET", "posts"),
    queryKey: ["posts"],
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  const renderItem: ListRenderItem<InstagramPost> | null | undefined = ({
    item,
  }) => <Post {...item} />;

  if (isLoading) return <ActivityIndicator />;

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
          data={data}
          estimatedItemSize={564}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
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

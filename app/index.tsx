import { FlashList, type ListRenderItem } from "@shopify/flash-list";
import { RefreshControl, StyleSheet, View } from "react-native";
import { Stack } from "expo-router";
import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTheme } from "react-native-paper";

import { apiFetch } from "../services/api";
import IgLogo from "../components/IgLogo";
import Post from "../components/Post";
import ShimmerHome from "../components/ShimmerHome";
import type { InstagramPost } from "../_types";

export default function HomeScreen() {
  const theme = useTheme();

  const { data, isLoading, isRefetching, refetch } = useQuery<InstagramPost[]>({
    queryFn: () => apiFetch("GET", "posts"),
    queryKey: ["posts"],
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const onRefresh = useCallback(() => {
    refetch();
  }, []);

  const renderItem: ListRenderItem<InstagramPost> | null | undefined = ({
    item,
  }) => <Post {...item} />;

  if (isLoading || isRefetching) return <ShimmerHome />;

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
          refreshControl={
            <RefreshControl onRefresh={onRefresh} refreshing={isRefetching} />
          }
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

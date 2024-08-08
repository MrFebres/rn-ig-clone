import { FlashList, type ListRenderItem } from "@shopify/flash-list";
import { RefreshControl, StyleSheet, View } from "react-native";
import { Stack } from "expo-router";
import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useTheme } from "react-native-paper";

import IgLogo from "./IgLogo";
import ShimmerPost from "./ShimmerPost";

const ShimmerHome = () => {
  const theme = useTheme();
  const queryClient = useQueryClient();

  const onRefresh = useCallback(() => {
    queryClient.refetchQueries({ queryKey: ["posts"] });
  }, []);

  const isRefreshing = Boolean(queryClient.isFetching({ queryKey: ["posts"] }));

  const mockData: number[] = Array.from(
    { length: 10 },
    (_, index) => index + 1
  );

  const renderMockItem: ListRenderItem<unknown> | null | undefined = () => (
    <ShimmerPost
      backgroundColor={theme.colors.onSurfaceVariant}
      foregroundColor={theme.colors.onSurface}
    />
  );

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
          data={mockData}
          estimatedItemSize={564}
          keyExtractor={(item) => String(item)}
          refreshControl={
            <RefreshControl onRefresh={onRefresh} refreshing={isRefreshing} />
          }
          renderItem={renderMockItem}
        />
      </View>
    </View>
  );
};

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

export default ShimmerHome;

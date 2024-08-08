import { FlashList, type ListRenderItem } from "@shopify/flash-list";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";

import IgLogo from "./IgLogo";
import ShimmerPost from "./ShimmerPost";

const ShimmerHome = () => {
  const theme = useTheme();

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

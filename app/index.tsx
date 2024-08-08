import { View, StyleSheet, useColorScheme } from "react-native";
import { Avatar, Card, IconButton, Text, useTheme } from "react-native-paper";

export default function HomeScreen() {
  const theme = useTheme();
  // const colorScheme = useColorScheme();

  // #dbdbdb lightBorderColor.
  // #262626 darkBorderColor.

  return (
    <View style={styles.container}>
      <Card
        elevation={0}
        style={{
          backgroundColor: theme.colors.surface,
          borderBottomColor: "#262626",
          borderBottomWidth: 1,
          borderRadius: 0,
          shadowColor: "transparent",
          width: "100%",
        }}
      >
        <Card.Title
          left={(props) => <Avatar.Icon {...props} icon="folder" />}
          right={(props) => (
            <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
          )}
          subtitle="Card Subtitle"
          title="Card Title"
        />
        <Card.Content style={{ width: "100%" }}>
          <Card.Cover
            resizeMode="contain"
            source={{ uri: "https://picsum.photos/700" }}
            style={{ height: 468, backgroundColor: "black" }}
          />
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

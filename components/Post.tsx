import { View, StyleSheet, useColorScheme } from "react-native";
import { Avatar, Card, IconButton, Text, useTheme } from "react-native-paper";

const Post = () => {
  const theme = useTheme();
  const colorScheme = useColorScheme();

  const lightBorderColor = "#dbdbdb";
  const darkBorderColor = "#262626";

  return (
    <Card
      elevation={0}
      style={[
        styles.cardStyle,
        {
          backgroundColor: theme.colors.surface,
          borderBottomColor:
            colorScheme === "dark" ? darkBorderColor : lightBorderColor,
        },
      ]}
    >
      <Card.Title
        left={(props) => <Avatar.Icon {...props} icon="folder" />}
        right={(props) => (
          <IconButton {...props} icon="dots-horizontal" onPress={() => {}} />
        )}
        subtitle="Card Subtitle"
        subtitleStyle={styles.subtitleStyle}
        title="Card Title"
        titleStyle={styles.titleStyle}
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
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    borderBottomWidth: 1,
    borderRadius: 0,
    shadowColor: "transparent",
    width: "100%",
  },
  titleStyle: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 18,
    margin: 0,
    textAlignVertical: "center",
  },
  subtitleStyle: {
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 16,
    margin: 0,
  },
});

export default Post;

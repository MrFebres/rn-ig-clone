import type { FC } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { Avatar, Card, IconButton, Text, useTheme } from "react-native-paper";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import type { InstagramPost } from "../_types";

type PostProps = InstagramPost;

const Post: FC<PostProps> = ({
  avatar,
  comments,
  createdAt,
  description,
  image,
  liked,
  likes,
  location,
  name,
  saved,
}) => {
  const colorScheme = useColorScheme();
  const theme = useTheme();

  const darkBorderColor = "#262626";
  const lightBorderColor = "#dbdbdb";
  const placeholderColor = "#f5f5f5";

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
        left={(props) => <Avatar.Image source={{ uri: avatar }} {...props} />}
        right={(props) => (
          <IconButton {...props} icon="dots-horizontal" onPress={() => {}} />
        )}
        subtitle="Card Subtitle"
        subtitleStyle={styles.subtitleStyle}
        title={name}
        titleStyle={styles.titleStyle}
      />
      <Card.Content style={{ width: "100%" }}>
        <Card.Cover
          resizeMode="contain"
          source={{ uri: image }}
          style={{ backgroundColor: "black", height: 468 }}
        />
        <View style={styles.mainButtonContainer}>
          <View style={styles.shareButtonContainer}>
            <TouchableOpacity style={styles.postButton}>
              <Feather name="heart" size={24} color={theme.colors.onSurface} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.postButton}>
              <FontAwesome5
                name="comment"
                size={24}
                color={theme.colors.onSurface}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.postButton}>
              <Feather name="send" size={24} color={theme.colors.onSurface} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.postButton}>
            <Feather name="bookmark" size={24} color={theme.colors.onSurface} />
          </TouchableOpacity>
        </View>
        <Text style={[styles.titleStyle, { marginBottom: 8 }]}>
          {likes} Me gusta
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[styles.titleStyle, { marginBottom: 8 }]}
        >
          {name}{" "}
          <Text style={[styles.titleStyle, { fontWeight: 600 }]}>
            {description}
          </Text>
        </Text>
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={[
            styles.titleStyle,
            { color: placeholderColor, fontWeight: 600 },
          ]}
        >
          Ver los {comments} comentarios
        </Text>
        <TextInput
          placeholder="Añade un comentario..."
          placeholderTextColor={placeholderColor}
        />
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
  mainButtonContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
    width: "100%",
  },
  postButton: { padding: 8 },
  shareButtonContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 4,
  },
  subtitleStyle: {
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 16,
    margin: 0,
  },
  titleStyle: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 18,
    margin: 0,
    textAlignVertical: "center",
  },
});

export default Post;

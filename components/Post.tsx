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
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import dateFormatter from "../utils/dateFormatter";
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

  const date = dateFormatter(createdAt.toString());
  const [quantity, timeUnit] = date.split(" ");

  const darkBorderColor = "#262626";
  const lightBorderColor = "#dbdbdb";
  const placeholderColor = "#f5f5f5";

  const bookmarkIcon = saved ? "bookmark" : "bookmark-o";
  const heartColor = liked ? theme.colors.error : theme.colors.onSurface;
  const heartIcon = liked ? "heart" : "heart-o";

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
        subtitle={location}
        subtitleStyle={styles.subtitleStyle}
        title={`${name} • ${quantity} ${timeUnit[0]}`}
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
              <FontAwesome color={heartColor} name={heartIcon} size={24} />
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
            <FontAwesome
              color={theme.colors.onSurface}
              name={bookmarkIcon}
              size={24}
            />
          </TouchableOpacity>
        </View>
        <Text style={[styles.titleStyle, { marginBottom: 8 }]}>
          {likes.toLocaleString("es")} Me gusta
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
          Ver los {comments.toLocaleString("es")} comentarios
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

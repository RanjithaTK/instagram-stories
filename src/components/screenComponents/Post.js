import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
//view:container to provide the details
//text:adding of text ,touchableopacity:changes on touching, textinput:to give the input text
import React, { useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

const Post = () => {
  //info regarding each post
  const postInfo = [
    {
      postTitle: "ranjitha",
      postPersonImage: require("../../storage/images/hp.jpg"),
      postImage: require("../../storage/images/hp.jpg"),
      likes: 765,
      isLiked: false,
    },
    {
      postTitle: "jishnu_tk",
      postPersonImage: require("../../storage/images/fruits.jpg"),
      postImage: require("../../storage/images/scenary.jpg"),
      likes: 200,
      isLiked: false,
    },
    {
      postTitle: "pmks",
      postPersonImage: require("../../storage/images/yellow.jpg"),
      postImage: require("../../storage/images/lion.jpg"),
      likes: 319,
      isLiked: false,
    },
  ];

  return (
    <View>
      {postInfo.map((data, index) => {
        const [like, setLike] = useState(data.isLiked);
        return (
          <View
            key={index}
            style={{
              paddingBottom: 10,
              borderBottomColor: "gray",
              // borderBottomWidth: 0.1,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 15,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={data.postPersonImage}
                  style={{ width: 40, height: 40, borderRadius: 100 }}
                />
                <View style={{ paddingLeft: 5 }}>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    {data.postTitle}
                  </Text>
                </View>
              </View>
              <Feather name="more-vertical" style={{ fontSize: 20 }} />
            </View>
            <View
              style={{
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={data.postImage}
                style={{ width: "100%", height: 400 }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 12,
                paddingVertical: 15,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={() => setLike(!like)}>
                  <AntDesign
                    name={like ? "heart" : "hearto"}
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: like ? "red" : "black",
                    }}
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Ionicons
                    name="ios-chatbubble-outline"
                    style={{ fontSize: 20, paddingRight: 10 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather name="navigation" style={{ fontSize: 20 }} />
                </TouchableOpacity>
              </View>
              <Feather name="bookmark" style={{ fontSize: 20 }} />
            </View>
            <View style={{ paddingHorizontal: 15 }}>
              <Text>
                Liked by {like ? "you and" : ""}
                {like ? data.likes + 1 : data.likes} others
              </Text>
              <Text
                style={{
                  fontWeight: "700",
                  fontSize: 14,
                  paddingVertical: 2,
                  fontFamily: "notoserif",
                }}
              >
                "It is the ability for creative perspective taking through a
                lens of love that brings out the best in the self and others."
              </Text>
              <Text style={{ opacity: 0.4, paddingVertical: 2 }}>
                View all comments
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={data.postPersonImage}
                    style={{
                      width: 25,
                      height: 25,
                      borderRadius: 100,
                      backgroundColor: "orange",
                      marginRight: 10,
                    }}
                  />
                  <TextInput
                    placeholder="Add a comment"
                    style={{ opacity: 0.5 }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Entypo
                    name="emoji-happy"
                    style={{
                      fontSize: 15,
                      color: "lightblue",
                      marginRight: 10,
                    }}
                  />
                  <Entypo
                    name="emoji-neutral"
                    style={{
                      fontSize: 15,
                      color: "lightgreen",
                      marginRight: 10,
                    }}
                  />
                  <Entypo
                    name="emoji-sad"
                    style={{
                      fontSize: 15,
                      color: "brown",
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Post;

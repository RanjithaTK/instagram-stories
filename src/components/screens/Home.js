import { View, Text, ScrollView, StatusBar } from "react-native";
//view:
//text:adding of text ,scrollview:scrolling of the content, statusbar:provides statusbar
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Stories from "../screenComponents/Stories";
import Post from "../screenComponents/Post";

const Home = () => {
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 15,
          alignItems: "center",
        }}
      >
        <FontAwesome name="plus-square-o" style={{ fontSize: 24 }} />
        <Text style={{ fontSize: 25, fontWeight: "500" }}>Instagram</Text>
        <Feather name="navigation" style={{ fontSize: 24 }} />
      </View>

      <ScrollView>
        <Stories />
        <Post />
      </ScrollView>
    </View>
  );
};

export default Home;

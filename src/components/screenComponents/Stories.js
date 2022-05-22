import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
//view:container to provide the details
//text:adding of text ,touchableopacity:changes on touching,scrollview:scrolling of the content
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const Stories = () => {
  const navigation = useNavigation();
  //informations in a story
  const storyInfo = [
    {
      id: 1,
      name: "your story",
      image: require("../../storage/images/scenary.jpg"),
    },
    {
      id: 2,
      name: "jishnu_tk",
      image: require("../../storage/images/food.jpg"),
    },
    {
      id: 3,
      name: "jaseela_jaleel",
      image: require("../../storage/images/lion.jpg"),
    },
    {
      id: 4,
      name: "aj_1998",
      image: require("../../storage/images/parrot.jpg"),
    },
    {
      id: 5,
      name: "pmks",
      image: require("../../storage/images/samoosa.jpg"),
    },
    {
      id: 6,
      name: "tkv",
      image: require("../../storage/images/squirrel-animals.jpg"),
    },
    {
      id: 7,
      name: "tkv1",
      image: require("../../storage/images/yellow.jpg"),
    },
    {
      id: 8,
      name: "tkj",
      image: require("../../storage/images/tomandjerry.jpg"),
    },
    {
      id: 9,
      name: "ranji",
      image: require("../../storage/images/hp.jpg"),
    },
  ];
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ paddingVertical: 20 }}
    >
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.push("Status", {
                name: data.name,
                image: data.image,
              })
            }
          >
            <View
              style={{
                flexDirection: "column",
                paddingHorizontal: 8,
                position: "relative",
              }}
            >
              {data.id == 1 ? (
                <View
                  style={{
                    position: "absolute",
                    bottom: 15,
                    right: 10,
                    zIndex: 1,
                  }}
                >
                  <Entypo
                    name="circle-with-plus"
                    style={{
                      fontSize: 20,
                      color: "#405de6",
                      backgroundColor: "white",
                      borderRadius: 100,
                    }}
                  />
                </View>
              ) : null}
              <View
                style={{
                  width: 68,
                  height: 68,
                  backgroundColor: "white",
                  borderWidth: 1.8,
                  borderRadius: 100,
                  borderColor: "#c13584",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={data.image}
                  style={{
                    resizeMode: "cover",
                    width: "92%",
                    height: "92%",
                    borderRadius: 100,
                    backgroundColor: "orange",
                  }}
                />
              </View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 10,
                  opacity: data.id == 0 ? 1 : 0.5,
                }}
              >
                {data.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;

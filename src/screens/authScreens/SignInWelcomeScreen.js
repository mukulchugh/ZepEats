import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
} from "react-native";
import Header from "../../components/Header";
import { colors, parameters, title, text1 } from "../../global/styles";
import { Icon, Button, SocialIcon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import Swiper from "react-native-swiper";

function SignInWelcomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <View
        style={{
          flex: 3,
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <Text
          style={{ fontSize: 26, color: colors.button, fontWeight: "bold" }}
        >
          DISCOVER RESTAURANTS{" "}
        </Text>

        <Text
          style={{ fontSize: 26, color: colors.buttons, fontWeight: "bold" }}
        >
          IN YOUR AREA
        </Text>
      </View>

      <View style={{ flex: 4, justifyContent: "center" }}>
        <Swiper autoplay={true}>
          <View>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              }}
              style={{ height: "100%", width: "100%" }}
            />
          </View>

          <View>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?cs=srgb&dl=pexels-daria-shevtsova-704569.jpg&fm=jpg",
              }}
              style={{ height: "100%", width: "100%" }}
            />
          </View>
          <Image />
          <View>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              }}
              style={{ height: "100%", width: "100%" }}
            />
          </View>
          <View>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              }}
              style={{ height: "100%", width: "100%" }}
            />
          </View>
        </Swiper>
      </View>
      <View
        style={{
          flex: 4,
          justifyContent: "flex-end",
          marginHorizontal: 20,
          marginVertical: 20,
        }}
      >
        <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
          <Button
            title="Sign In"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => {
              navigation.navigate("SignInScreen");
            }}
          />
        </View>
        <View style={{ marginHorizontal: 10, marginBottom: 30 }}>
          <Button
            title="Create an Account"
            buttonStyle={{
              ...parameters.styledButton,
              borderColor: "black",
              backgroundColor: "white",
            }}
            titleStyle={{ ...parameters.buttonTitle, color: "black" }}
          />
        </View>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   slide1: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#9DD6EB",
//   },

//   slide2: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#97CAES",
//   },

//   slide3: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#92BBD9",
//   },
// });

export default SignInWelcomeScreen;

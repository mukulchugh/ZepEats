import React, { useState, useRef } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
} from "react-native";
import Header from "../../components/Header";
import { colors, parameters, title, text1 } from "../../global/styles";
import { Icon, Button, SocialIcon } from "react-native-elements";
import * as Animatable from "react-native-animatable";

function SignInScreen({ navigation }) {
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');

  const [input2Focussed, setInput2Focussed] = useState(false);
  const input1 = useRef();
  const input2 = useRef();

  return (
    <ScrollView style={styles.container}>
      <Header title="My Account" type="arrow-left" navigation={navigation} />

      <View style={{ marginLeft: 20, marginTop: 10 }}>
        <Text style={title}>Sign In</Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 15 }}>
        <Text style={text1}>Please Enter the email and password</Text>
        <Text style={text1}>registered with your account</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <View>
          <TextInput
            style={styles.TextInput1}
            placeholder="Email"
            ref={input1}
          />
        </View>
        <View style={styles.TextInput2}>
          <Animatable.View
            animation={input2Focussed ? "" : "fadeInLeft"}
            duration={800}
          >
            <Icon
              name="lock"
              iconStyle={{ color: "grey" }}
              type="material"
              style={{}}
            />
          </Animatable.View>
          <TextInput
            secureTextEntry={true}
            style={{ width: "80%" }}
            placeholder="Password"
            ref={input1}
            onFocus={() => {
              setInput2Focussed(false);
            }}
            onBlur={() => {
              setInput2Focussed(true);
            }}
          />
          <Animatable.View
            animation={input2Focussed ? "" : "fadeInLeft"}
            duration={800}
          >
            <Icon
              name="visibility-off"
              iconStyle={{ color: "grey" }}
              style={{ marginRight: 10 }}
              type="material"
            />
          </Animatable.View>
        </View>
      </View>

      <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
        <Button
          title="Sign In"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
        />
      </View>

      <View style={{ alignItems: "center" }}>
        <Text style={{ ...text1, textDecorationLine: "underline" }}>
          Forgot Password?
        </Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 20, marginBottom: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>OR</Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <SocialIcon
          title="Connect with Facebook"
          type="facebook"
          button
          style={styles.SocialIcon}
          onPress={() => {}}
        />
        <SocialIcon
          title="Connect with Google"
          type="google"
          button
          style={styles.SocialIcon}
          onPress={() => {}}
        />
        <SocialIcon
          title="Connect with Apple"
          type="apple"
          button
          style={{ ...styles.SocialIcon, backgroundColor: "black" }}
          onPress={() => {}}
        />
      </View>
      <View style={{ marginLeft: 20, marginTop: 20, flexDirection: "row" }}>
        <Text
          style={{
            ...text1,
            fontWeight: "bold",
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          New to ZepEats?
        </Text>
        <Button
          title="Sign UP"
          buttonStyle={{
            backgroundColor: "#5d00f2",
            alignContent: "center",
            justifyContent: "center",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#5d00f2",
            height: 40,
            paddingHorizontal: 20,
            width: "80%",
            marginLeft: 22,
          }}
          titleStyle={{
            color: "white",
            fontsize: 10,
            fontWeight: "bold",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TextInput1: {
    borderWidth: 0,
    borderColor: "#86939e",
    backgroundColor: "#e6e6e6",

    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    padding: 22,
  },
  TextInput2: {
    borderWidth: 0,
    backgroundColor: "#e6e6e6",
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: "#86939e",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    padding: 20,
  },
  SocialIcon: {
    borderRadius: 12,
    width: "90%",
    marginTop: 2,
    height: 50,
  },
});

export default SignInScreen;

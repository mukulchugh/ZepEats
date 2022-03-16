import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./authNavigators";

function RootNavigator() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

export default RootNavigator;

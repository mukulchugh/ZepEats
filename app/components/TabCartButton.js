import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../configs/colors";
import { Ionicons } from "@expo/vector-icons";

const TabCartButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Ionicons name="md-cart" color={colors.white} size={27} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 60,
    width: 60,
    borderRadius: 30,
    bottom: 30,
    borderColor: colors.white,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TabCartButton;

import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Icon from "./assets/fitOn.png";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={Icon} style={styles.image}></Image>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 450,
    height: "80%",
    resizeMode: "cover",
  },
});

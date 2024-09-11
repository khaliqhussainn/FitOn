import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Icon from "./assets/workout.jpg";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={Icon} style={styles.image}></Image>
        <Text
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: "bold",
            textTransform: "uppercase",
            position: "absolute",
            bottom: 100,
            backgroundColor: "black",
            width: "100%",
            textAlign: "center",
          }}
        >
          Home Workout
        </Text>
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
    width: 500,
    height: "100%",
    resizeMode: "cover",
  },
});

import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const RestScreen = () => {
  const navigation = useNavigation();
  let timer = 0;
  const [timeLeft, setTimeLeft] = useState(3);

  const startTime = () => {
    setTimeout(() => {
      if (timeLeft <= 0) {
        navigation.goBack();
        clearTimeout(timer);
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };
  useEffect(() => {
    startTime();
    //clean up
    return () => clearTimeout(timer);
  });
  return (
    <SafeAreaView>
      <Image
        // resizeMode="contain"
        source={{
          uri: "https://cdn3.mage.space/temp/30d/creations/21I68e7ZDvUa4ZmxfXrglLS5ZkU2/image/a6a33944209dc7face3f4c089cf370c3.jpg",
        }}
        style={{ width: "100%", height: 420 }}
      />

      <Text
        style={{
          fontSize: 30,
          fontWeight: "900",
          marginTop: 50,
          textAlign: "center",
        }}
      >
        TAKE A BREAK!
      </Text>

      <Text
        style={{
          fontSize: 40,
          fontWeight: "800",
          marginTop: 50,
          textAlign: "center",
        }}
      >
        {timeLeft}
      </Text>
    </SafeAreaView>
  );
};

export default RestScreen;

const styles = StyleSheet.create({});
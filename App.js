import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";
import { FitnessContext } from "./Context";
import { useEffect } from "react";
import SplashScreen from "./SplashScreen";
import { useState } from "react";

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);
  });
  return (
    <>
    {
      isShowSplash ? ( <SplashScreen /> ) :
      (
        <FitnessContext>
          <StackNavigator />
        </FitnessContext>
      )
    }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

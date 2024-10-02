import { StyleSheet, Text, Image, Pressable } from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FitnessItems } from "../Context";
import { useContext } from "react";

const FitScreen = () => {
  const route = useRoute();
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();
  const excersise = route.params.excersises;
  const current = excersise[index];

  const {
    completed,
    setCompleted,
    minutes,
    setMinutes,
    calories,
    setCalories,
    setWorkout,
    workout,
  } = useContext(FitnessItems);
  console.log(completed, "completed excersise");

  return (
    <SafeAreaView>
      <Image
        style={{ width: "100%", height: 370}}
        source={{ uri: current.image }}
      />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
        }}
      >
        {current.name}
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 38,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
        }}
      >
        x{current.sets}
      </Text>

      {index + 1 >= excersise.length ? (
        <Pressable
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            padding: 10,
            backgroundColor: "#cd853f",
            borderRadius: 20,
            width: 150,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
              textAlign: "center",
            }}
          >
            DONE
          </Text>
        </Pressable>
      ) : (
        <Pressable
            onPress={() => {
              navigation.navigate("Rest");
              setCompleted([...completed, current.name]);
              setWorkout(workout + 1);
              setMinutes(minutes + 2.5);
              setCalories(calories + 6.3);
              setTimeout(() => {
                setIndex(index + 1);
              }, 2000);
            }}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            padding: 10,
            backgroundColor: "#1a5355",
            borderRadius: 20,
            width: 150,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
              textAlign: "center",
            }}
          >
            DONE
          </Text>
        </Pressable>
      )}

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: 50,
        }}
      >
        <Pressable
          disabled={index === 0}
          onPress={() => {
            navigation.navigate("Rest");

            setTimeout(() => {
              setIndex(index - 1);
            }, 2000);
          }}
          style={{
            backgroundColor: "#25777a",
            padding: 10,
            borderRadius: 20,
            marginHorizontal: 20,
            width: 100,
          }}
        >
          <Text
            style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            Prev
          </Text>
        </Pressable>

        {index + 1 >= excersise.length ? (
          <Pressable
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={{
              backgroundColor: "#7a2825",
              padding: 10,
              borderRadius: 20,
              marginHorizontal: 20,
              width: 100,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              SKIP
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              navigation.navigate("Rest");

              setTimeout(() => {
                setIndex(index + 1);
              }, 2000);
            }}
            style={{
              backgroundColor: "#7a2825",
              padding: 10,
              borderRadius: 20,
              marginHorizontal: 20,
              width: 100,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              SKIP
            </Text>
          </Pressable>
        )}
      </Pressable>
    </SafeAreaView>
  );
};

export default FitScreen;

const styles = StyleSheet.create({});

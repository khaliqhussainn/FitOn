import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { useContext } from "react";
import { FitnessItems } from "../Context";
import { useRoute, useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

const WorkoutScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { completed, setCompleted } = useContext(FitnessItems);
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "#fff", marginTop: 50 }}
      >
        <Image
          source={{ uri: route.params.image }}
          style={{ width: "100%", height: 170 }}
        />
        <Ionicons
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", top: 50, left: 20 }}
          name="arrow-back"
          size={24}
          color="white"
        />

        {route.params.excersises.map((item, index) => (
          <Pressable
            key={index}
            style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: 90, height: 90 }}
            />

            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 17, width: 170 }}>
                {item.name}
              </Text>
              <Text style={{ color: "grey", marginTop: 5, fontSize: 18 }}>
                x{item.sets}
              </Text>
            </View>
            {completed.includes(item.name) ? (
              <AntDesign
                style={{ marginLeft: 40 }}
                name="checkcircle"
                size={24}
                color="green"
              />
            ) : (
              <AntDesign
                style={{ marginLeft: 40 }}
                name="checkcircle"
                size={24}
                color="red"
              />
            )}
          </Pressable>
        ))}
      </ScrollView>
      <Pressable
        onPress={() => {
          navigation.navigate("Fit", {
            excersises: route.params.excersises,
          });
          setCompleted([]);
        }}
        style={{
          backgroundColor: "#cd853f",
          marginVertical: 20,
          padding: 10,
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: 6,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "600",
            fontSize: 18,
          }}
        >
          START
        </Text>
      </Pressable>
    </>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({});

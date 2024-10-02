import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import FitnessCards from "../components/FitnessCards";
import { FitnessItems } from "../Context";
import { useContext } from "react";

const HomeScreen = () => {
  const { minutes, calories, workout } = useContext(FitnessItems);

  return (
    <View
      style={{
        marginTop: 50,
        backgroundColor: "#000",
        flex: 1,
        paddingBottom: 50,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false} style={{ flexGrow: 1 , paddingBottom: 50 }}>
        <View
          style={{
            backgroundColor: "#1a5355",
            padding: 10,
            height: "20%",
            width: "100%",
          }}
        >
          <View>
            <Text
              style={{
                color: "white",
                fontSize: 28,
                fontWeight: "bold",
                textTransform: "uppercase",
                textAlign: "center",
                marginTop: 50,
              }}
            >
              Home Workout
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <View>
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  {workout}
                </Text>
                <Text
                  style={{
                    color: "#d0d0d0",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 17,
                    marginTop: 5,
                  }}
                >
                  WORKOUT
                </Text>
              </View>

              <View>
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  {calories}
                </Text>
                <Text
                  style={{
                    color: "#d0d0d0",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 18,
                    marginTop: 5,
                  }}
                >
                  KCAL
                </Text>
              </View>

              <View>
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  {minutes}
                </Text>
                <Text
                  style={{
                    color: "#d0d0d0",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 17,
                    marginTop: 5,
                  }}
                >
                  MINS
                </Text>
              </View>
            </View>

            {/* <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                style={{
                  width: "90%",
                  height: 120,
                  marginTop: 20,
                  borderRadius: 7,
                }}
                source={{
                  uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
                }}
              />
            </View> */}
            <FitnessCards />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

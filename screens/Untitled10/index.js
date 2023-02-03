import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled10 = ({
  navigation
}) => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      flex: 1,
      flexDirection: "column",
      height: "100%",
      padding: 10,
      backgroundColor: "#f0f0f1",
      justifyContent: "center",
      alignItems: "center"
    }}>
        
          <View style={styles.column1}><Text style={styles.QFLzkePL}>Amazing App</Text></View>
          <View style={styles.column2}><Pressable onPress={() => navigation.navigate("Untitled2", {
          "secret": "This is my secret",
          "info": "This is my info"
        })}><View style={styles.goqPwGtU}><Text style={styles.RlRdgfwR}>Continue</Text></View></Pressable></View>
          
        
        </ScrollView>
      </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  column1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  column2: {
    flex: 1,
    justifyContent: "center"
  },
  column3: {
    flex: 1
  },
  QFLzkePL: {
    width: 279,
    height: 50,
    lineHeight: 30,
    fontSize: 30,
    borderRadius: 0,
    color: "#14e3a9",
    fontWeight: "700",
    textAlign: "center"
  },
  goqPwGtU: {
    height: 80,
    width: 180,
    backgroundColor: "#72bea9",
    borderRadius: 20,
    color: "#777777",
    borderWidth: 0
  },
  RlRdgfwR: {
    width: 100,
    height: 23,
    lineHeight: 20,
    fontSize: 20,
    borderRadius: 0,
    position: "absolute",
    top: 28.5,
    left: 40,
    color: "#ffffff",
    fontWeight: "700",
    textAlign: "center"
  }
});
export default Untitled10;
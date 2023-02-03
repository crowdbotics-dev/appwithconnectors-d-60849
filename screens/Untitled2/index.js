import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = ({
  route
}) => {
  const {
    info = "default",
    secret = "default value"
  } = route.params || {};
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Text style={styles.VRZEGICc}>{secret}</Text></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  VRZEGICc: {
    width: 231,
    height: 50,
    lineHeight: 20,
    fontSize: 20,
    borderRadius: 0,
    position: "absolute",
    top: 262,
    left: 63.5
  }
});
export default Untitled2;
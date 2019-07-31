import React from "react";
import welcomeImage from '../Assets/Images/developersd.png';
import { View, Text, StyleSheet, Image } from "react-native";

const Welcome = () => {
  return (
    <View style={styles.welcomeContainer}>
      <Image
      source={ welcomeImage }
      />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textStyle: {
      marginTop: 40
  }
});

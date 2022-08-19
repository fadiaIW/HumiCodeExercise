import React, { Component } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { COLORS } from "./Colors";


const renderLoader = () => {
  return (
    <View style={styles.background} >
        <ActivityIndicator animating={true} size='large' color={COLORS.pink} />
    </View>
  );
};



const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:COLORS.white,
    opacity: 1,
    zIndex: 10,
  },
});

export default renderLoader ;
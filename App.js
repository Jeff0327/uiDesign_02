import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import LottieView from "lottie-react-native";
import React, { useState, useRef, useEffect } from "react";
export default function App() {
  const animation = useRef(null);
  const [btnClick, setBtnClick] = useState(false);

  const onClick = () => {
    if (!btnClick) {
      setBtnClick(true);
      animation.current?.reset();
      animation.current?.play();
    }
  };
  return (
    <View style={styles.container}>
      {btnClick ? (
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 200,
            height: 200,
            backgroundColor: "#eee",
          }}
          source={require("./assets/lf20_27klftwl.json")}
        />
      ) : null}
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => {
            onClick();
          }}>
          <Image style={{ margin: 10, width: 50, height: 50 }} source={require("./public/images/click.png")} />
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

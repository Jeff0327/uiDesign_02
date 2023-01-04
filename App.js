import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Image, Dimensions } from "react-native";
import LottieView from "lottie-react-native";
import React, { useState, useRef, useEffect } from "react";

const window_Width = Dimensions.get("window").width / 360;
const window_Height = Dimensions.get("window").height / 640;
export default function App() {
  const animation = useRef(null);
  const [btnClick, setBtnClick] = useState(false);
  const [onAnimation, setOnAnimation] = useState(false);
  const onClick = () => {
    if (!btnClick) {
      setBtnClick(true);
      animation.current?.reset();
      animation.current?.play();
    }
  };
  const onStop = () => {
    if (btnClick) {
      setBtnClick(false);
      animation.current?.reset();
    }
  };
  return (
    <View style={styles.container}>
      {btnClick ? (
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: window_Width * 360,
            height: window_Height * 640,
            backgroundColor: "white",
          }}
          source={require("./assets/lf20_27klftwl.json")}
        />
      ) : null}
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.Play_Btn}
          onPress={() => {
            onClick();
          }}>
          <Image style={styles.start_Image} source={require("./public/images/click.png")} />
        </Pressable>
        <Pressable
          style={styles.Play_Btn}
          onPress={() => {
            onStop();
          }}>
          <Image style={styles.stop_Image} source={require("./public/images/stop.png")} />
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
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    flexDirection: "row",
    bottom: window_Height * 50,
  },
  Play_Btn: {
    margin: 20,
  },
  start_Image: {
    marginTop: window_Height * 200,
    width: window_Width * 50,
    height: window_Width * 50,
  },
  stop_Image: {
    marginTop: window_Height * 200,
    width: window_Width * 50,
    height: window_Width * 50,
  },
});

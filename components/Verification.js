import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";

export default class Verification extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("ScreenFour")}
          >
            <Image
              source={require("../assets/redarrowback.png")}
              style={styles.redarrow}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.introduction}>
          <Text style={styles.heading}>Confirm Your Number</Text>
          <Text style={styles.subheading}>
            We just sent a 6 digit code via SMS to{"\n"} +256 723 232 232.
            <Text style={styles.subheading1}>Not my number?</Text>
          </Text>
        </View>
        <View style={styles.code}>
          <SmoothPinCodeInput
            cellStyle={{
              borderBottomWidth: 2,
              borderColor: "gray",
            }}
            cellStyleFocused={{
              borderColor: "black",
            }}
            value="0000"
            onTextChange={(value) => this.setState({ value })}
          />
          <View>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate("ScreenSix")}
            >
              <Image
                source={require("../assets/arrow-circle.png")}
                style={styles.blackarrow}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.coderesend}>Resend Code in 0:14</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height: hp("100%"),
    width: wp("100%"),
  },
  button: {
    marginLeft: 10,
    marginTop: 30,
  },
  redarrow: {
    width: 60,
    height: 60,
  },
  introduction: {
    marginLeft: 30,
  },
  heading: {
    fontWeight: "700",
    fontSize: 35,
  },
  subheading: {
    fontWeight: "normal",
    fontSize: 20,
    color: "grey",
  },
  subheading1: {
    fontWeight: "normal",
    fontSize: 20,
    color: "red",
  },
  coderesend: {
    fontWeight: "normal",
    fontSize: 20,
    color: "grey",
    marginTop: 30,
    marginLeft: 30,
  },
  code: {
    marginLeft: 60,
  },
  buttons: {
    marginLeft: 70,
    marginTop: 70,
  },
  blackarrow: {
    width: 60,
    height: 60,
  },
});

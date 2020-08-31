import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default class Profile extends Component {
  render() {
    return (
      <KeyboardAwareScrollView
        behavior="padding"
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={false}
        enableOnAndroid={true}
      >
        <View style={styles.container}>
          <View style={styles.introduction}>
            <Text style={styles.heading}>Introduce Yourself</Text>
            <Text style={styles.subheading}>
              This is how you'll show up to others.
            </Text>
          </View>
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <Image
                style={styles.avatar}
                source={{
                  uri: "https://bootdey.com/img/Content/avatar/avatar6.png",
                }}
              />
            </View>
          </View>
          <View>
            <Text style={styles.naming}>Full Name</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="John Deo"
              // placeholderTextColor="gray"
              autoCapitalize="none"
            />
            <View style={styles.lineStyle} />
          </View>
          <View>
            <Text style={styles.usernaming}>User Name</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="john_doe"
              autoCapitalize="none"
            />
            <View style={styles.lineStyle} />
          </View>
          <View>
            <Text style={styles.bionaming}>Bio</Text>
            <TextInput
              style={styles.inputbio}
              underlineColorAndroid="transparent"
              placeholder="I am a loving dark skin..."
              autoCapitalize="none"
            />
            <View style={styles.lineStyle} />
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("ScreenTwo")}
            >
              <Image
                source={require("../assets/arrow-circle.png")}
                style={styles.redarrow}
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height: hp("100%"),
    width: wp("100%"),
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 200,
  },
  introduction: {
    marginTop: 100,
    marginRight: 100,
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
  input: {
    marginTop: -32,
    marginLeft: 140,
    height: 40,
    width: 180,
    fontSize: 20,
    fontWeight: "500",
  },
  inputbio: {
    marginTop: -32,
    marginLeft: 140,
    height: 40,
    width: 180,
    fontSize: 20,
    fontWeight: "500",
  },
  naming: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: -190,
    marginLeft: 10,
  },
  usernaming: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: -130,
    marginLeft: 10,
  },
  bionaming: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: -70,
    marginLeft: 10,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "black",
    margin: 5,
  },
  button: {
    marginLeft: 140,
    marginTop: 30,
  },
  redarrow: {
    width: 60,
    height: 60,
  },
});

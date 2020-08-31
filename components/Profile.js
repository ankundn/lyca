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

export default class Profile extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
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
          <View style={styles.body}>
            <Text style={styles.naming}>
              Full Name <Text style={styles.namingone}> Elizabeth Kiiza</Text>
            </Text>
            <View style={styles.lineStyle} />
            <Text style={styles.usernaming}>
              User Name <Text style={styles.usernamingone}>eliz_beth</Text>
            </Text>
            <View style={styles.lineStyle} />
            <Text style={styles.bio}>
              Bio{" "}
              <Text style={styles.bioone}>
                Elizabeth is a Ugandan from Kla born 17 Nov 1998.{"\n"}Sometimes
                caled the Virgin Queen, Glorianaor Good Queen Bess, Elizabeth is
                loving, caring and likes fun.
              </Text>
            </Text>
            <View style={styles.lineStyle} />
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("ScreenThree")}
        >
          <Image
            source={require("../assets/redarrow.png")}
            style={styles.redarrow}
          />
        </TouchableOpacity>
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
  body: {
    alignContent: "center",
    marginTop: -150,
  },
  naming: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 10,
  },
  namingone: {
    color: "black",
    fontSize: 25,
    fontWeight: "200",
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "black",
    margin: 10,
  },
  usernaming: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 10,
  },
  usernamingone: {
    color: "black",
    fontSize: 25,
    fontWeight: "200",
  },
  bio: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 10,
  },
  bioone: {
    color: "black",
    fontSize: 25,
    fontWeight: "200",
  },
  button: {
    backgroundColor: "#859a9b",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
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

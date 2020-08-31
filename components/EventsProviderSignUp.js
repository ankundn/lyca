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
import ToggleSwitch from "rn-toggle-switch";
import PhoneInput from "react-native-phone-input";

export default class EventsProviderSignUp extends Component {
  constructor() {
    super();

    this.state = {
      valid: "",
      type: "",
      value: "",
    };

    this.updateInfo = this.updateInfo.bind(this);
    this.renderInfo = this.renderInfo.bind(this);
  }

  updateInfo() {
    this.setState({
      valid: this.phone.isValidNumber(),
      type: this.phone.getNumberType(),
      value: this.phone.getValue(),
    });
  }

  renderInfo() {
    if (this.state.value) {
      return (
        <View style={styles.info}>
          <Text>
            Is Valid:{" "}
            <Text style={{ fontWeight: "bold" }}>
              {this.state.valid.toString()}
            </Text>
          </Text>
          <Text>
            Type: <Text style={{ fontWeight: "bold" }}>{this.state.type}</Text>
          </Text>
          <Text>
            Value:{" "}
            <Text style={{ fontWeight: "bold" }}>{this.state.value}</Text>
          </Text>
        </View>
      );
    }
  }
  render() {
    return (
      <KeyboardAwareScrollView
        behavior="padding"
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={false}
        enableOnAndroid={true}
      >
        <View>
          <Image
            style={styles.lyxaimage}
            source={require("../assets/lyxaheading.jpg")}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.introduction}>
            <Text style={styles.heading}>Welcome To Lyxa!</Text>
            <Text style={styles.subheading}>
              I'm here to organize lit parties
            </Text>
          </View>
          <View style={styles.toggle}>
            <ToggleSwitch
              text={{
                on: "User",
                off: "Event's Provider",
                activeTextColor: "black",
                inactiveTextColor: "black",
              }}
              textStyle={{ fontWeight: "400" }}
              color={{
                indicator: "white",
                active: "grey",
                inactive: "#ffffff",
                activeBorder: "white",
                inactiveBorder: "white",
              }}
              active={true}
              disabled={false}
              width={260}
              radius={20}
              onValueChange={(val) => {
                /* your handler function... */
              }}
            />
          </View>
          <View>
            <Text style={styles.phonenaming}>Phone</Text>
            <View style={styles.countryflag}>
              <PhoneInput
                ref={(ref) => {
                  this.phone = ref;
                }}
                initialCountry="ug"
                value="Enter mobile number"
              />

              <TouchableOpacity
                onPress={this.updateInfo}
                style={styles.button}
              ></TouchableOpacity>

              {this.renderInfo()}
            </View>
            <View style={styles.lineStyle} />
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("ScreenFive")}
            >
              <Image
                source={require("../assets/redarrow.png")}
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
  lyxaimage: {
    height: 200,
    width: 375,
  },
  introduction: {
    marginTop: 50,
  },
  heading: {
    fontWeight: "700",
    fontSize: 35,
    marginLeft: 20,
  },
  subheading: {
    fontWeight: "normal",
    fontSize: 20,
    color: "grey",
    marginLeft: 20,
  },
  toggle: {
    marginTop: 20,
    marginLeft: 20,
  },
  phonenaming: {
    color: "black",
    fontSize: 25,
    fontWeight: "400",
    marginTop: 30,
    marginLeft: 10,
  },
  input: {
    marginTop: -29,
    marginLeft: 120,
    height: 40,
    width: 180,
    fontSize: 20,
    fontWeight: "600",
  },
  lineStyle: {
    borderWidth: 0.3,
    borderColor: "black",
    margin: -15,
  },
  button: {
    marginLeft: 140,
    marginTop: 30,
  },
  redarrow: {
    width: 60,
    height: 60,
  },
  countryflag: {
    marginLeft: 80,
    marginTop: -20,
  },
});

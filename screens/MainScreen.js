import { View } from "react-native";
import * as React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CreateProfile from "../components/CreateProfile";
import Profile from "../components/Profile";
import UserSignUp from "../components/UserSignUp";
import EventsProviderSignUp from "../components/EventsProviderSignUp";
import Verification from "../components/Verification";

export class ScreenOne extends React.Component {
  static navigationOptions = {
    title: "ScreenOne",
    headerStyle: {
      backgroundColor: "#7b68ee",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
    headerShown: false,
  };

  render() {
    return (
      <View>
        <CreateProfile navigation={this.props.navigation} />
      </View>
    );
  }
}
export class ScreenTwo extends React.Component {
  static navigationOptions = {
    title: "ScreenTwo",
    headerStyle: {
      backgroundColor: "#7b68ee",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
    headerShown: false,
  };

  render() {
    return <Profile navigation={this.props.navigation} />;
  }
}

export class ScreenThree extends React.Component {
  static navigationOptions = {
    title: "ScreenThree",
    headerStyle: {
      backgroundColor: "#7b68ee",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
    headerShown: false,
  };

  render() {
    return <UserSignUp navigation={this.props.navigation} />;
  }
}
export class ScreenFour extends React.Component {
  static navigationOptions = {
    title: "ScreenFour",
    headerStyle: {
      backgroundColor: "#7b68ee",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
    headerShown: false,
  };

  render() {
    return <EventsProviderSignUp navigation={this.props.navigation} />;
  }
}

export class ScreenFive extends React.Component {
  static navigationOptions = {
    title: "ScreenFive",
    headerStyle: {
      backgroundColor: "#7b68ee",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
    headerShown: false,
  };

  render() {
    return <Verification navigation={this.props.navigation} />;
  }
}

const ScreenStack = createStackNavigator({
  ScreenOne: ScreenOne,
  ScreenTwo: ScreenTwo,
  ScreenThree: ScreenThree,
  ScreenFour: ScreenFour,
  ScreenFive: ScreenFive,
});

const ScreenContainer = createAppContainer(ScreenStack);
export default ScreenContainer;

import { ScrollView, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";

import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  }
});

const AppBar = () => {

  return <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab to="/">Repositories</AppBarTab>
      <AppBarTab to="/sign-in">Sign in</AppBarTab>
    </ScrollView>
  </View>;
};

export default AppBar;

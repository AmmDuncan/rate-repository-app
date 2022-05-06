import { StyleSheet} from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  tabText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  tabContainer: {
    display: 'flex',
    paddingHorizontal: 12,
    paddingVertical: 16,
  }
});

const AppBarTab = (props) => {
  return (<Link {...props} style={styles.tabContainer}>
    <Text style={styles.tabText}>{props.children}</Text>
  </Link>)
}

export default AppBarTab;

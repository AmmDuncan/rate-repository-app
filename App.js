import { StyleSheet, Text, View } from 'react-native';

import Main from './src/components/Main';
import AppBar from './src/components/AppBar';
import theme from './src/theme';
import { NativeRouter } from "react-router-native";

export default function App() {
  return (
    <View style={styles.container}>
      <NativeRouter>
      <Main />
      </NativeRouter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: theme.colors.background
  },
});

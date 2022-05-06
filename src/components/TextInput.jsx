import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderRadius: 4
  }
});

const TextInput = ({ style, error, first, ...props }) => {
  const textInputStyle = [style, styles.input, {
    marginTop: first ? 0 : 12,
    borderColor: error ? "#e34d4d" : "#aaa"
  }];

  return <NativeTextInput
    style={textInputStyle}
    placeholderTextColor="#888"{...props}
  />;
};

export default TextInput;

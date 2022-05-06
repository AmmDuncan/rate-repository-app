import { View, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import { Pressable } from "react-native";
import * as yup from "yup";

const loginSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
});

const SignIn = () => {
  const onSubmit = (values, bag) => {
    console.log(values);
    bag.resetForm();
  };

  return (<View>
    <Formik initialValues={{ username: "", password: "" }} onSubmit={onSubmit} validationSchema={loginSchema}>
      {(formikProps) => (<SignInForm {...formikProps} />)}
    </Formik>
  </View>);
};

function SignInForm(props) {
  const { handleSubmit } = props;

  return (
    <View style={styles.signInForm}>
      <FormikTextInput name="username" placeholder="Username" first />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable onPress={handleSubmit} style={styles.button}>
        <Text style={styles.whiteText}>Sign In</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  signInForm: {
    padding: 12,
    backgroundColor: "white",
    paddingVertical: 24
  },
  button: {
    backgroundColor: "#2470d3",
    marginTop: 12,
    paddingVertical: 16,
    borderRadius: 4,
    alignItems: "center"
  },
  whiteText: {
    color: "white"
  }
});

export default SignIn;

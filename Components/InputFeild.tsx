import { StyleSheet, TextInput } from "react-native";

type props = {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string | undefined;
};

const InputFeild = ({ value, placeholder, onChangeText }: props) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      style={styles.inputFeild}
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  inputFeild: {
    padding: 8,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: "#f3f7ff",
    fontSize: 12,
  },
});

export default InputFeild;

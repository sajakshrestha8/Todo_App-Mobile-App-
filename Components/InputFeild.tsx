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
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  inputFeild: {
    borderColor: "black",
  },
});

export default InputFeild;

import { Pressable, StyleSheet, Text } from "react-native";

type props = {
  onPress: () => void;
  BtnName: string;
};

const Button = ({ onPress, BtnName }: props) => {
  return (
    <Pressable onPress={() => onPress()} style={styles.buttonContainer}>
      <Text style={styles.btnText}>{BtnName}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 5,
    borderColor: "black",
    backgroundColor: "#397cff",
    borderRadius: 4,
  },
  btnText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: 600,
    color: "white",
  },
});

export default Button;

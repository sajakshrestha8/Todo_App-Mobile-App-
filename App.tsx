import { StyleSheet, Text, View } from "react-native";
import Button from "./Components/Button";
import InputFeild from "./Components/InputFeild";
import { useState } from "react";

const App = () => {
  const [changeText, setChangeText] = useState<string>();
  const [addedTask, setAddedTask] = useState<string>();
  const [clearText, setClearText] = useState<string>();

  const handleAdd = () => {
    setAddedTask(changeText);
    setClearText("");
  };

  function handleTextFeild(text: string) {
    setChangeText(text);
  }

  return (
    <View style={styles.container}>
      <View style={styles.addTeskContainer}>
        <View style={styles.inputFeild}>
          <InputFeild
            placeholder="Add some task over here"
            onChangeText={handleTextFeild}
            value={clearText}
          />
        </View>
        <View style={styles.addButton}>
          <Button BtnName="Add" onPress={handleAdd} />
        </View>
      </View>
      <Text>{addedTask}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 20,
    padding: 20,
    width: "100%",
  },
  addTeskContainer: {
    display: "flex",
    flexDirection: "row",
  },
  inputFeild: {
    flex: 2,
  },
  addButton: {
    flex: 1,
  },
});

export default App;

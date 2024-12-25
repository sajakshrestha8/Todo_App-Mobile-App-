import { Pressable, StyleSheet, Text, View } from "react-native";
import Button from "./Components/Button";
import InputFeild from "./Components/InputFeild";
import { useState } from "react";
import Checkbox from "expo-checkbox";

type Task = {
  isCompleted: boolean | undefined;
  task: string | undefined;
};

const App = () => {
  const [changeText, setChangeText] = useState<string>("");
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [addedTask, setAddedTask] = useState<Array<Task>>([
    {
      isCompleted: isCompleted,
      task: "Ma khana khanxu aba",
    },
    {
      isCompleted: isCompleted,
      task: "Ma code hanxu aba",
    },
  ]);
  // const [clearText, setClearText] = useState<string>();
  const handleAdd = () => {
    // setClearText("");
    setAddedTask([
      ...addedTask,
      { isCompleted: isCompleted, task: changeText },
    ]);
  };

  function handleTextFeild(text: string) {
    setChangeText(text);
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 20,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          Todo Application
        </Text>
      </View>
      <View style={styles.addTeskContainer}>
        <View style={styles.inputFeild}>
          <InputFeild
            placeholder="Add some task here..."
            onChangeText={handleTextFeild}
            // value={""}
          />
        </View>
        <View style={styles.addButton}>
          <Button BtnName="Add" onPress={handleAdd} />
        </View>
      </View>

      <View style={styles.taskContainerWrapper}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          Tasks
        </Text>
        {addedTask?.map((value, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Checkbox
                  onValueChange={() => {
                    let updatedStatus = addedTask.map((task, i) =>
                      i === index
                        ? { ...task, isCompleted: !task.isCompleted }
                        : task
                    );
                    setAddedTask(updatedStatus);
                  }}
                  value={value.isCompleted}
                />
              </View>
              <View style={styles.taskText}>
                <Text
                  style={{
                    textDecorationLine: value.isCompleted
                      ? "line-through"
                      : "none",
                  }}
                >
                  {value.task}
                </Text>
              </View>
              <View style={styles.taskBtn}>
                <Pressable
                  onPress={() => {
                    let RemainingTask = addedTask.filter((item, i) => {
                      return i != index;
                    });
                    setAddedTask(RemainingTask);
                  }}
                  style={{
                    padding: 5,
                    borderColor: "black",
                    backgroundColor: "#ff5a60",
                    borderRadius: 4,
                  }}
                >
                  <Text style={styles.btnText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    marginTop: 20,
    padding: 20,
    width: "100%",
    height: "100%",
  },
  addTeskContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  inputFeild: {
    flex: 2,
  },
  addButton: {
    flex: 1,
  },
  taskContainerWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    marginTop: 20,
    padding: 5,
  },
  taskContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  taskText: {
    flex: 2,
    justifyContent: "center",
    fontSize: 16,
  },
  taskBtn: {
    flex: 1,
  },
  buttonContainer: {
    padding: 5,
    borderColor: "black",
    backgroundColor: "#f3f4f6",
    borderRadius: 4,
  },
  btnText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: 600,
    color: "white",
  },
});

export default App;

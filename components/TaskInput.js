import { Button, StyleSheet, TextInput, View } from 'react-native';

const TaskInput = ({ taskInputHandler, addTaskHandler, taskText }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput value={taskText} onChangeText={taskInputHandler} style={styles.textInput} placeholder='task title' />
      <View style={styles.buttonContainer}>
        <Button onPress={addTaskHandler} title='Add Task' />
      </View>
    </View>
  );
};
export default TaskInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    borderColor: '#333',
    borderWidth: 1,
    marginRight: 16,
    fontSize: 16,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    flexShrink: 0,
  },
});

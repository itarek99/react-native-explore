import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

const TaskInput = ({ taskInputHandler, addTaskHandler, taskText, modalVisibility, modalVisibilityHandler }) => {
  return (
    <Modal visible={modalVisibility} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor='#fff'
          value={taskText}
          onChangeText={taskInputHandler}
          style={styles.textInput}
          placeholder='task title'
        />
        <View style={styles.buttonContainer}>
          <View style={styles.addButton}>
            <Button onPress={addTaskHandler} title='Add Task' color='#2EBAEF' />
          </View>
          <View style={styles.closeButton}>
            <Button onPress={modalVisibilityHandler} title='Close' color='#FB716E' />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default TaskInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#46529C',
  },
  textInput: {
    borderColor: '#fff',
    borderWidth: 1,
    marginRight: 8,
    padding: 8,
    width: '100%',
    color: '#fff',
    borderRadius: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  addButton: {
    width: '40%',
    marginHorizontal: 8,
  },
  closeButton: {
    width: '40%',
    marginHorizontal: 8,
  },
});

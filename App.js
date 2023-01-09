import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [modalVisibility, setModalVisibility] = useState(false);

  const taskInputHandler = (taskText) => {
    setTaskText(taskText);
  };
  const addTaskHandler = () => {
    setTaskList((prevState) => [{ text: taskText, key: Date.now() }, ...prevState]);
    setTaskText('');
    modalVisibilityHandler();
  };

  const deleteTaskHandler = (key) => {
    const items = taskList.filter((item) => item.key !== key);
    setTaskList(items);
  };

  const modalVisibilityHandler = () => {
    setModalVisibility((prevState) => !prevState);
  };

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title='Add New Task' onPress={modalVisibilityHandler} color='#2EBAEF' />
        {modalVisibility && (
          <TaskInput
            addTaskHandler={addTaskHandler}
            taskInputHandler={taskInputHandler}
            taskText={taskText}
            modalVisibility={modalVisibility}
            modalVisibilityHandler={modalVisibilityHandler}
          />
        )}
        <View style={styles.taskContainer}>
          <FlatList
            data={taskList}
            renderItem={(itemData) => {
              return <TaskItem itemData={itemData} deleteTaskHandler={deleteTaskHandler} />;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 50,
    backgroundColor: '#222',
  },

  taskContainer: {
    marginTop: 24,
    borderTopColor: '#fff',
    borderTopWidth: 1,
    paddingTop: 24,
  },
});

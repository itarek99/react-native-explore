import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [taskText, setTaskText] = useState('');

  const taskInputHandler = (taskText) => {
    setTaskText(taskText);
  };
  const addTaskHandler = () => {
    setTaskList((prevState) => [{ text: taskText, key: Date.now() }, ...prevState]);
    setTaskText('');
  };

  const deleteTaskHandler = (key) => {
    const items = taskList.filter((item) => item.key !== key);
    setTaskList(items);
  };

  return (
    <View style={styles.appContainer}>
      <TaskInput addTaskHandler={addTaskHandler} taskInputHandler={taskInputHandler} taskText={taskText} />
      <View style={styles.taskContainer}>
        <FlatList
          data={taskList}
          renderItem={(itemData) => {
            return <TaskItem itemData={itemData} deleteTaskHandler={deleteTaskHandler} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 50,
  },

  taskContainer: {
    marginTop: 24,
    borderTopColor: '#333',
    borderTopWidth: 1,
    paddingTop: 24,
  },
});

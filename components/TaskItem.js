import { Pressable, StyleSheet, Text, View } from 'react-native';

const TaskItem = ({ itemData, deleteTaskHandler }) => {
  return (
    <Pressable onPress={() => deleteTaskHandler(itemData.item.key)}>
      <View style={styles.taskItem}>
        <Text style={styles.taskText}>{itemData.item.text}</Text>
      </View>
    </Pressable>
  );
};
export default TaskItem;

const styles = StyleSheet.create({
  taskItem: {
    padding: 8,
    backgroundColor: 'seagreen',
    marginBottom: 8,
  },

  taskText: {
    color: '#fff',
  },
});

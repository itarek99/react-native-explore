import { Pressable, StyleSheet, Text, View } from 'react-native';

const TaskItem = ({ itemData, deleteTaskHandler }) => {
  return (
    <View style={styles.taskItem}>
      <Pressable android_ripple={{ color: '#dddddd' }} onPress={() => deleteTaskHandler(itemData.item.key)}>
        <Text style={styles.taskText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};
export default TaskItem;

const styles = StyleSheet.create({
  taskItem: {
    backgroundColor: '#46529C',
    marginBottom: 12,
    borderRadius: 3,
  },

  taskText: {
    padding: 12,
    color: '#fff',
  },
});

import { StyleSheet, Text, View } from 'react-native';

const TaskItem = ({ itemData }) => {
  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{itemData.item.text}</Text>
    </View>
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

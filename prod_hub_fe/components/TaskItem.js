import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../styles/TaskItemStyle';

const TaskItem = ({ task, moveTask }) => {
  return (
    <View style={styles.taskItem}>
      {task.status !== 'To Do' && (
        <Pressable
          onPress={() => moveTask(task.id, 'left')}
          style={styles.leftButton}
        >
          <Text style={styles.buttonText}>{"<-"}</Text>
        </Pressable>
      )}
      <Text style={styles.taskText}>{task.title}</Text>
      {task.status !== 'Done' && (
        <Pressable
          onPress={() => moveTask(task.id, 'right')}
          style={styles.rightButton}
        >
          <Text style={styles.buttonText}>{"->"}</Text>
        </Pressable>
      )}
    </View>
  );
};

export default TaskItem;

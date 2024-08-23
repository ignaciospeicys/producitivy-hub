import React from 'react';
import { View, Text } from 'react-native';
import TaskItem from './TaskItem';
import styles from '../styles/BoardStyle';

const Column = ({ title, tasks, moveTask }) => {
  return (
    <View style={styles.column}>
      <Text style={styles.columnTitle}>{title}</Text>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          moveTask={moveTask}
        />
      ))}
    </View>
  );
};

export default Column;

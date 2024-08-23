import React, { useState } from 'react';
import { View } from 'react-native';
import Column from './Column';
import styles from '../styles/BoardStyle';

const initialTasks = [
  { id: '1', title: 'Task 1', status: 'To Do' },
  { id: '2', title: 'Task 2', status: 'To Do' },
  { id: '3', title: 'Task 3', status: 'In Progress' },
  { id: '4', title: 'Task 4', status: 'Done' },
];

const statuses = ['To Do', 'In Progress', 'Done'];

const Board = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const moveTask = (taskId, direction) => {
    setTasks(prevTasks =>
      prevTasks.map(task => {
        if (task.id === taskId) {
          const currentIndex = statuses.indexOf(task.status);
          const newIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;
          return { ...task, status: statuses[newIndex] };
        }
        return task;
      })
    );
  };

  const getColumnTasks = (status) => tasks.filter((task) => task.status === status);

  return (
    <View style={styles.container}>
      {statuses.map((status) => (
        <Column
          key={status}
          title={status}
          tasks={getColumnTasks(status)}
          moveTask={moveTask}
        />
      ))}
    </View>
  );
};

export default Board;

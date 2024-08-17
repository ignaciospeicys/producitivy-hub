import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from '../styles/BoardStyle';

const ItemType = 'TASK';

const Task = ({ task, index, moveTask, findTask }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { id: task.id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveTask(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <View
      ref={(node) => drag(drop(node))}
      style={[styles.taskItem, { opacity: isDragging ? 0.5 : 1 }]}
    >
      <Text style={styles.taskText}>{task.title}</Text>
    </View>
  );
};

const Column = ({ title, tasks, moveTask }) => {
  const [, ref] = useDrop({
    accept: ItemType,
    drop: (item) => moveTask(item.index, -1, title),
  });

  return (
    <View ref={ref} style={styles.column}>
      <Text style={styles.columnTitle}>{title}</Text>
      {tasks.map((task, index) => (
        <Task
          key={task.id}
          task={task}
          index={index}
          moveTask={(fromIndex, toIndex) => moveTask(fromIndex, toIndex, title)}
          findTask={(id) => tasks.find((task) => task.id === id)}
        />
      ))}
    </View>
  );
};

const Board = () => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Task 1', status: 'To Do' },
    { id: '2', title: 'Task 2', status: 'To Do' },
    { id: '3', title: 'Task 3', status: 'In Progress' },
    { id: '4', title: 'Task 4', status: 'Done' },
  ]);

  const moveTask = (fromIndex, toIndex, newStatus) => {
    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(fromIndex, 1);

    if (newStatus !== -1) {
      movedTask.status = newStatus;
    }

    updatedTasks.splice(toIndex, 0, movedTask);
    setTasks(updatedTasks);
  };

  const getColumnTasks = (status) => tasks.filter((task) => task.status === status);

  return (
    <DndProvider backend={HTML5Backend}>
      <View style={styles.container}>
        <Column title="To Do" tasks={getColumnTasks('To Do')} moveTask={moveTask} />
        <Column title="In Progress" tasks={getColumnTasks('In Progress')} moveTask={moveTask} />
        <Column title="Done" tasks={getColumnTasks('Done')} moveTask={moveTask} />
      </View>
    </DndProvider>
  );
};

export default Board;

import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { styles, colors } from '../styles/MatrixStyle';

const initialTasks = [
  { id: '1', title: 'Complete project report' },
  { id: '2', title: 'Schedule meeting with team' },
  { id: '3', title: 'Check emails' },
  { id: '4', title: 'Plan next week’s tasks' },
  { id: '5', title: 'Update website content' },
];

const Matrix = () => {
  const [matrix, setMatrix] = useState({
    quadrant1: [],
    quadrant2: [],
    quadrant3: [],
    quadrant4: [],
  });

  const [tasks, setTasks] = useState(initialTasks);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const addTaskToQuadrant = (task, quadrant) => {
    setMatrix((prevMatrix) => ({
      ...prevMatrix,
      [quadrant]: [...prevMatrix[quadrant], task],
    }));

    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
  };

  const removeTaskFromQuadrant = (task, quadrant) => {
    setMatrix((prevMatrix) => ({
      ...prevMatrix,
      [quadrant]: prevMatrix[quadrant].filter((t) => t.id !== task.id),
    }));

    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const handleAddTask = () => {
    if (newTaskTitle.trim() === '') return;

    const newTask = {
      id: (tasks.length + 1).toString(),
      title: newTaskTitle,
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
    setNewTaskTitle('');
  };

  const renderTask = ({ item }) => (
    <View style={[styles.taskItemContainer, { backgroundColor: colors.taskItem }]}>
      <Text style={styles.taskText}>{item.title}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.quadrantButton, { backgroundColor: colors.quadrant1 }]}
          onPress={() => addTaskToQuadrant(item, 'quadrant1')}
        >
          <Text style={styles.buttonText}>Q1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.quadrantButton, { backgroundColor: colors.quadrant2 }]}
          onPress={() => addTaskToQuadrant(item, 'quadrant2')}
        >
          <Text style={styles.buttonText}>Q2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.quadrantButton, { backgroundColor: colors.quadrant3 }]}
          onPress={() => addTaskToQuadrant(item, 'quadrant3')}
        >
          <Text style={styles.buttonText}>Q3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.quadrantButton, { backgroundColor: colors.quadrant4 }]}
          onPress={() => addTaskToQuadrant(item, 'quadrant4')}
        >
          <Text style={styles.buttonText}>Q4</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderQuadrantTask = ({ item, quadrant }) => (
    <TouchableOpacity
      style={[styles.taskItemContainer, { backgroundColor: colors.taskItem }]}
      onPress={() => removeTaskFromQuadrant(item, quadrant)}
    >
      <Text style={styles.taskText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.matrixContainer}>
        <View style={styles.row}>
          <Quadrant
            title="Urgent & Important"
            tasks={matrix.quadrant1}
            color={colors.quadrant1}
            quadrant="quadrant1"
            renderTask={renderQuadrantTask}
          />
          <Quadrant
            title="Not Urgent & Important"
            tasks={matrix.quadrant2}
            color={colors.quadrant2}
            quadrant="quadrant2"
            renderTask={renderQuadrantTask}
          />
        </View>
        <View style={styles.row}>
          <Quadrant
            title="Urgent & Not Important"
            tasks={matrix.quadrant3}
            color={colors.quadrant3}
            quadrant="quadrant3"
            renderTask={renderQuadrantTask}
          />
          <Quadrant
            title="Not Urgent & Not Important"
            tasks={matrix.quadrant4}
            color={colors.quadrant4}
            quadrant="quadrant4"
            renderTask={renderQuadrantTask}
          />
        </View>
      </View>
      <View style={styles.taskListContainer}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            value={newTaskTitle}
            onChangeText={setNewTaskTitle}
            placeholder="Enter new task"
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddTask}
          >
            <Text style={styles.buttonText}>Add Task</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.listTitle}>Tasks</Text>
        <FlatList
          data={tasks}
          renderItem={renderTask}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const Quadrant = ({ title, tasks, color, quadrant, renderTask }) => (
  <View style={[styles.quadrant, { backgroundColor: color }]}>
    <Text style={styles.quadrantTitle}>{title}</Text>
    <FlatList
      data={tasks}
      renderItem={(item) => renderTask({ ...item, quadrant })}
      keyExtractor={(item) => item.id}
    />
  </View>
);

export default Matrix;

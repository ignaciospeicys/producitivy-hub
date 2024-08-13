import React, { useState } from 'react';
import { SafeAreaView, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import texts from '../assets/texts';
import styles from '../styles/PomodorTimerStyle';
import Timer from './Timer';
import TaskForm from './TaskForm';

const PomodoroTimer = () => {
  const [tasks, setTasks] = useState([]);
  const [timerState, setTimerState] = useState(null);
  const [taskFormData, setTaskFormData] = useState({
    title: 'Task Title',
    description: 'Task Description',
    time: '00:03',
  });
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const handleTimeUpdate = (newTime) => {
    setTimerState((prevState) => ({ ...prevState, currentTime: newTime }));
  };

  const handleTimerEnd = () => {
    setTasks([...tasks, { id: tasks.length, title: taskFormData.title, description: taskFormData.description }]);
    setTimerState(null);
  };

  const handleStartTask = () => {
    const [mins, secs] = taskFormData.time.split(':').map(Number);
    const initialSeconds = mins * 60 + secs;
    setTimerState({ initialSeconds, isRunning: true });
  };

  const handleFormChange = (field, value) => {
    setTaskFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {isHeaderVisible && (
        <View style={styles.header}>
          <Image
            source={require('../img/pomodoro.png')}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{texts.pomodoroTimer.title}</Text>
            <Text style={styles.description}>{texts.pomodoroTimer.description}</Text>
          </View>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsHeaderVisible(false)}
          >
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
        </View>
      )}

      <SafeAreaView>
        {timerState ? (
          <Timer
            style={styles.timer}
            initialSeconds={timerState.initialSeconds}
            isRunning={timerState.isRunning}
            onTimeUpdate={handleTimeUpdate}
            onTimerEnd={handleTimerEnd}
          />
        ) : (
          <TaskForm
            title={taskFormData.title}
            description={taskFormData.description}
            time={taskFormData.time}
            onFormChange={handleFormChange}
            onStartTask={handleStartTask}
          />
        )}
      </SafeAreaView>

      <Text style={styles.sectionTitle}>Section title</Text>

      {tasks.map((task) => (
        <View key={task.id} style={styles.tasksHeader}>
          <Image
            source={require('../img/image.png')}
            style={styles.tasksImage}
          />
          <View style={styles.tasksContainer}>
            <Text style={styles.tasksTitle}>{task.title}</Text>
            <Text style={styles.tasksDescription}>{task.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default PomodoroTimer;

import React, { useState } from 'react';
import { SafeAreaView, Text, View, Image, ScrollView } from 'react-native';
import texts from '../assets/texts';
import styles from '../styles/PomodorTimerStyle';
import Timer from './Timer';
import TaskForm from './TaskForm';

const PomodoroTimer = () => {
  const [tasks, setTasks] = useState([]);
  const [timerState, setTimerState] = useState(null); // Manage timer visibility and state
  const [taskFormData, setTaskFormData] = useState({
    title: 'Title',
    description: 'description text',
    time: '00:00',
  });

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
    setTimerState({ initialSeconds, isRunning: true }); // Start the timer
  };

  const handleFormChange = (field, value) => {
    setTaskFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../img/pomodoro.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{texts.pomodoroTimer.title}</Text>
          <Text style={styles.description}>{texts.pomodoroTimer.description}</Text>
        </View>
      </View>

      <SafeAreaView>
        {timerState ? (
          <Timer
            style={styles.timer}
            initialSeconds={timerState.initialSeconds}
            isRunning={timerState.isRunning} // Pass the isRunning state
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

import React, { useState } from 'react';
import { SafeAreaView, Text, View, Image, Button, ScrollView } from 'react-native';
import texts from '../assets/texts';
import styles from '../styles/PomodorTimerStyle';
import Timer from './Timer'

const PomodoroTimer = () => {
  const [tasks, setTasks] = useState([]);
  const [timerState, setTimerState] = useState({});

  const handleTimeUpdate = (newTime) => {
    setTimerState((prevState) => ({ ...prevState, currentTime: newTime }));
  };

  const handleTimerEnd = () => {
    setTasks([...tasks, { id: tasks.length, title: 'Title', description: 'description text' }]);
    setTimerState((prevState) => ({ ...prevState, hasEnded: true }));
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
          <SafeAreaView style={styles.container}>
            <Timer style={styles.timer}
              initialSeconds={3}
              onTimeUpdate={handleTimeUpdate}
              onTimerEnd={handleTimerEnd}
            />
          </SafeAreaView>
        </View>
      </View>

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
}


export default PomodoroTimer;

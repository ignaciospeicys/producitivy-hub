import React, { useState } from 'react';
import { Text, View, Image, Button, ScrollView } from 'react-native';
import texts from '../assets/texts';
import styles from '../styles/PomodorTimerStyle';

const PomodoroTimer = () => {
  const [tasks, setTasks] = useState([]);

  const handleButtonPress = () => {
    setTasks([...tasks, { id: tasks.length, title: 'Title', description: 'description text' }]);
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
          <Button title="Start" onPress={handleButtonPress} />
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

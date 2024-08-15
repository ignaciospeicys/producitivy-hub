import React from 'react';
import { View, Button, TextInput } from 'react-native';
import styles from '../styles/TaskFormStyle';
const TaskForm = ({ title, description, time, onFormChange, onStartTask }) => {
  const handleTimeChange = (input) => {
    const formattedInput = input.replace(/[^0-9:]/g, '');
    const [mins, secs] = formattedInput.split(':');
    const formattedMins = mins ? mins.padStart(2, '0') : '00';
    const formattedSecs = secs ? secs.padStart(2, '0').slice(0, 2) : '00';
    onFormChange('time', `${formattedMins}:${formattedSecs}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleDescriptionContainer}>
        <TextInput
          style={styles.titleInput}
          value={title}
          onChangeText={(text) => onFormChange('title', text)}
        />
        <TextInput
          style={styles.descriptionInput}
          value={description}
          onChangeText={(text) => onFormChange('description', text)}
        />
      </View>

      <TextInput
        style={styles.timeInput}
        value={time}
        onChangeText={handleTimeChange}
        keyboardType="numeric"
      />

      <View style={styles.buttonContainer}>
        <Button title="Start" onPress={onStartTask} />
      </View>
    </View>
  );
};

export default TaskForm;

import React from 'react';
import { View, Button, TextInput } from 'react-native';

const TaskForm = ({ title, description, time, onFormChange, onStartTask }) => {
  const handleTimeChange = (input) => {
    const formattedInput = input.replace(/[^0-9:]/g, '');
    const [mins, secs] = formattedInput.split(':');
    const formattedMins = mins ? mins.padStart(2, '0') : '00';
    const formattedSecs = secs ? secs.padStart(2, '0').slice(0, 2) : '00';
    onFormChange('time', `${formattedMins}:${formattedSecs}`);
  };

  return (
    <View>
      <TextInput
        placeholder="Task Title"
        value={title}
        onChangeText={(text) => onFormChange('title', text)}
      />
      <TextInput
        placeholder="Task Description"
        value={description}
        onChangeText={(text) => onFormChange('description', text)}
      />
      <TextInput
        placeholder="MM:SS"
        value={time}
        onChangeText={handleTimeChange}
        keyboardType="numeric"
      />
      <Button title="Start Task" onPress={onStartTask} />
    </View>
  );
};

export default TaskForm;

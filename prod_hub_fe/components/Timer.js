import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/TimerStyle';


const Timer = ({ initialSeconds, isRunning, onTimeUpdate, onTimerEnd }) => {
  const [time, setTime] = useState(initialSeconds);
  const [running, setRunning] = useState(isRunning);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            const newTime = prevTime - 1;
            onTimeUpdate(newTime);
            return newTime;
          } else {
            clearInterval(timer);
            setRunning(false);
            onTimerEnd();
            return 0;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running]);

  useEffect(() => {
    setTime(initialSeconds);
    setRunning(isRunning);
  }, [initialSeconds, isRunning]);

  const pauseTimer = () => setRunning(false);
  const resetTimer = () => {
    setRunning(false);
    setTime(initialSeconds);
    onTimeUpdate(initialSeconds);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(time)}</Text>
      <View style={styles.buttonContainer}>
        {running ? (
          <Button title="Pause" onPress={pauseTimer} />
        ) : (
          <Button title="Start" onPress={() => setRunning(true)} />
        )}
        <Button title="Reset" onPress={resetTimer} />
      </View>
    </View>
  );
};

export default Timer;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  taskItem: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    position: 'relative',
    justifyContent: 'center',
  },
  taskText: {
    fontSize: 16,
    textAlign: 'center',
  },
  leftButton: {
    position: 'absolute',
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',

  },
  rightButton: {
    position: 'absolute',
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',

  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;

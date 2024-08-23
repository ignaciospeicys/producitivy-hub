import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  column: {
    flex: 1,
    padding: 10,
    margin: 5,
    backgroundColor: '#f4f4f4',
    borderRadius: 5,
    minHeight: 200,
  },
  columnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  taskItem: {
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    elevation: 1,
  },
  taskText: {
    fontSize: 16,
  },
  placeholder: {
    height: 1,
  },
  leftButton: {
    position: 'absolute',
    left: 5,
    top: 5,
    width: 30,
    height: 30,
  },
  rightButton: {
    position: 'absolute',
    right: 5,
    top: 5,
    width: 30,
    height: 30,
  },
});

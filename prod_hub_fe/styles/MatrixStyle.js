// MatrixStyles.js
import { StyleSheet } from 'react-native';

const colors = {
  quadrant1: '#ff7f7f',
  quadrant2: '#7fbfff',
  quadrant3: '#fff7b2',
  quadrant4: '#bfbfbf',
  taskItem: '#d0e8ff',
  buttonText: '#fff',
  quadrantBackground: '#f0f0f0',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  matrixContainer: {
    flex: 2,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  quadrant: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: colors.quadrantBackground,
    borderRadius: 5,
  },
  quadrantTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  taskText: {
    fontSize: 16,
    marginBottom: 5,
  },
  taskListContainer: {
    flex: 1,
  },
  listTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  taskItemContainer: {
    padding: 10,
    backgroundColor: colors.taskItem,
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  quadrantButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 2,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.buttonText,
    textAlign: 'center',
  },
  formContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  addButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
});

export { styles, colors };

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 18,
  },
  sectionTitle: {
    width: '100%',
    padding: 20,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  tasksHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  tasksImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  tasksContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  tasksTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  tasksDescription: {
    fontSize: 18,
  },
});

export default styles
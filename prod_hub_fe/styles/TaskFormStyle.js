import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 100,
    width: 500
  },
  titleDescriptionContainer: {
    flex: 3,
    flexDirection: 'column',
    marginRight: 5,
  },
  titleInput: {
    marginBottom: 5,
    fontSize: 40
  },
  descriptionInput: {
    marginBottom: 5,
    fontSize: 30
  },
  timeInput: {
    flex: 1,
    marginRight: 5,
    textAlign: 'center',
    height: 50,
    width: 120,
    fontSize: 50
  },
  buttonContainer: {
    flex: 1,
    height: 40,
    width: 80
  },
});

export default styles;
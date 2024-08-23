import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import PomodoroTimer from './components/PomodoroTimer';
import Board from './components/Board';
import Matrix from './components/Matrix';

const Drawer = createDrawerNavigator();

function Theory() {
  return (
    <View style={styles.container}>
      <Text>Theory</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerType: 'permanent',
          drawerStyle: {
            width: 240,
          },
        }}
      >
        <Drawer.Screen name="Pomodoro Timer" component={PomodoroTimer} />
        <Drawer.Screen name="Board" component={Board} />
        <Drawer.Screen name="Matrix" component={Matrix} />
        <Drawer.Screen name="Theory" component={Theory} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

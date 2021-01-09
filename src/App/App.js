import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainRoutes from '_routes/MainRoutes';

const a = 'siema';
const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <MainRoutes />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;

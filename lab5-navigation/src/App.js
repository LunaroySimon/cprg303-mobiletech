/**
 * My To Do List App
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

function App() {
  const NativeStack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <NativeStack.Navigator>
        <NativeStack.Screen name="Home" component={HomeScreen} />
        <NativeStack.Screen name="About" component={AboutScreen} />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}

export default App;

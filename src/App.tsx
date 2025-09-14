import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './screens/Home';
import { RootParamList } from './nav/RootParam';
import { Dashboard } from './screens/Dashboard';
import { CameraScreen } from './screens/Camera';
import { PhotoPreviewScreen } from './screens/PhotoPreviewScreen';

const Stack = createNativeStackNavigator<RootParamList>()

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Dashboard' component={Dashboard} />
          <Stack.Screen name='Camera' component={CameraScreen} />
          <Stack.Screen name='PhotoPreview' component={PhotoPreviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
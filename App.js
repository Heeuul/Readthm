import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { MusicNoteProvider } from "./hooks/useMusicNote";
import NavScreen from "./components/NavScreen";
import HomeScreen from "./components/HomeScreen";
import QuizScreen from "./components/QuizScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <MusicNoteProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Nav" component={NavScreen} />
          <Stack.Screen name="Quiz" component={QuizScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </MusicNoteProvider>
  );
}

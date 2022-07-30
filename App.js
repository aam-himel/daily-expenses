import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Im,
  FlatList,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "./src/utilities/Color";
import logo from "./src/images/logo.png";
import ExpensesCard from "./src/components/ExpensesCard";
import expensesData from "./src/utilities/expensesData";
import HomeScreen from "./src/screen/HomeScreen";
import Faqs from "./src/screen/Faqs";
const Stack = createNativeStackNavigator();
export default function App() {
  // const expensesData = ["hello", "there", "blabla", "himel"];
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Faqs"
          component={Faqs}
          options={{ title: "FAQs" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

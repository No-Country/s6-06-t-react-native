import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

 import { Provider} from "react-redux";
import configureStore from "./src/redux/store";
import Home from './src/screens/Home';

// import Probando from './Probando';
export default function App() {

  return (
    <Provider store = { configureStore }> 
      <Home />
    </Provider>
  );
}


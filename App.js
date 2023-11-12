import {StyleSheet, Text, TextInput, View} from 'react-native'
import Greeting from './components/Greeting'
import Counter from './components/Counter'

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Score Keeper</Text>        
        
        <Text>Player 1</Text>
        <Counter />

        <Text>Player 2</Text>
        <Counter />

        <Text>Player 3</Text>
        <Counter />
    </View>
  )


}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    },

    title: {
      marginBottom: 25,
      fontSize: 30
    }
});
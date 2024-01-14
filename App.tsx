import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './Lessons/lesson2/HelloWorld';
import Greeter from './Lessons/lesson2/Greeter';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={ { fontSize: 25, color:'white', backgroundColor: 'black' } }>Hello React Native World! I am Airen!</Text>
      <Text style={ styles.textDemo }>You can not write text without Text elements.</Text>
      <Text style= {{...styles.textDemo, ...styles.someOfOtherStyle}}>Combine two existing Object</Text>
      <HelloWorld />
      <HelloWorld />
      <Greeter name="Airen"/>
      <Greeter name="Talha"/>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A66',
    alignItems: 'center',
    justifyContent: 'center',

  },
  textDemo: {
    fontSize: 30,
    color: 'green',
    backgroundColor: 'white'
  },
  someOfOtherStyle: {
    backgroundColor: 'pink'
  }
});

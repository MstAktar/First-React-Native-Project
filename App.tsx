import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './Lessons/lesson2/HelloWorld';
import Greeter from './Lessons/lesson2/Greeter';

export default function App() {
  return (
    //lesson2
    // <View style={styles.container}>
    //   <Text style={ { fontSize: 25, color:'white', backgroundColor: 'black' } }>Hello React Native World! I am Airen!</Text>
    //   <Text style={ styles.textDemo }>You can not write text without Text elements.</Text>
    //   <Text style= {{...styles.textDemo, ...styles.someOfOtherStyle}}>Combine two existing Object</Text>
    //   <HelloWorld />
    //   <HelloWorld />
    //   <Greeter name="Airen"/>
    //   <Greeter name="Talha"/>
    // </View>

    //lesson3
    <View style={styles.container}>
        <View style={{width: 80, height: 80, backgroundColor:'red'}}></View>
        <View style={{width: 80, height: 80, backgroundColor:'green'}}></View>
        <View style={{width: 80, height: 80, backgroundColor:'blue'}}></View>
        <View style={{width: 80, height: 80, backgroundColor:'pink'}}></View>
    </View>
    
  );
}

//lesson2
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#A66',
//     alignItems: 'center',
//     justifyContent: 'center',

//   },
//   textDemo: {
//     fontSize: 30,
//     color: 'green',
//     backgroundColor: 'white'
//   },
//   someOfOtherStyle: {
//     backgroundColor: 'pink'
//   }
// });

//lesson3
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#A66',
    // alignItems: 'center',
    alignItems: 'flex-start',
    // alignItems: 'baseline',
    // alignItems: 'flex-end',
    // justifyContent: 'space-between',
    justifyContent: 'space-evenly',
    
    width: '100%',
    padding: 50,

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

import { StyleSheet, Text, View, Image } from 'react-native';
import HelloWorld from './Lessons/lesson2/HelloWorld';
import Greeter from './Lessons/lesson2/Greeter';

export default function App() {
  return (
    //lesson2
    /*<View style={styles.container}>
       <Text style={ { fontSize: 25, color:'white', backgroundColor: 'black' } }>Hello React Native World! I am Airen!</Text>
       <Text style={ styles.textDemo }>You can not write text without Text elements.</Text>
       <Text style= {{...styles.textDemo, ...styles.someOfOtherStyle}}>Combine two existing Object</Text>
       <HelloWorld />
       <HelloWorld />
       <Greeter name="Airen"/>
       <Greeter name="Talha"/>
    </View>   );*/

    //lesson3
    /*<View style={styles.container}>
        <View style={{width: 80, height: 80, backgroundColor:'red'}}></View>
        <View style={{width: 80, height: 80, backgroundColor:'green'}}></View>
        <View style={{width: 80, height: 80, backgroundColor:'blue'}}></View>
        <View style={{width: 80, height: 80, backgroundColor:'pink'}}></View>
    </View>
      );}*/

    //Exercise-01:
    <View style={styles.container}>
        <View style={ styles.firstRow }>
          <View style={{ ...styles.item, backgroundColor: '#22F', flex: 1 }}></View>
          <View style={{ ...styles.item, backgroundColor: '#22A', flex: 2 }}></View>
        </View>
        <View style={styles.secondRow}>

        </View>
        <View style={styles.thirdRow}>
            <View style={{...styles.item, backgroundColor: '#090', flex: 1 }}></View>
            <View style={{...styles.item, backgroundColor: '#0B0', flex: 1 }}></View>
            <View style={{...styles.item, backgroundColor: '#090', flex: 1 }}></View>
        </View>
        <View style={styles.forthRow}>
            <View style={{backgroundColor: 'yellow', flexGrow: 1}}></View>
            <View style={{backgroundColor: 'pink', flexGrow: 1}}></View>
        </View>
    </View> 
  );
}

  //Images
  /*<View style={styles.container}>
    <Image 
    resizeMode='contain'
    source={require('./image/maa.jpg')} 
    style={{width: 400, height: 300, backgroundColor: 'pink'}} />
  </View> 
  );
}*/

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
/*const styles = StyleSheet.create({
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
});*/

//Exercise-01:
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    paddingTop: 50,
  },
  firstRow: {
    flex: 1,
    flexDirection: 'row',
  },
  secondRow: {
    flex: 2,
    backgroundColor: '#0D0',
    width:'100%',
  },
  thirdRow: {
    flex: 1,
    flexDirection: 'row',
  },
  forthRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  item: {
    height: '100%',
  }
});

//Images
/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    paddingTop: 50,
  },
  firstRow: {
    flex: 1,
    flexDirection: 'row',
  },
  secondRow: {
    flex: 2,
    backgroundColor: '#0D0',
    width:'100%',
  },
  thirdRow: {
    flex: 1,
    flexDirection: 'row',
  },
  forthRow: {
    flex: 1,
    flexDirection: 'row',
  },
  item: {
    height: '100%',
  }
});*/


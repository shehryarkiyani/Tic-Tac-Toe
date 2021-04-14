import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable,StyleSheet, Text,Button ,View,TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.st1} >Tic Tac Toe Game</Text>
      <Text style={styles.p1} >Player 2 : X</Text>
      <View style={{marginLeft:-40}}>
      <View style={{flexDirection:"row"}}>
      <Pressable>
      <Text style={styles.box}></Text>
      </Pressable>
      <Pressable>
      <Text style={styles.box}></Text>
      </Pressable>
      <Pressable>
      <Text style={styles.box3}></Text>
      </Pressable>
      </View>
      <View style={{flexDirection:"row"}}>
      <Pressable>
      <Text style={styles.box1}></Text>
      </Pressable>
      <Pressable>
      <Text style={styles.box1}></Text>
      </Pressable>
      <Pressable>
      <Text style={styles.box4}></Text>
      </Pressable>
      </View>
      <View style={{flexDirection:"row"}}>
      <Pressable>
      <Text style={styles.box1}></Text>
      </Pressable>
      <Pressable>
      <Text style={styles.box1}></Text>
      </Pressable>
      <Pressable>
      <Text style={styles.box4}></Text>
      </Pressable>
      </View>
      
      </View>
      <Text style={styles.p2} >Player 1 : O</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  st1:{
    fontSize:30,
    position:'absolute',
    top:'10%'
  }
  ,p2:{
    fontSize:25,
    position:'absolute',
    top:'70%'
  },
  p1:{
    fontSize:25,
    position:'absolute',
    top:'30%'
  },
  box:{
    width:50,
    height:50,
    borderRightWidth:2
  },
  box1:{
    width:50,
    height:50,
    borderRightWidth:2,
    borderTopWidth:2
  },
  box3:{
    width:50,
    height:50,
  },
  box4:{
    width:50,
    height:50,
    borderTopWidth:2
  },
  
});

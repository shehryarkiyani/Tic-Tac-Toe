import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { Pressable,StyleSheet, Text,Button ,View,TextInput,Modal} from 'react-native';

export default function App() {
  const[cb1,setcb1]=useState('')
  const[cb2,setcb2]=useState('')
const[cb3,setcb3]=useState('')
  const [count,setcount]=useState(0)
  const[total,setTotal]=useState(0)
  const[result,setresult]=useState("")
  const [modalVisible, setModalVisible] = useState(false);
  const[p1,setp1]=useState(true)
  const[p2,setp2]=useState(false)
  const[b1,setb1]=useState('')
  const[b2,setb2]=useState('')
  const[b3,setb3]=useState('')
  const[b4,setb4]=useState('')
  const[b5,setb5]=useState('')
  const[b6,setb6]=useState('')
  const[b7,setb7]=useState('')
  const[b8,setb8]=useState('')
  const[b9,setb9]=useState('')
  const ButtonClicked=(box,turn)=>{
    if(turn==true){
      setcount(count+1)
      setp1(false)
      setp2(true)
      if(box==1){
        setb1('O')
      }else if(box==2){
        setb2('O')
      }else if(box==3){
        setb3('O')
      }else if(box==4){
        setb4('O')
      }else if(box==5){
        setb5('O')
      }else if(box==6){
        setb6('O')
      }else if(box==7){
        setb7('O')
      }else if(box==8){
        setb8('O')
      }else if(box==9){
        setb9('O')
      }
    }else{
      setcount(count+1)
setp1(true)
      setp2(false)
      if(box==1){
        setb1('X')
      }else if(box==2){
        setb2('X')
      }else if(box==3){
        setb3('X')
      }else if(box==4){
        setb4('X')
      }else if(box==5){
        setb5('X')
      }else if(box==6){
        setb6('X')
      }else if(box==7){
        setb7('X')
      }else if(box==8){
        setb8('X')
      }else if(box==9){
        setb9('X')
      }
    }if(count>=4){
      setTotal(total+1)
    }

  }
  const modalClosed=()=>{
    setModalVisible(false)
    setb1('')
    setb2('')
    setb3('')
    setb4('')
    setb5('')
    setb6('')
    setb7('')
    setb8('')
    setb9('')
    setcount(0)
    setTotal(0)
    setp1(true)
    setp2(false)
    setcb1('')
    setcb2('')
    setcb3('')
  }

  useEffect(()=>{
    if(total!=0 && count>=4){
      
    if(b1==b2 && b2==b3 && b1=='X'){
      setcb1('b1')
      setcb2('b2')
      setcb3('b3')
      setModalVisible(true)
      setresult("Player 2 wins")
    }else if(b1==b2 && b2==b3 && b1=='O'){
      setcb1('b1')
      setcb2('b2')
      setcb3('b3')
      setModalVisible(true)
      setresult("Player 1 wins")
    }else if(b4==b5 && b5==b6 && b4=='X'){
      setcb1('b4')
      setcb2('b5')
      setcb3('b6')
      setModalVisible(true)
      setresult("Player 2 wins")
    }else if(b4==b5 && b5==b6 && b4=='O'){
      setcb1('b4')
      setcb2('b5')
      setcb3('b6')
      setModalVisible(true)
      setresult("Player 1 wins")
    }else if(b7==b8 && b8==b9 && b7=='X'){
      setcb1('b7')
      setcb2('b8')
      setcb3('b9')
      setModalVisible(true)
      setresult("Player 2 wins")
    }else if(b7==b8 && b8==b9 && b7=='O'){
      setcb1('b7')
      setcb2('b8')
      setcb3('b9')
      setModalVisible(true)
      setresult("Player 1 wins")
    }else if(b1==b4 && b4==b7 && b1=='X'){
      setcb1('b1')
      setcb2('b4')
      setcb3('b7')
      setModalVisible(true)
      setresult("Player 2 wins")
    }else if(b1==b4 && b4==b7 && b1=='O'){
      setcb1('b1')
      setcb2('b4')
      setcb3('b7')
      setModalVisible(true)
      setresult("Player 1 wins")
    }else if(b2==b5 && b5==b8 && b2=='X'){
      setcb1('b2')
      setcb2('b5')
      setcb3('b8')
      setModalVisible(true)
      setresult("Player 2 wins")
    }else if(b2==b5 && b5==b8 && b2=='O'){
      setcb1('b2')
      setcb2('b5')
      setcb3('b8')
      setModalVisible(true)
      setresult("Player 1 wins")
    }else if(b3==b6 && b6==b9 && b3=='X'){
      setcb1('b3')
      setcb2('b6')
      setcb3('b9')
      setModalVisible(true)
      setresult("Player 2 wins")
    }else if(b3==b6 && b6==b9 && b3=='O'){
      setcb1('b3')
      setcb2('b6')
      setcb3('b9')
      setModalVisible(true)
      setresult("Player 1 wins")
    }else if(b1==b5 && b5==b9 && b1=='X'){
      setcb1('b1')
      setcb2('b5')
      setcb3('b9')
      setModalVisible(true)
      setresult("Player 2 wins")
    }else if(b1==b5 && b5==b9 && b1=='O'){
       setcb1('b1')
      setcb2('b5')
      setcb3('b9')
      setModalVisible(true)
  setresult("Player 1 wins")
    }else if(b3==b5 && b5==b7 && b5=='X'){
       setcb1('b3')
      setcb2('b5')
      setcb3('b7')
      setModalVisible(true)
  setresult("Player 2 wins")
    }else if(b3==b5 && b5==b7 && b5=='O'){
       setcb1('b3')
      setcb2('b5')
      setcb3('b7')
      setModalVisible(true)
     setresult("Player 1 wins")
    }else{
      if(count==9){
        setresult("Game Drawn")
        setModalVisible(true)
      }
      
    }
     }
  },[total])
  
  return (
    <View style={styles.container}>
    <Text style={styles.st1} >Tic Tac Toe Game</Text>
    <Text style={{color:'green',position:'absolute',top:'20%',right:3}}>Note:Green Color shows turn</Text>
    <Text style={[(p2===true)?[styles.p1,{color:'green'}]:[styles.p1,{color:'red'}]]} >Player 2 : X</Text>
    <View style={{marginLeft:-40}}>
    <View style={{flexDirection:"row"}}>
    <Pressable onPress={ButtonClicked.bind(this,1,p1)}>
    <Text style={[(cb1=='b1' ||cb2=='b1' ||cb3=='b1')?[styles.box,{backgroundColor:'#53d44e'}]:styles.box]}>{b1}</Text>
    </Pressable>
    <Pressable onPress={ButtonClicked.bind(this,2,p1)}>
    <Text style={[(cb1=='b2' ||cb2=='b2' ||cb3=='b2')?[styles.box,{backgroundColor:'#53d44e'}]:styles.box]}>{b2}</Text>
    </Pressable>
    <Pressable onPress={ButtonClicked.bind(this,3,p1)}>
    <Text style={[(cb1=='b3' ||cb2=='b3' ||cb3=='b3')?[styles.box3,{backgroundColor:'#53d44e'}]:styles.box3]}>{b3}</Text>
    </Pressable>
    </View>
    <View style={{flexDirection:"row"}}>
    <Pressable onPress={ButtonClicked.bind(this,4,p1)}>
    <Text style={[(cb1=='b4' ||cb2=='b4' ||cb3=='b4')?[styles.box1,{backgroundColor:'#53d44e'}]:styles.box1]}>{b4}</Text>
    </Pressable>
    <Pressable onPress={ButtonClicked.bind(this,5,p1)}>
    <Text style={[(cb1=='b5' ||cb2=='b5' ||cb3=='b5')?[styles.box1,{backgroundColor:'#53d44e'}]:styles.box1]}>{b5}</Text>
    </Pressable>
    <Pressable onPress={ButtonClicked.bind(this,6,p1)}>
    <Text style={[(cb1=='b6' ||cb2=='b6' ||cb3=='b6')?[styles.box4,{backgroundColor:'#53d44e'}]:styles.box4]}>{b6}</Text>
    </Pressable>
    </View>
    <View style={{flexDirection:"row"}}>
    <Pressable onPress={ButtonClicked.bind(this,7,p1)}>
    <Text style={[(cb1=='b7' ||cb2=='b7' ||cb3=='b7')?[styles.box1,{backgroundColor:'#53d44e'}]:styles.box1]}>{b7}</Text>
    </Pressable>
    <Pressable onPress={ButtonClicked.bind(this,8,p1)}>
    <Text style={[(cb1=='b8' ||cb2=='b8' ||cb3=='b8')?[styles.box1,{backgroundColor:'#53d44e'}]:styles.box1]}>{b8}</Text>
    </Pressable>
    <Pressable onPress={ButtonClicked.bind(this,9,p1)}>
    <Text style={[(cb1=='b9' ||cb2=='b9' ||cb3=='b9')?[styles.box4,{backgroundColor:'#53d44e'}]:styles.box4]}>{b9}</Text>
    </Pressable>
    </View>
    
    </View>
    <Text style={[(p1===true)?[styles.p2,{color:'green'}]:[styles.p2,{color:'red'}]]}  >Player 1 : O</Text>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
    >
    <View style={styles.modalView}>
     <Text style={{marginBottom:30}}>{result}</Text>
     <Button onPress={modalClosed.bind(this)} title="Play Again"/>
    </View>
    
    </Modal>
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
modalView: {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
  height:200
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
  top:'30%',
},
box:{
  width:50,
  height:50,
  borderRightWidth:2,
  fontSize:30,
  alignItems:"center",
  paddingLeft:10,

},
box1:{
  width:50,
  height:50,
  borderRightWidth:2,
  borderTopWidth:2,
  fontSize:30,
  alignItems:"center",
  paddingLeft:10
},
box3:{
  width:50,
  height:50,
  fontSize:30,
  alignItems:"center",
  paddingLeft:10
},
box4:{
  width:50,
  height:50,
  borderTopWidth:2,
  fontSize:30,
  alignItems:"center",
  paddingLeft:10
}

});
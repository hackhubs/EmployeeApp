import React,{useState} from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import {TextInput, Button} from "react-native-paper";

const CreateEmployee = ()=>{
    const [Name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [salary, setSalary] = useState("")
    const [picture, setPicture]= useState("")
    const [modal,setModal]=useState(false)
    
    return (
        <View style={styles.root}>
            <TextInput
                label='Name'
                style={styles.inputStyle}
                value={Name}
                theme={theme}
                mode="outlined"
                onChangeText={text => setName(text)}
            />
            <TextInput
                label='Email'
                style={styles.inputStyle}
                value={email}
                theme={theme}
                mode="outlined"
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                label='Phone'
                style={styles.inputStyle}
                value={phone}
                theme={theme}
                keyboardType="number-pad"
                mode="outlined"
                onChangeText={text => setPhone(text)}
            />
            <TextInput
                label='salary'
                style={styles.inputStyle}
                value={salary}
                theme={theme}
                mode="outlined"
                onChangeText={text => setSalary(text)}
            />
            <Button  style={styles.inputStyle} icon="upload" mode="contained" onPress={() => setModal(true)}>
                Upload
            </Button>
            <Button  style={styles.inputStyle} icon="content-save" mode="contained" onPress={() => console.log("saved")}>
                Save
            </Button>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modal}
            onRequestClose={()=>{
                setModal(false)
            }}
            >
             <View style={styles.modalView}>
                 <View style={styles.modalButtonView}>
                     <Button theme={theme} icon="camera" mode="contained" onPress={() => setModal(false)}>
                         Camera
                     </Button>
                     <Button  icon="folder-account" mode="contained" onPress={() => setModal(false)}>
                         Gallery
                     </Button>
                 </View>
                 <Button theme={theme} icon="file-cancel"  onPress={() => setModal(false)}>
                     Cancel
                 </Button>
             </View>
            </Modal>
        </View>
    )

         
}
const theme ={
    colors:{
        primary:"blue"
    }
}

const styles = StyleSheet.create({
    root:{
        flex:1
    },
    inputStyle:{
        margin:5
    },
    modalButtonView: {
        flexDirection:"row",
        justifyContent: "space-around",
        padding:15
    },
    modalView: {
        position: "absolute",
        bottom:2,
        width:"100%",
        backgroundColor:"#b8e6ff"
    }
})

export default CreateEmployee




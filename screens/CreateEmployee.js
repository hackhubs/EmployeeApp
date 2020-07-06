import React,{useState} from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import {TextInput, Button} from "react-native-paper";
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {Alert} from "react-native-web";


const CreateEmployee = ()=>{
    const [Name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [salary, setSalary] = useState("")
    const [picture, setPicture]= useState("")
    const [modal,setModal]=useState(false)

    const pickFromGallery = async ()=>{
        const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if(granted){
            let data = await ImagePicker.launchImageLibraryAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[1,1],
                quality:0.5
            })
            if(!data.cancelled){
                let newfile = {uri:data.uri,
                    type:`test/${data.uri.split(".")[1]}`,
                    name:`test.${data.uri.split(".")[1]}`
                }
                handleupload(newfile)
            }
        }else {
            Alert.alert("You need to give permission to work")
        }
    }
    const pickFromCamera = async ()=>{
        const {granted} = await Permissions.askAsync(Permissions.CAMERA)
        if(granted){
            let data = await ImagePicker.launchCameraAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[1,1],
                quality:0.5
            })
            if(!data.cancelled){
                let newfile = {
                    uri:data.uri,
                    type:`test/${data.uri.split(".")[1]}`,
                    name:`test.${data.uri.split(".")[1]}`
                }
                handleupload(newfile)
            }
        }else {
            Alert.alert("You need to give permission to work")
        }
    }
    const handleupload = (image)=>{
        const data = new FormData()
        data.append('file',image)
        data.append('upload_preset','employeeAPP')
        data.append("cloud_name","whitedevill")

        fetch("https://api.cloudinary.com/v1_1/whitedevill/image/upload",{
            method:"post",
            body:data
        }).then(res=>res.json()).then(data=>{
            setPicture(data.url)
            setModal(false)
        })
    }

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
            <Button  style={styles.inputStyle} icon={picture==""?"upload":"check"} mode="contained" onPress={() => setModal(true)}>
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
                     <Button theme={theme} icon="camera" mode="contained" onPress={() => pickFromCamera()}>
                         Camera
                     </Button>
                     <Button  icon="folder-account" mode="contained" onPress={() => pickFromGallery()}>
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




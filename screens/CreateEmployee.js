import React,{useState} from 'react';
import { StyleSheet, Text, View, Modal , Alert , KeyboardAvoidingView } from 'react-native';
import {TextInput, Button} from "react-native-paper";
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';



const CreateEmployee = ()=>{
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [salary, setSalary] = useState("")
    const [picture, setPicture]= useState("")
    const [position, setPosition]= useState("")
    const [modal,setModal]=useState(false)

    const submitData = ()=>{
        fetch("http://bcaa62038078.ngrok.io/send-data",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                salary,
                picture,
                position
            })
        })
        .then(res=>res.json())
        .then(data=>{
            Alert.alert(`${data.name} is saved successfuly`)
            navigation.navigate("Home")
        })
        .catch(err=>{
            Alert.alert("someting went wrong")
        })

    }

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
        <KeyboardAvoidingView>
            <TextInput
                label='Name'
                style={styles.inputStyle}
                value={name}
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
            <TextInput
                label='position'
                style={styles.inputStyle}
                value={position}
                theme={theme}
                mode="outlined"
                onChangeText={text => setPosition(text)}
            />
            <Button  style={styles.inputStyle} icon={picture==""?"upload":"check"} mode="contained" onPress={() => setModal(true)}>
                Upload
            </Button>
            <Button  style={styles.inputStyle} icon="content-save" mode="contained" onPress={() => submitData()}>
                Save
            </Button>
            <Modal animationType="slide" transparent={true} visible={modal}
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
            </KeyboardAvoidingView>
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




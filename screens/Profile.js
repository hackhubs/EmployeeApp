import React from 'react';
import { StyleSheet, Text , View , Image, Linking , Platform} from 'react-native';
import { LinearGradient }  from 'expo-linear-gradient';
import { Title , Card , Button} from "react-native-paper";
import { MaterialIcons , Entypo } from '@expo/vector-icons';


const Profile  = (props) =>{

    const {_id,name,picture,phone,email,salary,position} = props.route.params.item;
    const openDial =()=>{
        if(Platform.OS === "android"){
            Linking.openURL("tel:8988143226")
        }else {
            Linking.openURL("telprompt:8988143226")
        }
    }
    return(
        <View style={styles.root}>
            <LinearGradient
                colors={["#f34028","rgba(119,14,239,0.99)"]}
                style = {{height:"20%"}}
            />
            <View style={{alignItems:"center"}}>
                <Image
                    style={{width:140,height:140,borderRadius:70,marginTop:-50}}
                    source={{uri:picture}}
                />
            </View>
            <View style={{alignItems:"center" ,margin:18}}>
                <Title>{name}</Title>
                <Text style={{fontSize:18}}>{position}</Text>
            </View>
            <Card style={styles.mycard} onPress={ ()=>{
                Linking.openURL("mailto:abhav.thakur25@gmail.com")
            }} >
                <View style={styles.cardcontent}>
                    <MaterialIcons name="email" size={32} color="#006aff" />
                    <Text style={styles.mytext}>{email}</Text>
                </View>
            </Card>
            <Card style={styles.mycard} onPress ={()=>openDial()}  >
                <View style={styles.cardcontent}>
                    <Entypo name="phone" size={32} color="#006aff" />
                    <Text style={styles.mytext}>{phone}</Text>
                </View>
            </Card>
            <Card style={styles.mycard}>
                <View style={styles.cardcontent}>
                    <MaterialIcons name="attach-money" size={32} color="#006aff" />
                    <Text style={styles.mytext}>{salary}</Text>
                </View>
            </Card>
            <View style={{flexDirection:"row",justifyContent:"space-around", padding:10}}>
                <Button icon="account-edit" mode="contained" theme={theme} onPress={() => console.log('Pressed')}>
                    Edit
                </Button>
                <Button icon="account-remove" mode="contained" onPress={() => console.log('Pressed')}>
                    Fire employee
                </Button>
            </View>

        </View>
    )

}
const styles = StyleSheet.create({
    root:{
        flex:1
    },
    mycard:{
        margin:3
    },
    cardcontent:{
        flexDirection:"row",
        padding:8
    },
    mytext:{
        fontSize:18,
        marginTop:3,
        marginLeft:5
    }
})
const theme = {
    colors:{
        primary:"#006aff"
    }
}


export default Profile


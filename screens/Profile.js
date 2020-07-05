import React from 'react';
import { StyleSheet, Text , View , Image } from 'react-native';
import { LinearGradient }  from 'expo-linear-gradient';
import { Title , Card , Button} from "react-native-paper";
import { MaterialIcons , Entypo } from '@expo/vector-icons';


const Profile  = () =>{
    return(
        <View style={styles.root}>
            <LinearGradient
                colors={["#f34028","rgba(119,14,239,0.99)"]}
                style = {{height:"20%"}}
            />
            <View style={{alignItems:"center"}}>
                <Image
                    style={{width:140,height:140,borderRadius:70,marginTop:-50}}
                    source={{uri:"https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"}}
                />
            </View>
            <View style={{alignItems:"center"}}>
                <Title>Abhav Thakur</Title>
                <Text style={{fontSize:18}}>Web developer</Text>
            </View>
            <Card style={styles.mycard}>
                <View style={styles.cardcontent}>
                    <MaterialIcons name="email" size={32} color="#006aff" />
                    <Text style={styles.mytext}>abhav.thakur25@gmail.com</Text>
                </View>
            </Card>
            <Card style={styles.mycard}>
                <View style={styles.cardcontent}>
                    <Entypo name="phone" size={32} color="#006aff" />
                    <Text style={styles.mytext}>8988143226</Text>
                </View>
            </Card>
            <Card style={styles.mycard}>
                <View style={styles.cardcontent}>
                    <MaterialIcons name="attach-money" size={32} color="#006aff" />
                    <Text style={styles.mytext}>8 lac.</Text>
                </View>
            </Card>
            <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                
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


export default Profile


import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList , ActivityIndicator } from 'react-native';
import {Card,FAB} from 'react-native-paper'

const Home = ({navigation})=>{
    const [data,setData] = useState([])
    const [loading,setLoading] =useState(true)
    useEffect(()=>{
        fetch("http://bcaa62038078.ngrok.io/data")
        .then(res => res.json())
        .then(results => {
            setData(results)
            setLoading(false)
        })
    },[])
    const renderList = ((item) =>{
        return(
            <Card style={styles.mycard}
            onPress ={()=>navigation.navigate("Profile",{item})}
            >
                <View style={styles.cardView}>
                    <Image
                        style={{width:70, height: 70, borderRadius:35}}
                        source={{uri:data.picture}}
                    />
                    <View style={{marginLeft:10}}>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>{item.position}</Text>
                    </View>

                </View>
            </Card>
        )

    })
    return (
        <View style={{flex:1}}>
            {
            loading? <ActivityIndicator size="large" color="#0000ff"/>
            :
            <FlatList
            data={data}
            renderItem={({item})=>{
               return renderList(item)
            }}
            keyExtractor={item=>item._id}
           /> 
            }
            <FAB  onPress = {() =>navigation.navigate("Create Employee") }
                style={styles.fab}
                small={false}
                icon="plus"
                theme={{colors:{accent:"blue"}}}
            />
        </View>
        )
    
}
const styles = StyleSheet.create({
    mycard:{
        margin:5,
    },
    cardView:{
        flexDirection: "row",
        padding: 6
    },
    text:{
        fontSize: 20,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
})
export default Home
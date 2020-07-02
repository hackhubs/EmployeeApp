import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import {Card,FAB} from 'react-native-paper'

const Home = ()=>{
    const data = [
        {id:3, name:"av",position:"web-dev"},
        {id:4, name:"abhi",position:"Ml-expert"},
        {id:2, name:"aanya",position:"Backend"},
        {id:7, name:"abhav",position:"front-end"},
        {id:6, name:"abhav",position:"front-end"},
        {id:5, name:"abhav",position:"front-end"},
        {id:11, name:"abhav",position:"front-end"},
        {id:10, name:"abhav",position:"front-end"},
        {id:9, name:"abhav",position:"front-end"},
        {id:8, name:"abhav",position:"front-end"},
        {id:1, name:"abhav",position:"front-end"},
    ]
    const renderList = ((item) =>{
        return(
            <Card style={styles.mycard} key={item.id}>
                <View style={styles.cardView}>
                    <Image
                        style={{width:70, height: 70, borderRadius:35}}
                        source={{uri:"https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=611&q=80"}}
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
        <View>
           <FlatList
            data={data}
            renderItem={({item})=>{
               return renderList(item)
            }}
            keyExtractor={item=>`${item.id}`}
           />
            <FAB
                style={styles.fab}
                small={false}
                icon="plus"
                theme={{colors:{accent:"blue"}}}
                onPress={() => console.log('Pressed')}
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
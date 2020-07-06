import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import {Card,FAB} from 'react-native-paper'

const Home = ({navigation})=>{
    const data = [
        {id:"3", name:"abhav",email:"thakur.abhav25@gmail",salary:"7 lpa",phone:"8988143226",position:"web-dev",picture:"https://images.unsplash.com/photo-1594034405868-f3c3dbf1a5fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
        {id:"2", name:"aanya",email:"jainaanya2000@gmail.com",salary:"6 lpa",phone:"8988143226",position:"Data Analysist",picture:"https://images.unsplash.com/photo-1594040618156-88c9880869a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
        {id:"1", name:"ipsa",email:"ipsa.thakur@gmail.com",salary:"5 lpa",phone:"9418130607",position:"Manager",picture:"https://images.unsplash.com/photo-1594034514436-832b31b49b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
        {id:"4", name:"Aanya Jain",email:"aanya.jain2018@vitstudent.ac.in",salary:"6 lpa",phone:"8988143226",position:"web-dev",picture:"https://images.unsplash.com/photo-1594040901323-9ec9fb3d9a32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    ]
    const renderList = ((item) =>{
        return(
            <Card style={styles.mycard}
            onPress ={()=>navigation.navigate("Profile",{item})}
            >
                <View style={styles.cardView}>
                    <Image
                        style={{width:70, height: 70, borderRadius:35}}
                        source={{uri:"https://sloanreview.mit.edu/wp-content/uploads/2020/02/MAG-Williams-Amazon-1290x860-1.jpg"}}
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
           <FlatList
            data={data}
            renderItem={({item})=>{
               return renderList(item)
            }}
            keyExtractor={item=>item.id}
           />
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
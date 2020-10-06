import React, { useContext } from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import {Context} from '../context/BlogContext'
import {EvilIcons} from '@expo/vector-icons';        
//my name is ..
const ShowScreen = ({navigation}) => {
    const {state} = useContext(Context)
    console.log(navigation.getParam('id'))

    const blogPost = state.find((blogPost)=>blogPost.id ===navigation.getParam('id'))
    return <View>
        <Text style={styles.textStyle} > Blog Content </Text>
        
        <Text style={styles.contentStyle}>Title : {blogPost.title}</Text>

            <Text style={styles.contentStyle}>Content : {blogPost.content}</Text>
        </View>
    }
    ShowScreen.navigationOptions = ({navigation}) => {
    return{
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('EditScreen',{id:navigation.getParam('id')})}>
              <EvilIcons name="pencil" size={35} />
            </TouchableOpacity>
          ),
    }
}
    const styles = StyleSheet.create({
        textStyle:{
            fontSize:30,
            alignSelf:'center',
            fontWeight:'bold',
            marginBottom:30
            
        },
        contentStyle:{
            fontSize:20
        },

    })


    export default ShowScreen
import React, { useContext} from 'react'
import {StyleSheet,Text,View} from 'react-native'
import {Context} from '../context/BlogContext'
import BlogPostForm  from '../components/BlogPostForm'

const CreateScreen = ({navigation}) => {
    const { addBlogPosts } = useContext(Context)
    return (
        <View>
            <Text style={styles.textStyle}>Create Screen</Text>
    <BlogPostForm onSubmit={(title,content)=>{
        addBlogPosts(title,content,()=>navigation.navigate('Index'))
    }} />
    </View>
    )
}
const styles = StyleSheet.create({
    textStyle:{
        fontSize:30,
        alignSelf:'center',
        fontWeight:'bold'
        
    }
                     })


    export default CreateScreen;
import React,{useContext} from 'react'
import {StyleSheet,View,Text} from 'react-native'
import { HeaderTitle } from 'react-navigation-stack'
import BlogPostForm from '../components/BlogPostForm'
import {Context} from '../context/BlogContext'



const EditScreen = ({navigation}) =>{

    const id  = navigation.getParam('id')
    const {state,editBlogPost} = useContext(Context);


const blogpost = state.find(
    blogPost=>blogPost.id===navigation.getParam('id')
)
return(
    <View>
        <Text style={styles.textStyle}> EditScreen </Text>
   <BlogPostForm 
   initialValues={{title:blogpost.title,content:blogpost.content}}
   onSubmit={(title,content)=>{
      editBlogPost(id,title,content,()=>navigation.pop())
   }} />
   </View>
)}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:30,
        alignSelf:'center',
        fontWeight:'bold'
        
    }
})

export default EditScreen;
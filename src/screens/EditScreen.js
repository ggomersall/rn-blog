import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'

import { Context } from '../context/BlogContext'

export default function EditScreen({navigation}) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { addBlogPost } = useContext(Context)
  const id = navigation.getParam('id')
  const blogPost = state.find((blogPost) => blogPost.id === id)
  
  return (
    <View>
      <Text style={styles.labelStyle}>Enter Title</Text>
      <TextInput 
        style={styles.inputStyle}
        value={blogPost.title} 
        onChangeText={(text) => setTitle(text)} 
      />
      <Text style={styles.labelStyle}>Enter Content</Text>
      <TextInput 
        style={styles.inputStyle}
        value={blogPost.content} 
        onChangeText={(text) => setContent(text)} 
      />
      <Button 
        title="Update Blog Post" 
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate('Index')
          })
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    paddingHorizontal: 5,
    marginHorizontal: 5
  },
  labelStyle: {
    fontSize: 20,
    marginBottom: 5,
    marginHorizontal: 5
  }
})
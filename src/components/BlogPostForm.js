import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function BlogPostForm({ onSubmit, initialValues }) {
  const [title, setTitle] = useState(initialValues.title)
  const [content, setContent] = useState(initialValues.content)
  
  return (
    <View>
      <Text style={styles.labelStyle}>Enter Title</Text>
      <TextInput 
        style={styles.inputStyle}
        value={title} 
        onChangeText={(text) => setTitle(text)} 
      />
      <Text style={styles.labelStyle}>Enter Content</Text>
      <TextInput 
        style={styles.inputStyle}
        value={content} 
        onChangeText={(text) => setContent(text)} 
      />
      <Button 
        title="Save Blog Post" 
        onPress={() => onSubmit(title, content)}
      />
    </View>
  )
}

BlogPostForm.defaultProps = {
  initialValues : {
    title: '',
    content: ''
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
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
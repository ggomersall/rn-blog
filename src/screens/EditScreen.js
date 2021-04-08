import React, { useContext } from 'react'

import BlogPostForm from '../components/BlogPostForm'
import { Context } from '../context/BlogContext'
import { StyleSheet } from 'react-native'

export default function EditScreen({navigation}) {
  const id = navigation.getParam('id')
  const { state, updateBlogPost } = useContext(Context)
  
  const blogPost = state.find((blogPost) => blogPost.id === id)
  
  return (
    <BlogPostForm 
      initialValues={{title: blogPost.title, content: blogPost.content}}
      onSubmit={(title, content) => {
        updateBlogPost(id, title, content, navigation.pop())
      }} 
    />
  )
}

const styles = StyleSheet.create({})
import React, { useContext } from 'react'

import BlogPostForm from '../components/BlogPostForm'
import { Context } from '../context/BlogContext'
import { StyleSheet } from 'react-native'

export default function CreateScreen({navigation}) {
  const { addBlogPost } = useContext(Context)

  return (
    <BlogPostForm onSubmit={(title, content) => {
      addBlogPost(title, content, () => {
        navigation.navigate('Index')
      })
    }} />
  )
}

const styles = StyleSheet.create({})
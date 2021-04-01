import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'

import BlogContext from '../context/BlogContext'

const IndexScreen = () => {
  const {data, addBlogPost} = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button 
        title="Add Post" 
        style={styles.buttonStyle}
        onPress={addBlogPost}
      />
      <FlatList 
        data={data}
        keyExtractor={post => post.title}
        renderItem={({item}) => {
          return (
            <Text>{item.title}</Text>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    color: 'hotpink'
  }
})

export default IndexScreen
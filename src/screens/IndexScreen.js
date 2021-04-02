import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'

import BlogContext from '../context/BlogContext'

const IndexScreen = () => {
  const {data, addBlogPost} = useContext(BlogContext);

  return (
    <View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={addBlogPost}
      ><Text style={styles.buttonText}>Add Post</Text></TouchableOpacity>
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
  screenContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 16,
    width: '100%'
  },
  buttonContainer: {
    elevation:8,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    backgroundColor: 'black',
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%'   
  },
  buttonText: {
    color: 'hotpink',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
})

export default IndexScreen
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'

import { Context } from '../context/BlogContext'

const IndexScreen = () => {
  const {state, addBlogPost} = useContext(Context);

  return (
    <View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={addBlogPost}
          >
          <Text style={styles.buttonText}>Add Post</Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={state}
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
    padding: 16,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center', 
  },
  buttonStyle: {
    elevation:8,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'hotpink',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    width: 150,
    textAlign: 'center'
  }
})

export default IndexScreen
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useContext, useEffect } from 'react';

import { Context } from '../context/BlogContext';
import { Ionicons } from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

  useEffect(() => {
    getBlogPosts();

    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts();
    });

    return () => {
      // prevents memory leaks
      listener.remove();
    }
  }, []);

  return (
    <>
      <View style={styles.buttonContainer}>
        {/* commenting this out as will be duplicate - but leaving comment in for future reference */}
        {/* <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Create')}>
          <Text style={styles.buttonText}>Add Post</Text>
        </TouchableOpacity> */}
      </View>
      <FlatList
        data={state}
        keyExtractor={(post) => post.title + post.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
              <View style={styles.rowStyle}>
                <Text style={styles.titleStyle}>
                  {item.title}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Ionicons style={styles.trashIconStyle} name='ios-trash' />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Ionicons name="ios-add" style={styles.plusIconStyle} />
      </TouchableOpacity>
    ),
  };
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
    elevation: 8,
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
    textAlign: 'center',
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  itemTitle: {
    fontSize: 18,
  },
  trashIconStyle: {
      fontSize: 20,
  },
  plusIconStyle: {
    color: 'hotpink',
    fontSize: 30,
    marginRight: 10
  }
});

export default IndexScreen;




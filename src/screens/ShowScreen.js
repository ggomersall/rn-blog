import React, {useContext} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import {Context} from '../context/BlogContext'
import { Ionicons } from '@expo/vector-icons';

export default function ShowScreen({navigation}) {
    const { state } = useContext(Context);
    const id = navigation.getParam('id')
    const blogPost = state.find((blogPost) => blogPost.id === id)

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({navigation}) => {
	return {
		headerRight: () => (
			<TouchableOpacity onPress={() => navigation.navigate('Edit')}>
				<Ionicons name="ios-pencil" style={styles.pencilIconStyle} />
			</TouchableOpacity>
		),
	};
}

const styles = StyleSheet.create({
	pencilIconStyle: {
    color: 'hotpink',
    fontSize: 20,
    marginRight: 10
  }
})
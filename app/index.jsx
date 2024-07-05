import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
	return (
		<View className = "flex-1 justify-center items-center">
			<Link href = "/(screens)/home">
				<Button title = "Go to Home Screen" />
			</Link>
		</View>
	)
}

export default index
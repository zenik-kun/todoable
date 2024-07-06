import { FlatList, View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
	const [tasks, setTasks] = useState([])

	return (
		<SafeAreaView>
			<FlatList
				data = {tasks}
				keyExtractor = {(item) => item.id.toString()}
				renderItem = {({ item }) => (
					<TaskItem task = {item} />
				)}
				ListHeaderComponent = {() => (
					<View className = "justify-center items-center m-3 border rounded-2xl bg-cyan-200">
						<Text className = "p-2 text-2xl font-lsemibold">
							Todoable
						</Text>
					</View>
				)}
			/>
		</SafeAreaView>
	)
}

export default index
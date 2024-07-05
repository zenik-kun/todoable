import { View, Text } from 'react-native'
import React from 'react'

const TaskItem = ({ task, onDelete, onEdit }) => {
	return (
		<View className = "p-2 border-b-2 border-b-gray-400 flex-row justify-between items-center">
			<Text>
				{task.title}
			</Text>
			<Button title = "Edit" onPress = {() => onEdit(task)} />
			<Button title = "Delete" onPress = {() => onDelete(task.id)} />
		</View>
	)
}

export default TaskItem
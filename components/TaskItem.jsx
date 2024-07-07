import { View, Text } from 'react-native'
import React from 'react'
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'

const TaskItem = ({ task: {title, description}}) => {
	return (
		<GestureHandlerRootView>
			<Swipeable>
				<View className = "p-2 justify-center shadow mb-2 mx-3 rounded-2xl bg-gray-200">
					<Text className = "font-lmedium text-base">
						{title}
					</Text>
					<Text className = "font-lextralight text-sm">
						{description}
					</Text>
				</View>
			</Swipeable>
		</GestureHandlerRootView>
	)
}

export default TaskItem
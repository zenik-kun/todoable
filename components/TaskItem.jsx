import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'
import { icons } from '../constants'
import EditModal from '../components/EditModal'

const TaskItem = ({ task: {id, title, description}, onDone, refetch }) => {
	const swipeableRef = useRef(null)
	const [editModalVisible, setEditModalVisible] = useState(false)
	const [currentTask, setCurrentTask] = useState({ id, title, description })

	const handleSwipeableOpen = () => {
		setTimeout(() => {
			if (swipeableRef.current) {
				swipeableRef.current.close();
			}
		}, 3000);
	}

	const rightSwipe = () => {
		return (
			<TouchableOpacity
				className = "bg-cyan-200 shadow rounded-2xl mb-2 mx-3 p-4 justify-center items-center"
				onPress = {() => {
					swipeableRef.current.close();
					onDone(id);
				}}
			>
				<Image 
					source = {icons.done}
					className = "h-10 w-10"
					resizeMode = "contain"
				/>
			</TouchableOpacity>
		)
	}

	const leftSwipe = () => {
		return (
			<View className = "flex-row"> 
				<TouchableOpacity
					className = "bg-red-400 shadow rounded-2xl mb-2 ml-3 p-4 justify-center items-center"
					onPress = {() => {
						swipeableRef.current.close();
						onDone(id);
					}}
				>
					<Image 
						source = {icons.del}
						className = "h-10 w-10"
						resizeMode = "contain"
					/>
				</TouchableOpacity>
				<TouchableOpacity
					className = "bg-green-300 shadow rounded-2xl mb-2 ml-2 mr-3 p-4 justify-center items-center"
					onPress = {() => {
						swipeableRef.current.close();
						setEditModalVisible(true);
					}}
				>
					<Image 
						source = {icons.edit}
						className = "h-10 w-10"
						resizeMode = "contain"
					/>
				</TouchableOpacity>
			</View>
		)
	}

	const handleSubmit = () => {
		setEditModalVisible(false)
	}

	return (
		<GestureHandlerRootView>
			<Swipeable renderLeftActions = {leftSwipe} renderRightActions = {rightSwipe} onSwipeableOpen = {handleSwipeableOpen} ref = {swipeableRef}>
				<View className = "p-2 justify-center shadow mb-2 mx-3 rounded-2xl bg-gray-100">
					<Text className = "font-lmedium text-base">
						{title}
					</Text>
					<Text className = "font-lextralight text-sm">
						{description}
					</Text>
				</View>
			</Swipeable>
			<EditModal
				visible = {editModalVisible}
				task = {currentTask}
				onClose = {handleSubmit}
				refetch = {refetch}
			/>
		</GestureHandlerRootView>
	)
}

export default TaskItem
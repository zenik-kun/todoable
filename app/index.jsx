import { FlatList, View, Text, TouchableOpacity, Alert, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CreateModal from '../components/CreateModal'
import { doneTask, editTask, getAllTasks } from '../lib/databases'
import TaskItem from '../components/TaskItem'
import { StatusBar } from 'expo-status-bar'

const index = () => {
	const [createVisible, setCreateVisible] = useState(false)
	const [tasks, setTasks] = useState([])
	const [refreshing, setRefreshing] = useState(false)

	const refetch = async () => {
		const tasks = await getAllTasks();
		setTasks(tasks);
	}

	const onRefresh = async () => {
		setRefreshing(true);
		await refetch();
		setRefreshing(false);
	}

	useEffect(() => {
		refetch();
	}, []);

	const onDone = async (id) => {
		try {
			await doneTask(id);
			refetch();
		} catch (error) {
			Alert.alert("Error", error.message);
		}
	}

	const onEdit = async (updatedTask) => {
		try {
			await editTask(updatedTask.id, updatedTask);
			refetch();
		} catch (error) {
			Alert.alert("Error", error.message)
		}
	}
	

	return (
		<SafeAreaView className ="h-full bg-white">
			<FlatList
				data = {tasks}
				keyExtractor = {(item) => item.id.toString()}
				renderItem = {({ item }) => (
					<TaskItem 
						task = {item} 
						onDone = {onDone}
					/>
				)}
				ListHeaderComponent = {() => (
					<View className = "">
						<View className = "justify-center items-center m-3 shadow rounded-2xl bg-cyan-200">
							<Text className = "p-2 text-2xl font-lsemibold">
								Todoable
							</Text>
						</View>
						
					</View>
				)}
				refreshControl = {<RefreshControl refreshing = {refreshing} onRefresh = {onRefresh} />}
			/>

			<TouchableOpacity 
			className = "bg-cyan-200 absolute bottom-5 right-5 rounded-[150px] p-2 w-16 h-16 justify-center items-center shadow"
			onPress = {() => {
				setCreateVisible(true);
			}}
			>
				<Text className = "text-4xl">
					+
				</Text>
			</TouchableOpacity>
			<CreateModal 
				visible = {createVisible}
				onClose = {() => setCreateVisible(false)}
			/>
			<StatusBar />
		</SafeAreaView>
	)
}

export default index
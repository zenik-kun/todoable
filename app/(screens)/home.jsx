import { View, FlatList, Button, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Link, useRouter, useLocalSearchParams } from 'expo-router';
import TaskItem from '../../components/TaskItem';

const HomeScreen = () => {
    const [tasks, setTasks] = useState([]);
    const router = useRouter();
    const params = useLocalSearchParams();

    useEffect(() => {
        if (params?.task) {
            const newTask = JSON.parse(params.task);
            setTasks(prevTasks => {
                const taskIndex = prevTasks.findIndex(task => task.id === newTask.id);
                if (taskIndex > -1) {
                    const updatedTasks = [...prevTasks];
                    updatedTasks[taskIndex] = newTask;
                    return updatedTasks;
                } else {
                    return [...prevTasks, newTask];
                }
            });
        }
    }, [params?.task]);

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const editTask = (task) => {
        router.push({ pathname: '/screens/task', params: { task: JSON.stringify(task) }});
    };
    
    return (
        <View style={styles.container}>
            <FlatList 
                data={tasks}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <TaskItem task={item} onDelete={deleteTask} onEdit={editTask} />
                )}
            />
            <Link href="/screens/TaskScreen">
                <Button title="Add Task"/>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default HomeScreen;

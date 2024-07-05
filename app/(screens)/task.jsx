import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

const TaskScreen = () => {
    const [title, setTitle] = useState('');
    const [id, setId] = useState(null);
    const router = useRouter();
    const params = useLocalSearchParams();

    useEffect(() => {
        if (params?.task) {
            const task = JSON.parse(params.task);
            setTitle(task.title);
            setId(task.id);
        }
    }, [params]);

    const saveTask = () => {
        const task = { id: id || new Date().getTime(), title };
        router.back({ task: JSON.stringify(task) });
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Task Title"
                value={title}
                onChangeText={setTitle}
            />
            <Button title="Save Task" onPress={saveTask} />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
  },
});

export default TaskScreen;

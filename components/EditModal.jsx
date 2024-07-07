import { View, Text, Modal, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import FormField from './FormField'
import { editTask } from '../lib/databases'
import CustomButton from './CustomButton'

const EditModal = ({ visible, task, onClose, refetch }) => {
    const [adding, setAdding] = useState(false);
    const [form, setForm] = useState({
		title: '',
		description: '',
	});

    useEffect(() => {
        if (task) {
            setForm ({
                title: task.title,
                description: task.description,
            });
        }
    }, [task]);

    const handleChange = (key, value) => {
        setForm ({ ...form, [key]: value})
    };

    const handleSubmit = async () => {
        try {
            const updatedData = {
                ...task,
                title: form.title || task.title,
                description: form.description || task.description,
            };

            await editTask(updatedData.id, updatedData);
            await refetch();
            onClose();
        } catch (error) {
            Alert.alert("Error", error.message);
        }
    };

    return (
        <Modal
            animationType = "slide"
            transparent = {true}
            visible = {visible}
        >
            <KeyboardAvoidingView
                className = "items-center justify-center h-full bg-gray-100/50"
            >
                <View className = "w-11/12 p-5 bg-white rounded-3xl shadow">
                    <Text className = "text-2xl font-lsemibold">
                        Edit Task
                    </Text>

                    <FormField
                        title = "Title"
                        value = {form.title}
                        placeholder = "Title"
                        handleChangeText = {(e) => handleChange('title', e)}
                        otherStyles = "mt-4"
                    />

                    <FormField
                        title = "Description"
                        value = {form.description}
                        placeholder = "Description"
                        handleChangeText = {(e) => handleChange('description', e)}
                        otherStyles = "mt-4"
                    />

                    <CustomButton
                        title = "Done"
                        handlePress = {handleSubmit}
                        containerStyles = "mt-5 w-20"
                        textStyles = ""
                        isLoading = {adding}
                    />

                </View>
            </KeyboardAvoidingView>
        
        </Modal>
    )
}

export default EditModal
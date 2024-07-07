import { View, Text, Modal, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useState } from 'react'
import FormField from './FormField'
import { addTask } from '../lib/databases'
import CustomButton from './CustomButton'

const CreateModal = ({ visible, onClose, refetch }) => {
    const [adding, setAdding] = useState(false);
    const [form, setForm] = useState({
		title: '',
		description: '',
	});

	const handleCreate = async () => {
		if (!form.title) {
			return Alert.alert("Wait...", 'A task without a title?')
		} 

        setAdding(true);

		try {
			await addTask({
				title: form.title,
				description: form.description,
			});
            await refetch();

		} catch (error) {
			Alert.alert("Error", error.message)
		} finally {
            setForm({
                title: '',
                description: '',
            });

            setAdding(false);
            onClose();
        }
	};

    return (
        <Modal
            animationType = "slide"
            transparent = {true}
            visible = {visible}
            onRequestClose = {onClose}
        >
            <KeyboardAvoidingView
                className = "items-center justify-center h-full bg-gray-100/50"
            >
                <View className = "w-11/12 p-5 bg-white rounded-3xl shadow">
                    <Text className = "text-2xl font-lsemibold">
                        Add Task
                    </Text>

                    <FormField
                        title = "Title"
                        value = {form.title}
                        placeholder = "Title"
                        handleChangeText = {(e) => setForm({...form, title: e})}
                        otherStyles = "mt-4"
                    />

                    <FormField
                        title = "Description"
                        value = {form.description}
                        placeholder = "Description"
                        handleChangeText = {(e) => setForm({...form, description: e})}
                        otherStyles = "mt-4"
                    />

                    <CustomButton
                        title = "Add"
                        handlePress = {handleCreate}
                        containerStyles = "mt-5 w-20"
                        textStyles = ""
                        isLoading = {adding}
                    />

                </View>
            </KeyboardAvoidingView>
        
        </Modal>
    )
}

export default CreateModal
import { View, Text, TextInput } from 'react-native'
import React from 'react'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    return (
        <View className = {`space-y-2 ${otherStyles}`}>
            <Text className = "ml-2 text-xl font-lregular">
                {title}
            </Text>
            <View className = "bg-cyan-200 w-full h-16 rounded-3xl items-center shadow">
                <TextInput 
                    className = "ml-5 flex-1 font-lsemibold text-base w-full"
                    value = {value}
                    placeholder = {placeholder}
                    onChangeText = {handleChangeText}
                /> 
            </View>
        </View>
    )
}

export default FormField
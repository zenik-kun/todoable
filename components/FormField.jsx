import { View, Text, TextInput } from 'react-native'
import React from 'react'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    return (
        <View className = {`space-y-2 ${otherStyles}`}>
            <Text className = "ml-2 text-xl font-lregular">
                {title}
            </Text>
            <View className = "bg-cyan-200 w-full h-12 rounded-2xl items-center shadow">
                <TextInput 
                    className = "ml-5 flex-1 font-lsemibold text-base w-full pr-5"
                    value = {value}
                    placeholder = {placeholder}
                    onChangeText = {handleChangeText}
                /> 
            </View>
        </View>
    )
}

export default FormField
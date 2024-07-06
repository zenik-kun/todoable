import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
    return (
        <TouchableOpacity
            onPress = {handlePress}
            activeOpacity = {0.7}
            className = {`bg-cyan-200 m-auto m- shadow rounded-2xl justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
            disabled = {isLoading}
        >
            <Text className = {`font-lsemibold text-lg p-2 ${textStyles}`}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton
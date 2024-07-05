
import React from 'react'
import { Stack, Tabs } from 'expo-router';

const ScreensLayout = () => {
    return (
        <>
            <Tabs>
                <Tabs.Screen name = "home"/>
                <Tabs.Screen name = "task"/>
            </Tabs>
        </>
    )
}

export default ScreensLayout

import React, { useEffect } from 'react'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        "Lexend-Black": require("../assets/fonts/Lexend-Black.ttf"),
        "Lexend-Bold": require("../assets/fonts/Lexend-Bold.ttf"),
        "Lexend-ExtraBold": require("../assets/fonts/Lexend-ExtraBold.ttf"),
        "Lexend-ExtraLight": require("../assets/fonts/Lexend-ExtraLight.ttf"),
        "Lexend-Light": require("../assets/fonts/Lexend-Light.ttf"),
        "Lexend-Medium": require("../assets/fonts/Lexend-Medium.ttf"),
        "Lexend-Regular": require("../assets/fonts/Lexend-Regular.ttf"),
        "Lexend-SemiBold": require("../assets/fonts/Lexend-SemiBold.ttf"),
        "Lexend-Thin": require("../assets/fonts/Lexend-Thin.ttf")
    });

    useEffect(() => {
        if (error) throw error;

        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) {
        return null;
    }

    return (
        <Stack>
            <Stack.Screen name = "index" options = {{ headerShown: false }}/>
        </Stack>
    );
};

export default RootLayout

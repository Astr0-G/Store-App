import { StatusBar } from "expo-status-bar"
import HomeScreen from "./src/Screens/HomeScreen"
import { NativeBaseProvider, Box, Text } from "native-base"
export default function App() {
    return (
        <NativeBaseProvider>
            <HomeScreen />
        </NativeBaseProvider>
    )
    // return
}

import { StatusBar } from "expo-status-bar"
import ProfileScreen from "./src/Screens/ProfileScreen"
import { NativeBaseProvider, Box, Text } from "native-base"
export default function App() {
    return (
        <NativeBaseProvider>
            <ProfileScreen />
        </NativeBaseProvider>
    )
    // return
}

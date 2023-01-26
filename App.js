import { StatusBar } from "expo-status-bar"
import NotVerifyScreen from "./src/Screens/NotVerifyScreen"
import { NativeBaseProvider, Box, Text } from "native-base"
export default function App() {
    return (
        <NativeBaseProvider>
            <NotVerifyScreen />
        </NativeBaseProvider>
    )
    // return
}

import { StatusBar } from "expo-status-bar"
import SingleProductPage from "./src/Screens/SingleProductPage"
import { NativeBaseProvider, Box, Text } from "native-base"
export default function App() {
    return (
        <NativeBaseProvider>
            <SingleProductPage />
        </NativeBaseProvider>
    )
    // return
}

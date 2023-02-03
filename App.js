import { StatusBar } from "expo-status-bar"
import CartScreen from "./src/Screens/CartScreen"
import { NativeBaseProvider, Box, Text } from "native-base"
export default function App() {
    return (
        <NativeBaseProvider>
            <CartScreen />
        </NativeBaseProvider>
    )
    // return
}

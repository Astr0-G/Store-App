import { Box, Center, Image, VStack, Button } from "native-base"
import Buttonone from "../Components/Buttonone.js"
import React from "react"
import Colors from "../colors"
function NotVerifyScreen() {
    return (
        <Box flex={1} bg="#938728" safeAreaTop>
            <Center w="full" h={250}>
                <Image source={require("../../assets/favicon.png")} alt="Logo" size="lg" />
            </Center>
            <VStack space={6} px={5} alignItems="center">
                <Buttonone bg={Colors.black} color={Colors.white}>
                    REGISTER
                </Buttonone>
                <Buttonone bg={Colors.white} color={Colors.black}>
                    REGISTER
                </Buttonone>
            </VStack>
        </Box>
    )
}

export default NotVerifyScreen

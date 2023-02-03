import { Box, Center, Text } from "native-base"
import React, { Component } from "react"
import Colors from "../colors"
import { FontAwesome } from "@expo/vector-icons"
import Buttonone from "./Buttonone"

const CartEmpty = () => {
    return (
        <Box flex={1}>
            <Center h="90%">
                <Center w={200} h={200} bg={Colors.white} rounded="full">
                    <FontAwesome name="shopping-basket" size={64} color={Colors.main} />
                </Center>
                <Text color={Colors.black} bold mt={5}>
                    CART IS EMPTY
                </Text>
            </Center>
            <Buttonone bg={Colors.black} color={Colors.white}>
                START SHOPPING
            </Buttonone>
        </Box>
    )
}

export default CartEmpty

import { Text, Box, Center, ScrollView } from "native-base"
import CartEmpty from "../Components/CartEmpty"
import React from "react"
import Colors from "../colors"
import Cartitems from "../Components/Cartitems"

function CartScreen() {
    return (
        <Box flex={1} safeAreaTop bg={Colors.palegreen}>
            {/* Header */}
            <Center w="full" py={5}>
                <Text color={Colors.black} fontSize={20} bold>
                    Cart
                </Text>
            </Center>
            {/* IF CART IS EMPTY */}
            {/* <CartEmpty /> */}
            {/* CART ITEMS */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <Cartitems />
            </ScrollView>
        </Box>
    )
}

export default CartScreen

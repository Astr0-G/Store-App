import { Text, Box, Center, ScrollView, HStack, Button } from "native-base"
import CartEmpty from "../Components/CartEmpty"
import React from "react"
import Colors from "../colors"
import Cartitems from "../Components/Cartitems"
import Buttonone from "../Components/Buttonone"

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
                {/* buttons */}
                {/* Total */}
                <Center mt={5}>
                    <HStack
                        rounded={50}
                        justifyContent="space-between"
                        bg={Colors.white}
                        shadow={2}
                        w="90%"
                        pl={5}
                        h={45}
                        alignItems="center"
                    >
                        <Text>Total</Text>
                        <Button
                            px={10}
                            h={45}
                            rounded={50}
                            bg={Colors.main}
                            bold
                            _text={{ color: Colors.white, fontWeight: "semibold" }}
                        >
                            $356
                        </Button>
                    </HStack>
                </Center>

                {/* checkout */}
                <Center px={5}>
                    <Buttonone bg={Colors.black} color={Colors.white} mt={10}>
                        CHECKOUT
                    </Buttonone>
                </Center>
            </ScrollView>
        </Box>
    )
}

export default CartScreen

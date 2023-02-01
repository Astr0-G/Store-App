import { Flex, ScrollView, Text, Pressable } from "native-base"
import React from "react"
import Colors from "../colors"
import products from "../data/products"
function HomeProducts() {
    return (
        <ScrollView flex={1}>
            <Flex flexWarp="wrap" dirction="row" justifyContent="space-between" px={6}>
                {products.map((product) => (
                    <Text>{product.name}</Text>
                    // <Pressable key={product._id} w="47%" bg={Colors.white}></Pressable>
                ))}
            </Flex>
        </ScrollView>
    )
}

export default HomeProducts

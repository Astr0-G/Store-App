import { Flex, ScrollView, Image, Text, Box, Pressable, Heading } from "native-base"
import React from "react"
import Colors from "../colors"
import products from "../data/products"
function HomeProducts() {
    return (
        <ScrollView flex={1}>
            <Flex flexWrap="wrap" direction="row" justifyContent="space-between" px={6}>
                {products.map((product) => (
                    // <Text>{product.name}</Text>
                    <Pressable
                        key={product._id}
                        w="47%"
                        bg={Colors.white}
                        rounded="md"
                        shadow={2}
                        pt={0.3}
                        my={3}
                        pb={2}
                        overflow="hidden"
                    >
                        <Image
                            source={{ uri: product.image }}
                            alt={product.name}
                            w="full"
                            h={24}
                            resizeMode="contain"
                        />
                        <Box px={4} pt={1}>
                            <Heading size="sm" bold>
                                {product.price}
                            </Heading>
                        </Box>
                    </Pressable>
                ))}
            </Flex>
        </ScrollView>
    )
}

export default HomeProducts

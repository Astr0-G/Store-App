import { Text, Image, View, Heading, Box, ScrollView } from "native-base"
import React from "react"
import Colors from "../colors"

function SingleProductPage() {
    return (
        <Box safeArea flex={1} bg={Colors.white}>
            <ScrollView px={5} showsVerticalScrollIndicator={false}>
                <Image
                    source={require("../../assets/favicon.png")}
                    alt="Image"
                    w="full"
                    h={300}
                    resizeMode="contain"
                />
                <Heading bold fontSize={15}>
                    New Adidas shoe
                </Heading>
            </ScrollView>
        </Box>
    )
}

export default SingleProductPage

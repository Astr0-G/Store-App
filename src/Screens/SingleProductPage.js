import { Text, Image, HStack, Spacer, Heading, Box, ScrollView } from "native-base"
import React, { useState } from "react"
import Colors from "../colors"
import Rating from "../Components/Rating"
import NumericInput from "react-native-numeric-input"
import Buttonone from "../Components/Buttonone"

function SingleProductPage() {
    const [value, setValue] = useState(0)
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
                <Heading bold fontSize={15} mb={2} lineHeight={22}>
                    New Adidas shoe from Amazon Shop
                </Heading>
                <Rating value={4} />
                <HStack space={2} alignItems="center" my={5}>
                    <NumericInput
                        value={value}
                        totalWidth={140}
                        totalHeight={30}
                        iconSize={24}
                        step={1}
                        maxValue={15}
                        minValue={0}
                        borderColor={Colors.black}
                        rounded
                        textColor={Colors.black}
                        iconStyle={{ color: Colors.white }}
                        rightButtonBackgroundColor={Colors.black}
                        leftButtonBackgroundColor={Colors.black}
                    />
                    <Spacer />
                    <Heading bold color={Colors.black} fontSize={19}>
                        $400
                    </Heading>
                </HStack>
                <Text lineHeight={24} fontSize={12}>
                    234
                </Text>
                <Buttonone bg={Colors.darkred} color={Colors.white} mt={10}>
                    Add to Cart
                </Buttonone>
            </ScrollView>
        </Box>
    )
}

export default SingleProductPage

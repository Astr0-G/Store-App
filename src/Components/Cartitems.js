import React from "react"
import { SwipeListView } from "react-native-swipe-list-view"
import products from "../data/products"
import { Box, Pressable, Text, Center, HStack, VStack, Image } from "native-base"
import Colors from "../colors"
import { FontAwesome } from "@expo/vector-icons"

const Swiper = () => (
    <SwipeListView
        rightOpenValue={-50}
        previewRowKey="0"
        previewOpenValue={-40}
        previewOpenDelay={3000}
        data={products.slice(0, 2)}
        renderHiddenItem={renderHiddenItems}
        renderItem={renderItems}
        showsVerticalScrollIndicator={false}
    />
)

const renderItems = (data, rowMap) => (
    <Pressable>
        <Box ml={6} mb={3}>
            <HStack
                alignItems="center"
                bg={Colors.white}
                shadow={1}
                rounded={10}
                overflow="hidden"
            >
                <Center w="24%" bg={Colors.black}>
                    <Image
                        source={{ uri: data.item.image }}
                        alt={data.item.name}
                        w="full"
                        h={24}
                        resizeMode="contain"
                    />
                    <VStack w="60%" px={2} space={2}>
                        <Text isTruncated color={Colors.black} bold fontSize={14}>
                            {data.item.name}
                        </Text>
                        <Text bold color={Colors.black}>
                            ${data.item.price}
                        </Text>
                    </VStack>
                </Center>
            </HStack>
        </Box>
    </Pressable>
)
//

const renderHiddenItems = (data) => (
    <Pressable
        w="50"
        roundedTopRight={10}
        roundedBottomRight={10}
        h="88%"
        ml="auto"
        justifyContent="center"
        bg={Colors.black}
    >
        <Center alignItems="center" space={2}>
            <FontAwesome name="trash" size={24} color={Colors.white} />
        </Center>
    </Pressable>
)
const Cartitems = () => {
    return (
        <Box mr={6}>
            <Swiper />
        </Box>
    )
}

export default Cartitems

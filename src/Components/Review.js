import { Box, CheckIcon, FormControl, Heading, Text, VStack, Select, TextArea } from "native-base"
import React, { useState } from "react"
import Colors from "../colors"
import Buttonone from "./Buttonone"
import Message from "./Notifications/Message"
import Rating from "./Rating"

function Review() {
    const [ratings, setRatings] = useState("")
    return (
        <Box my={9}>
            <Heading bold fontSize={15} mb={2}>
                REVIEW
            </Heading>
            {/* IF THERE IS NO REVIEW*/}
            <Message color={Colors.black} bg={Colors.main} bold children={"NO REVIEW"} />
            {/* REVIEW*/}
            <Box p={3} bg={Colors.palegreen} mt={5} rounded={5}>
                <Heading fontSize={15} color={Colors.black}>
                    User Doe
                </Heading>
                <Rating value={4} />
                <Text my={2} fontSize={11}>
                    Jan 12 2023
                </Text>
                <Message
                    color={Colors.black}
                    bg={Colors.white}
                    size={10}
                    children={"This is so useful! Recommend!!!!"}
                />
            </Box>
            {/* WRITE REVIEW */}
            <Box mt={6}>
                <Heading fontSize={15} color={Colors.black} mb={4}>
                    REVIEW THIS PRODUCT
                </Heading>
                <VStack space={6}>
                    <FormControl>
                        <FormControl.Label
                            _text={{ fontSize: "12px", fontWeight: "bold", color: Colors.black }}
                        >
                            Rating
                        </FormControl.Label>
                        <Select
                            bg={Colors.subGreen}
                            borderWidth={0}
                            rounded={5}
                            py={4}
                            placeholder="Choose Rate"
                            _selectedItem={{
                                bg: Colors.subGreen,
                                endIcon: <CheckIcon size={5} />,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            selectedValue={ratings}
                            onValueChange={(e) => setRatings(e)}
                        >
                            <Select.Item label="Poor" value="1" />
                            <Select.Item label="Fair" value="2" />
                            <Select.Item label="Good" value="3" />
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label _text={{ fontSize: "12px", fontWeight: "bold" }}>
                            Comment
                        </FormControl.Label>
                        <TextArea
                            h={24}
                            w="full"
                            placeholder="This product is good ..."
                            borderWidth={0}
                            bg={Colors.palegreen}
                            py={4}
                            _focus={{ bg: Colors.palegreen }}
                        />
                    </FormControl>
                    <Buttonone bg={Colors.darkred} color={Colors.white}>
                        SUBMIT
                    </Buttonone>
                    {/* IF NOT LOGIN */}
                    <Message
                        color={Colors.white}
                        bg={Colors.black}
                        children={"Please 'LOGIN' to review this product"}
                    />
                </VStack>
            </Box>
        </Box>
    )
}

export default Review

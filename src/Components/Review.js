import { Box, Heading, Text } from "native-base"
import React from "react"
import Colors from "../colors"
import Message from "./Notifications/Message"
import Rating from "./Rating"

function Review() {
    return (
        <Box my={9}>
            <Heading bold fontSize={15} mb={2}>
                REVIEW
            </Heading>
            {/* IF THERE IS NO REVIEW*/}
            {/* REVIEW*/}
            <Box p={3} bg={Colors.palegreen} mt={5} rounded={5}>
                <Heading fontSize={15} color={Colors.black}>
                    User Doe
                </Heading>
                <Rating value={4} />
                <Text mb={3}>Jan 12 2023</Text>
                <Message
                    color={Colors.black}
                    bg={Colors.white}
                    size={12}
                    children={
                        "awjhdssergsdfgbsdfgbesrbysrdtbsertbsegfjhasdgfjasdfvasdjvfhsagvfjsahdgvfsh"
                    }
                />
            </Box>
        </Box>
    )
}

export default Review

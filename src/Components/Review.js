import { Box, Heading } from "native-base"
import React from "react"
import Colors from "../colors"

function Review({ mt, bg, color, children, onPress }) {
    return (
        <Box my={9}>
            <Heading bold fontSize={15} mb={2}>
                REVIEW
            </Heading>
            {/* IF THERE IS NO REVIEW*/}
            {/* REVIEW*/}
            <Box p={3} bg={Colors.deepestGray} mt={5} rounded={5}>
                <Heading fontSize={15} color={Colors.black}>
                    User Doe
                </Heading>
            </Box>
        </Box>
    )
}

export default Review

import React from "react"
import Colors from "../../colors"
import { Box, ScrollView, VStack, Input, FormControl } from "native-base"

const Profile = () => {
    return (
        <Box h="full" bg={Colors.white} px={5}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <VStack space={10} mt={5} pb={10}>
                    <FormControl>
                        <FormControl.Label
                            _text={{
                                fontSize: "12px",
                                fontweight: "bold",
                            }}
                        >
                            USERNAME
                        </FormControl.Label>
                        <Input
                            borderWidth={0}
                            bg={Colors.palegreen}
                            py={3}
                            color={Colors.main}
                            fontSize={20}
                        />
                    </FormControl>
                </VStack>
            </ScrollView>
        </Box>
    )
}

export default Profile

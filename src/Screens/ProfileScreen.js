import { Text, Center, Image, Heading } from "native-base"
import React from "react"
import Colors from "../colors"

function ProfileScreen() {
    return (
        <>
            <Center bg={Colors.palegreen} pt={10} pb={6}>
                <Image
                    source={{ uri: "https://i03piccdn.sogoucdn.com/3b190d19e1297e73" }}
                    alt="profile"
                    w={24}
                    h={24}
                    resizeMode="cover"
                />
                <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
                    Admin Doe
                </Heading>
                <Text italic fontSize={10} isTruncated my={2} color={Colors.white}>
                    Joined Dec 12 2022
                </Text>
            </Center>
        </>
    )
}

export default ProfileScreen

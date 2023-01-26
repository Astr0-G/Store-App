import { Box, Heading, Image, Input, Button, Text, Pressable, View, VStack } from "native-base"
import React from "react"
import Colors from "../colors"
import { MaterialIcons, FontAwesome, Ionicons } from "@expo/vector-icons"
function RegisterScreen() {
    return (
        <Box flex={1} bg={Colors.black}>
            <Image
                flex={1}
                alt="Logo"
                resizeMode="cover"
                size="lg"
                w="full"
                source={require("../../assets/splash.png")}
            />
            <Box w="full" h="full" position="absolute" top="0" px="6" justifyContent="center">
                <Heading>LOGIN</Heading>

                <VStack space={5} pt="6">
                    {/* userName */}
                    <Input
                        InputLeftElement={
                            <FontAwesome name="user" size={20} color={Colors.black} />
                        }
                        variant="underlined"
                        placeholder="John Joe"
                        w="70%"
                        pl={2}
                        color={Colors.black}
                    ></Input>
                    {/* Email */}
                    <Input
                        InputLeftElement={
                            <MaterialIcons name="email" size={20} color={Colors.black} />
                        }
                        variant="underlined"
                        placeholder="user@gmail.com"
                        w="70%"
                        pl={2}
                        color={Colors.black}
                    ></Input>
                    {/* Passwod */}
                    <Input
                        InputLeftElement={<Ionicons name="eye" size={20} color={Colors.black} />}
                        variant="underlined"
                        placeholder="********"
                        type="password"
                        w="70%"
                        pl={2}
                        color={Colors.black}
                    ></Input>
                </VStack>
                <Button
                    my={30}
                    w="40%"
                    rounded={50}
                    bg={Colors.black}
                    _pressed={{ bg: Colors.white }}
                >
                    SIGN UP
                </Button>
                <Pressable mt={4}>
                    <Text color={Colors.black}>Sign Up</Text>
                </Pressable>
            </Box>
        </Box>
    )
}

export default RegisterScreen

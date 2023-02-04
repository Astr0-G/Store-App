import { View, Text, useWindowDimensions } from "react-native"
import React, { useState } from "react"
import { SceneMap } from "react-native-tab-view"
import Profile from "./Profile"
import Order from "./Order"

const renderScene = SceneMap({
    first: Profile,
    second: Order,
})
export default function Tabs() {
    const layout = useWindowDimensions()
    const [index, setIndex] = useState(0)
    const [routes] = useState([
        { key: "first", title: "PROFILE" },
        { key: "second", title: "ORDER" },
    ])
    return (
        <View>
            <Text>Tabs</Text>
        </View>
    )
}

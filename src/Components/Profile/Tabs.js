import { View, Text, useWindowDimensions, StyleSheet } from "react-native"
import React, { useState } from "react"
import { SceneMap, TabView, TabBar } from "react-native-tab-view"
import Profile from "./Profile"
import Order from "./Order"
import Colors from "../../colors"

const renderScene = SceneMap({
    first: Profile,
    second: Order,
})
function Tabs() {
    const layout = useWindowDimensions()
    const [index, setIndex] = useState(0)
    const [routes] = useState([
        { key: "first", title: "PROFILE" },
        { key: "second", title: "ORDER" },
    ])
    const renderTabsBar = (props) => (
        <TabBar
            {...props}
            tabStyle={styles.tabStyle}
            indicatorStyle={{ backgroundColor: Colors.black }}
            activeColor={Colors.main}
            inactiveColor={Colors.white}
            renderLabel={({ route, color }) => (
                <Text style={{ color, ...styles.text }}>{route.title}</Text>
            )}
        />
    )
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabsBar}
        />
    )
}

const styles = StyleSheet.create({
    tabStyle: { backgroundColor: "black" },
    text: { fontSize: 13, fontWeight: "bold" },
})

export default Tabs

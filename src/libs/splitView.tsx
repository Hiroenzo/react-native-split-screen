import React from "react";
import {StyleSheet, View, ViewStyle} from "react-native";

type SplitViewType = {
    master: React.ReactElement
    detail: React.ReactElement
    containerStyle?: ViewStyle,
    masterStyle?: ViewStyle,
    detailStyle?: ViewStyle,
}

const SplitView = ({ master, detail, containerStyle, masterStyle, detailStyle }: SplitViewType) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <View style={[styles.masterView, masterStyle]}>{master}</View>
            <View style={[styles.detailView, detailStyle]}>{detail}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'row' },
    masterView: {
        flex: 1,
        maxWidth: 400,
        borderRightWidth: 1,
    },
    detailView: {
        flex: 1,
        overflow: 'hidden',
    },
})

export default SplitView

import React from "react"
import { View, Text, Button, StyleSheet, TextInput, StatusBar } from "react-native"
import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';

import { colors } from "../utils/colors";

const HomeScreen = ({ navigation }) => {

    return (
        <SafeAreaProvider style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor={colors.white}
                barStyle={"default"}
                showHideTransition={"fade"}
                hidden={true}
            />
            <SafeAreaView>
                <Text>
                    HomeScreen

                </Text>
                <Button
                    title="Click Here"
                    onPress={() => { alert('Button Clicked!') }}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    )
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white
    }
})
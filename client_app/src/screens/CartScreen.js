import React from "react"
import { View, Text, Button, StyleSheet, TextInput } from "react-native"
import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';
import { colors } from '../utils/colors';

const CartScreen = ({ navigation }) => {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');

    return (
        <SafeAreaProvider style={styles.container}>
            <SafeAreaView >
                <Text>
                    CartScreen
                </Text>
                <Button
                    title="Click Here"
                    onPress={() => { alert('Button Clicked!') }}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    )
};

export default CartScreen;

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white
    }
})
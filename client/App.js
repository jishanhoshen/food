import React, { useEffect } from "react"
import { View, Text, Button, BackHandler, Alert, StatusBar } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors } from './src/utils/colors';

import CustomTabs from "./src/navigation/tabs";
import SearchScreen from "./src/screens/SearchScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function EmptyScreen() {
    return <View />;
}

function Home({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            />
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate('Settings')}
            />
        </View>
    );
}

function HomeTabs() {
    return (
        <CustomTabs />
    );
}

const App = () => {

    useEffect(() => {
        const backAction = () => {
            Alert.alert('Hold on!', 'Are you sure you want to close App?', [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                },
                { text: 'YES', onPress: () => BackHandler.exitApp() },
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, []);
    return (
        <NavigationContainer>
            <StatusBar
                animated={true}
                hidden={true}
            />
            <Stack.Navigator>
                <Stack.Screen name="Main" component={SearchScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Profile" component={EmptyScreen} />
                <Stack.Screen name="Settings" component={EmptyScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default App;

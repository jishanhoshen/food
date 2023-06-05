import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import CartScreen from "../screens/CartScreen";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from '../utils/colors';

const Tab = createBottomTabNavigator();

const focusedColor = '#FFFFFF';


const CustomTabs = (navigation) => {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: { ...styles.shadow, ...styles.tabBar }
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        borderBottomColor: focused ? colors.white : colors.pinkLove,
                        ...styles.iconContainer
                    }}>
                        {
                            focused ? (
                                <View style={{
                                    ...styles.centerIcon, ...styles.shadow, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.pinkLove
                                }}>
                                    <Icon name={focused ? "home" : "home-outline"} size={25} color={colors.pinkLove} />
                                </View>
                            ) : (
                                <Icon name={focused ? "home" : "home-outline"} size={25} color={colors.white} />
                            )
                        }
                    </View>
                ),
                headerShown: false
            }} />
            <Tab.Screen name="Search" component={SearchScreen}
                options={{
                    tabBarHideOnKeyboard: true,
                    tabBarStyle: { display: "none" },
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            borderBottomColor: focused ? colors.white : colors.pinkLove,
                            ...styles.iconContainer
                        }}>
                            {
                                focused ? (
                                    <View
                                        onPress={() => navigation.navigate('Settings')}
                                        style={{
                                            ...styles.centerIcon, ...styles.shadow, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.pinkLove
                                        }}>
                                        <Icon name={focused ? "search" : "search-outline"} size={25} color={colors.pinkLove} />
                                    </View>
                                ) : (
                                    <Icon name={focused ? "search" : "search-outline"} size={25} color={colors.white} />
                                )
                            }
                        </View>
                    ),
                    headerShown: false
                }} />
            < Tab.Screen name="Profile" component={CartScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        borderBottomColor: focused ? colors.white : colors.pinkLove,
                        ...styles.iconContainer
                    }}>
                        {
                            focused ? (
                                <View style={{
                                    ...styles.centerIcon, ...styles.shadow, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.pinkLove
                                }}>
                                    <Icon name={focused ? "cart" : "cart-outline"} size={25} color={colors.pinkLove} />
                                </View>
                            ) : (
                                <Icon name={focused ? "cart" : "cart-outline"} size={25} color={colors.white} />
                            )
                        }
                    </View>
                ),
                headerShown: false
            }} />
        </Tab.Navigator >
    )
};

export default CustomTabs;

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 15,
        left: 10,
        right: 10,
        elevation: 0,
        backgroundColor: colors.pinkLove,
        borderRadius: 15,
        height: 60,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
    },
    centerIcon: {
        position: 'relative',
        top: -25,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    }
});

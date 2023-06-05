import React from "react"
import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    BackHandler,
    Alert,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    Keyboard,
    ImageBackground
} from "react-native"
import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';

import Icon from "react-native-vector-icons/Ionicons";
import { colors } from '../utils/colors';



const SearchScreen = ({ navigation }) => {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);

    React.useEffect(() => {
        const backAction = () => {
            navigation.navigate('Home')
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true); // or some other action
                console.log('====================================');
                console.log('Keyboard open');
                console.log('====================================');
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false); // or some other action
                console.log('====================================');
                console.log('Keyboard Close');
                console.log('====================================');
            }
        );


        return () => {
            backHandler.remove();
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        }
    }, []);


    return (
        <SafeAreaProvider style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor={colors.pinkLove}
                barStyle={"default"}
                showHideTransition={"fade"}
                hidden={false}
            />
            <SafeAreaView style={styles.container}>
                <View style={styles.headerArea}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
                            <Icon name={"arrow-back-outline"} size={25} color={colors.white} />
                        </TouchableOpacity>
                        <View style={styles.searchBox}>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeText}
                                value={text}
                                placeholder="Search"
                                placeholderTextColor={colors.placeholder}
                                autoCapitalize="words"
                                cursorColor={colors.pinkLove}
                                autoFocus={true}
                                returnKeyType="search"
                            />
                        </View>
                        <TouchableOpacity style={styles.backButton} onPress={() => {
                            Alert.alert('hello', 'hey man');
                        }}>
                            <Icon name={"options-outline"} size={25} color={colors.white} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.searchArea}>
                    {
                        isKeyboardVisible ? (
                            <ScrollView>
                                <View style={styles.searchResultItem}>
                                    <ImageBackground source={""}>
                                    </ImageBackground>
                                </View>
                                <View style={{ ...styles.box, ...styles.colorBlue }}></View>
                                <View style={{ ...styles.box, ...styles.colorBlue }}></View>
                                <View style={{ ...styles.box, ...styles.colorBlue }}></View>
                                <View style={{ ...styles.box, ...styles.colorBlue }}></View>
                                <View style={{ ...styles.box, ...styles.colorBlue }}></View>
                                <View style={{ ...styles.box, ...styles.colorBlue }}></View>
                                <View style={{ ...styles.box, ...styles.colorBlue }}></View>
                                <View style={{ ...styles.box, ...styles.colorBlue }}></View>
                                <View style={{ ...styles.box, ...styles.colorBlue }}></View>
                                <View style={{ ...styles.box, ...styles.colorBlue }}></View>
                            </ScrollView>
                        ) : (
                            <View style={styles.searchResult}>
                                <ScrollView>
                                    <View style={{ ...styles.box, ...styles.colorRed }}></View>
                                    <View style={{ ...styles.box, ...styles.colorRed }}></View>
                                    <View style={{ ...styles.box, ...styles.colorRed }}></View>
                                    <View style={{ ...styles.box, ...styles.colorRed }}></View>
                                    <View style={{ ...styles.box, ...styles.colorRed }}></View>
                                    <View style={{ ...styles.box, ...styles.colorRed }}></View>
                                    <View style={{ ...styles.box, ...styles.colorRed }}></View>
                                    <View style={{ ...styles.box, ...styles.colorRed }}></View>
                                    <View style={{ ...styles.box, ...styles.colorRed }}></View>
                                    <View style={{ ...styles.box, ...styles.colorRed }}></View>
                                </ScrollView>
                            </View>
                        )
                    }
                </View>

            </SafeAreaView>
        </SafeAreaProvider>
    )
};

export default SearchScreen;

const styles = StyleSheet.create({
    backButton: {
        width: 40,
    },
    box: {
        height: 100,
        width: 100,
        margin: 10
    },
    colorRed: {
        backgroundColor: "red",
    },
    colorBlue: {
        backgroundColor: "blue",
    },
    headerArea: {
        backgroundColor: colors.pinkLove,
        height: 60,
        paddingHorizontal: 20,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
    },
    input: {
        margin: 10,
        borderColor: colors.white,
        backgroundColor: colors.white,
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
        flex: 1,
        borderRadius: 50,
        fontSize: 16,
        color: colors.black
    },
    searchArea: {
        flex: 1
    },
    searchResult: {
        backgroundColor: colors.white,
        flex: 1,
    },
    searchBox: {
        flex: 1,
    },
    container: {
        backgroundColor: colors.white,
        flex: 1,
    },
    searchResultItem:{
        backgroundColor: "red",
        height: 200,
        width: '100%'
    }
})
import * as React from 'react';
import {StyleSheet} from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const MusicRoute = () => <SafeAreaView style={styles.container}><Text>Music</Text></SafeAreaView>;

const AlbumsRoute = () => <SafeAreaView style={styles.container}><Text>Albums</Text></SafeAreaView>;

const RecentsRoute = () => <SafeAreaView style={styles.container}><Text>Recents</Text></SafeAreaView>;

const NotificationsRoute = () => <SafeAreaView style={styles.container}><Text>Notifications</Text></SafeAreaView>;

const App = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
        { key: 'albums', title: 'Albums', focusedIcon: 'album' },
        { key: 'recents', title: 'Recents', focusedIcon: 'history' },
        { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
        notifications: NotificationsRoute,
    });

    return (
        <SafeAreaProvider>
            <BottomNavigation
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
            />
        </SafeAreaProvider>

    );
};

export default App;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
});
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import CartScreen from '../screens/CartScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import OderHistoryScreen from '../screens/OderHistoryScreen';
import { COLORS } from '../theme/theme';
import { BlurView } from '@react-native-community/blur';
import CustomIcon from '../components/CustomIcon';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBarStyle,
                tabBarBackground: () => (
                    <BlurView overlayColor="" blurAmount={15} style={styles.BluerViewStyles} />
                ),
            }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ focused, color, size }) => (<CustomIcon
                    name="home"
                    size={25}
                    color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />)
            }} />
            <Tab.Screen name="Cart" component={CartScreen} options={{
                tabBarIcon: ({ focused, color, size }) => (<CustomIcon
                    name="cart"
                    size={25}
                    color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />)
            }} />
            <Tab.Screen name="Favorite" component={FavoritesScreen} options={{
                tabBarIcon: ({ focused, color, size }) => (<CustomIcon
                    name="like"
                    size={25}
                    color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />)
            }} />
            <Tab.Screen name="History" component={OderHistoryScreen} options={{
                tabBarIcon: ({ focused, color, size }) => (<CustomIcon
                    name="bell"
                    size={25}
                    color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />)
            }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    BluerViewStyles: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    tabBarStyle: {
        height: 80,
        position: 'absolute',
        backgroundColor: COLORS.primaryBlackRGBA,
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: 'transparent'
    },

})
export default TabNavigator;
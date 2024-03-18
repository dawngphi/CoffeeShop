import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../theme/theme';
import LottieView from 'lottie-react-native';

interface PopupAnimationProps {
    style: any;
    source:any;
}

const PopupAnimation:React.FC<PopupAnimationProps> = ({style, source}) => {
  return (
    <View style = {styles.LottieAnimationContainer}>
      <LottieView style = {style} source={source} autoPlay loop = {false}/>
    </View>
  )
}

export default PopupAnimation

const styles = StyleSheet.create({
    LottieAnimationContainer:{
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: COLORS.primaryBlackRGBA,
        justifyContent: 'center',
    },
})
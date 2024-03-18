import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { COLORS, SPACING } from '../theme/theme'

const ProfilePic = () => {
  return (
    <View style = {styles.ImageContainer}>
      <Image source={require('../assets/app_images/avatar.png')} style = {styles.Image}></Image>
    </View>
  )
}

const styles = StyleSheet.create({
    Image:{
        height: SPACING.space_36,
        width: SPACING.space_36,
    },
    ImageContainer: {
        height: SPACING.space_36,
        width: SPACING.space_36,
        borderRadius: SPACING.space_12,
        borderWidth: 2,
        borderColor: COLORS.secondaryDarkGreyHex,
        alignItems: 'center',
        justifyContent : 'center',
        overflow: 'hidden',
    },
})

export default ProfilePic;
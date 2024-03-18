import React from 'react'
import { Dimensions, ImageBackground, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';
import BGIcon from './BGIcon';
const CARD_WIDRH = Dimensions.get('window').width * 0.32;

interface CoffeeCartProps {
    id: string;
    index: string;
    type: string;
    roasted: string;
    imagelink_square: ImageProps;
    name: string;
    special_ingredient: string;
    average_rating: number;
    price: any;
    buttonPressHandler: any;
}


const CoffeeCart: React.FC<CoffeeCartProps> = ({ id, index, type, roasted, imagelink_square, name, special_ingredient, average_rating, price, buttonPressHandler }) => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.CardLinearGradientContainer}
            colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
            <ImageBackground
                source={imagelink_square}
                style={styles.CardImageBG}
                resizeMode='cover'>
                    <View style = {styles.CardRatingContainer}>
                        <CustomIcon name= {'star'} color={COLORS.primaryOrangeHex} size={FONTSIZE.size_16}/>
                        <Text style = {styles.CardRatingText}>{average_rating}</Text>
                    </View>
            </ImageBackground>
            <Text style = {styles.CardTitle}>{name}</Text>
            <Text style = {styles.CardSubTitle}>{special_ingredient}</Text>
            <View style = {styles.CardFooterRow}>
                <Text style = {styles.CardPriceCurrency}>$ <Text style = {styles.CardPrice}>{price.price}</Text></Text>
                <TouchableOpacity onPress={() => {buttonPressHandler({id, index, type, roasted, imagelink_square, name, special_ingredient,prices:[{...price,quantity:1}]})} }>
                    <BGIcon color={COLORS.primaryWhiteHex} name={'add'} BGColor = {COLORS.primaryOrangeHex} size={FONTSIZE.size_10}/>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}



const styles = StyleSheet.create({
    CardPrice:{
        color: COLORS.primaryWhiteHex,
    },
    CardPriceCurrency:{
        fontFamily: FONTFAMILY.poppins_semibold,
        color: COLORS.primaryOrangeHex,
        fontSize: FONTSIZE.size_18,
    },
    CardSubTitle:{
        fontFamily: FONTFAMILY.poppins_light,
        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_10,
    },
    CardTitle:{
        fontFamily: FONTFAMILY.poppins_medium,
        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_16,
    },
    CardFooterRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: SPACING.space_15,
    },
    CardRatingText:{
        fontFamily: FONTFAMILY.poppins_medium,
        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_14,
        lineHeight: 22,
    },
    CardRatingContainer:{
        flexDirection: 'row',
        backgroundColor: COLORS.primaryBlackRGBA,
        alignItems: 'center',
        justifyContent: 'center',
        gap: SPACING.space_10,
        paddingHorizontal: SPACING.space_15,
        position: 'absolute',
        borderBottomLeftRadius: BORDERRADIUS.radius_20,
        borderTopRightRadius: BORDERRADIUS.radius_20,
        top: 0,
        right: 0,
    },
    CardImageBG: {
        width: CARD_WIDRH,
        height: CARD_WIDRH,
        borderRadius: BORDERRADIUS.radius_20,
        marginBottom: SPACING.space_15,
        overflow: 'hidden',
    },
    CardLinearGradientContainer: {
        padding: SPACING.space_15,
        borderRadius: BORDERRADIUS.radius_25,
    },
})
export default CoffeeCart;
import { ImageProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageBackGroundInfo from './ImageBackGroundInfo';
import LinearGradient from 'react-native-linear-gradient';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';

interface FavoritesItemCardProps {
    id: string;
    imagelink_portrait: ImageProps;
    name: string;
    special_ingredient: string;
    type: string;
    ingredients: string;
    average_rating: number;
    ratings_count: string;
    roasted: string;
    description: string;
    favourite: boolean;
    ToggleFavouriteItem: any;
}


const FavoritesItemCard: React.FC<FavoritesItemCardProps> = ({ id,
    imagelink_portrait,
    name,
    special_ingredient,
    type,
    ingredients,
    average_rating,
    ratings_count,
    roasted,
    description,
    favourite,
    ToggleFavouriteItem }) => {
    return (
        <View style={styles.CardContainer}>
            <ImageBackGroundInfo
                EnableBackHandler={false}
                imagelink_portrait={imagelink_portrait}
                type={type}
                id={id}
                favourite={favourite}
                name={name}
                special_ingredient={special_ingredient}
                ingredients={ingredients}
                average_rating={average_rating}
                ratings_count={ratings_count}
                roasted={roasted}
                ToggleFavourite={ToggleFavouriteItem} />
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={[COLORS.primaryDarkGreyHex, COLORS.primaryBlackHex]}
                style={styles.LinearGradientContainer}
            >
                <Text style={styles.DescrpitionTitle}>Descrpition</Text>
                <Text style={styles.DescrpitionText}>{description}</Text>
            </LinearGradient>
        </View>
    )
}

export default FavoritesItemCard

const styles = StyleSheet.create({
    CardContainer: {
        borderRadius: BORDERRADIUS.radius_25,
        overflow: 'hidden'
    },
    DescrpitionTitle: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_16,
        color: COLORS.secondaryLightGreyHex
    },
    DescrpitionText: {
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_14,
        color: COLORS.primaryWhiteHex
    },
    LinearGradientContainer: {
        gap: SPACING.space_10,
        padding: SPACING.space_20,
    },
})
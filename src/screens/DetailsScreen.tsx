import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, TouchableWithoutFeedbackComponent, View } from 'react-native'
import React, {useState} from 'react'
import { useStore } from '../store/store';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import ImageBackGroundInfo from '../components/ImageBackGroundInfo';
import PaymentFooter from '../components/PaymentFooter';

const DetailsScreen = ({navigation, route}: any) => {
  // console.log(route.params);
  const ItemOfIndex = useStore((state: any) => route.params.type == "Coffee" ? state.CoffeeList : state.BeanList)[route.params.index];

  

  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore((state: any) => state.deleteFromFavoriteList);
  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const [price, setPrice] = useState(ItemOfIndex.prices[0])
  const [fullDesc, setFullDesc] = useState(false)

  const ToggleFavourite = (favourite:boolean, type: string, id: string ) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
  }
  const BackHandler = () => {
    navigation.pop();
  };
  const AddToCartHandler = ({id, index, name, roasted, imagelink_square, special_ingredient, type, price}: any) => {
    addToCart({id, index, name, roasted, imagelink_square, special_ingredient, type, prices:[{...price, quantity: 1}],})
    calculateCartPrice();
    navigation.navigate('Cart');
  };

  
  return (
    <View style = {styles.ScreenContainer}>
        <StatusBar backgroundColor={COLORS.primaryBlackHex} />
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle = {styles.ScrollViewFlex}>
            <ImageBackGroundInfo
            EnableBackHandler = {true}
            imagelink_portrait = {ItemOfIndex.imagelink_portrait}
            type = {ItemOfIndex.type}
            id = {ItemOfIndex.id}
            favourite = {ItemOfIndex.favourite}
            name = {ItemOfIndex.name}
            special_ingredient = {ItemOfIndex.special_ingredient}
            ingredients = {ItemOfIndex.ingredients}
            average_rating = {ItemOfIndex.average_rating}
            ratings_count = {ItemOfIndex.ratings_count}
            roasted = {ItemOfIndex.roasted}
            BackHandler = {BackHandler}
            ToggleFavourite = {ToggleFavourite}/>
            <View style = {styles.FooterInfoArea}>
              <Text style = {styles.InfoTitle}>Description</Text>
              {fullDesc ? (
              <TouchableWithoutFeedback onPress={() => {setFullDesc(prev => !prev)}}>
                  <Text style = {styles.DescriptionText}>{ItemOfIndex.description}</Text>
              </TouchableWithoutFeedback>
              ) : (
                <TouchableWithoutFeedback onPress={() => {setFullDesc(prev => !prev)}}>
                <Text numberOfLines={3} style = {styles.DescriptionText}>{ItemOfIndex.description}</Text>
                </TouchableWithoutFeedback>
              )}
              <Text style = {styles.InfoTitle}>Size</Text>
              <View style = {styles.SizeOuterContainer}>
                  {ItemOfIndex.prices.map((data: any) => (
                    <TouchableOpacity key = {data.size} onPress={() => {
                      setPrice(data);
                    }} style = {[styles.SizeBox,
                    {borderColor: data.size == price.size ? COLORS.primaryOrangeHex : COLORS.primaryDarkGreyHex}]}>
                      <Text style = {[styles.SizeText, {fontSize: ItemOfIndex.type == "bean" ? FONTSIZE.size_14 : FONTSIZE.size_16,
                          color: data.size == price.size ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}]}>{data.size}</Text>
                    </TouchableOpacity>
                  ))}
              </View>
            </View>
            <PaymentFooter price={price} buttonTitle = 'Add To Cart' buttonPressHandler={() => {AddToCartHandler({
              id: ItemOfIndex.id,
              index: ItemOfIndex.index,
              name: ItemOfIndex.name,
              roasted: ItemOfIndex.roasted,
              imagelink_square: ItemOfIndex.imagelink_square,
              special_ingredient: ItemOfIndex.special_ingredient,
              type: ItemOfIndex.type,
              price: price,
            })}}/>
        </ScrollView>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  SizeText:{
    fontFamily: FONTFAMILY.poppins_medium,

  },
  SizeBox:{
    flex: 1,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    height: SPACING.space_24 * 2,
    borderRadius: BORDERRADIUS.radius_10,
    borderWidth: 2,
  },
  SizeOuterContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.space_20,
  },
  DescriptionText:{
    letterSpacing: 0.5,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_30,
  },
  InfoTitle:{
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_10,
  },
  FooterInfoArea:{
    padding: SPACING.space_20,
  },
  ScrollViewFlex:{
     flexGrow: 1,
     justifyContent: 'space-between',
  },
  ScreenContainer:{
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
})
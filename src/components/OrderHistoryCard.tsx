import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import OrderItemCard from './OrderItemCard'

interface OrderHistoryCardProps {
    navigationHandler: any,
    CartList: any,
    CartListPrice: string,
    OrderDate: string
}

const OrderHistoryCard: React.FC<OrderHistoryCardProps> = ({ navigationHandler, CartList, CartListPrice, OrderDate }) => {
    return (
        <View style={styles.Contaier}>
            <View style={styles.CardHeader}>
                <View>
                    <Text style={styles.HeaderTitle}>Order Time</Text>
                    <Text style={styles.HeaderSubTitle}>{OrderDate}</Text>
                </View>
                <View style = {styles.PriceContainer}>
                    <Text style={styles.HeaderTitle}>Total Amount</Text>
                    <Text style={styles.HeaderPrice}>${CartListPrice}</Text>
                </View>
            </View>
            <View style = {styles.ListContainer}>
                {
                    CartList.map((data: any, index: any) => (
                        <TouchableOpacity key={index.toString() + data.id} onPress={() => navigationHandler({index: data.index, id: data.id, type: data.type})}>
                            <OrderItemCard 
                            type = {data.type} 
                            name = {data.name} 
                            imagelink_square = {data.imagelink_square}
                            special_ingredient = {data.special_ingredient}
                            prices = {data.prices}
                            ItemPrice = {data.ItemPrice}/>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}

export default OrderHistoryCard

const styles = StyleSheet.create({
    ListContainer:{
        gap: SPACING.space_20,

    },
    HeaderPrice:{
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryOrangeHex,
    },
    PriceContainer:{
        alignItems: 'flex-end',
    },
    HeaderSubTitle:{
        fontFamily: FONTFAMILY.poppins_light,
        fontSize: FONTSIZE.size_16,
        color: COLORS.primaryWhiteHex,
    },
    HeaderTitle:{
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_16,
        color: COLORS.primaryWhiteHex,
    },
    CardHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: SPACING.space_20,
    },
    Contaier:{
        gap: SPACING.space_10,
    },
})
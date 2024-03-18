import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useStore } from '../store/store';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import EmptyListAnimation from '../components/EmptyListAnimation';
import PopupAnimation from '../components/PopupAnimation';
import OrderHistoryCard from '../components/OrderHistoryCard';
const OderHistoryScreen = ({ navigation }: any) => {
  const OrderHistoryList = useStore((state: any) => state.OrderHistoryList);
  const tabBarHeight = useBottomTabBarHeight();
  const [showAnimation, setShowAnimation] = useState(false);

  const navigationHandler = ({ index, id, type }: any) => {
    navigation.push("Details", { index: index, id: id, type: type });

  };

  const buttonPressHandler = () => {
    setShowAnimation(true);
    setTimeout(() => { setShowAnimation(false) }, 2000);
  };
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      {showAnimation ? (<PopupAnimation style={styles.LottieAnimation} source={require('../lottie/download.json')} />) : (<></>)}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View style={[styles.ScrollViewInnerView, { marginBottom: tabBarHeight }]}>
          <View style={styles.ItemContainer}>
            <HeaderBar title="Order History" />
            {OrderHistoryList.length == 0 ? (
              <EmptyListAnimation title={'No Order History'} />
            ) : (
              <View style={styles.ListItemContainer}>
                {
                  OrderHistoryList.map((data: any, index: any) => (
                    <OrderHistoryCard
                      key={index.toString()}
                      navigationHandler={navigationHandler}
                      CartList={data.CartList}
                      CartListPrice={data.CartListPrice}
                      OrderDate={data.OrderDate} />
                  ))
                }
              </View>
            )}
          </View>
          {
            OrderHistoryList.length > 0 ? (
              <TouchableOpacity style={styles.DownloadButton} onPress={() => { buttonPressHandler() }}>
                <Text style={styles.DownloadButtonText}>Download</Text>
              </TouchableOpacity>
            ) : (<></>)
          }
        </View>
      </ScrollView>
    </View>
  )
}

export default OderHistoryScreen

const styles = StyleSheet.create({
  DownloadButtonText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  DownloadButton: {
    margin: SPACING.space_20,
    backgroundColor: COLORS.primaryOrangeHex,
    alignItems: 'center',
    justifyContent: 'center',
    height: SPACING.space_36 * 2,
    borderRadius: SPACING.space_20,
  },
  LottieAnimation: {
    height: 250,
  },
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ItemContainer: {
    flex: 1,
  },
  ListItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20,
  },
})
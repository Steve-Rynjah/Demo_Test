import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from '../styles/styles'
import RNPgReactNativeSDK from 'react-native-pg-react-native-sdk'

export const Cashfree = () =>{

const onPay = () => {
  var env = "PROD"
  var map = {
        "orderId": "Order_no_30",
        "orderAmount": "1",
        "appId": "5459841b139db31088868588c89545",
        "tokenData": "el9JCN4MzUIJiOicGbhJCLiQ1VKJiOiAXe0Jye.vu0nIkdDOxMTYzgjYyMzM2IiOiQHbhN3XiwiN0YDO2IDN2YTM6ICc4VmIsIiUOlkI6ISej5WZyJXdDJXZkJ3biwSM6ICduV3btFkclRmcvJCLiAzMf9mbfJXZkJ3TiojIklkclRmcvJye.9x0FIgPQO9qvP10bK8-o1CDkxtrTuOSlVAXnjVAgrBuyZ8HYeWbJXBilfE9jMnx3CP",
        "orderCurrency": "INR",
        "customerEmail": "cashfree@cashfree.com",
        "customerName": "Cashfree User",
        "customerPhone": "9999999999",
      }

    RNPgReactNativeSDK.startPaymentWEB(map, env, (result) => 
    {
      console.log(result);
                  var obj = JSON.parse(result, function (key, value) 
              {
                console.log(key + "::" + value);
                  // Do something with the result
              })
    });
  }

  return(
    <View style={styles.container}>
      <TouchableOpacity 
      onPress={onPay}
      style={styles.button}>
          <Text style={styles.buttonText}>PAY</Text>
      </TouchableOpacity>
  </View>
  )
}

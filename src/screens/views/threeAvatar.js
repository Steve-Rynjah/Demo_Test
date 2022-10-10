import React from 'react'
import styles from '../styles/styles'
import {Image, View} from 'react-native'

const IMAGE = [
    {
        image: require('../../assets/avatar.png')
    },
    {
        image: require('../../assets/avatar_2.png')
    },
    {
        image: require('../../assets/avatar_3.png')
    }
]

export const ThreeAvatar = () => {
    return(
        <View style={[styles.container, {backgroundColor: '#333'}]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={IMAGE[0].image} resizeMode='contain' style={{width: 75, height: 75, borderRadius: 25}}/>
                <View style={{width: 77.5, height: 77.5, borderWidth:5, borderColor: '#FFF', borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginLeft: -25}}>
                    <Image source={IMAGE[1].image} resizeMode='contain' style={{width: 75, height: 75, borderRadius: 25}}/>
                </View>
                <View style={{width: 77.5, height: 77.5, borderWidth:5, borderColor: '#FFF', borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginLeft: -25}}>
                    <Image source={IMAGE[2].image} resizeMode='contain' style={{width: 75, height: 75, borderRadius: 25}}/>
                </View>
            </View>
        </View>
    )
}
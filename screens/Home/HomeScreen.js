import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function HomeScreen() {
    return (
        <View>
            <Text>Workouts</Text>

            <TouchableOpacity>

            </TouchableOpacity>

        </View>
    )
}

export const HomeScreenOptions = (navData) =>({
    headerTitle:'MAXFIT VIP GYM',
    // headerRight: () => (
       
    // ),
    headerLeft:() => (
        <Image
        style={{width:50,height:50,marginLeft:5}}
        source={{
          uri: 'https://scontent.fcmb7-1.fna.fbcdn.net/v/t1.6435-9/208859872_203169565143798_8794676154000761999_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGzS0RYIPqaGquaNIWACrE20_Q2S3nENy_T9DZLecQ3L9hmojHDul6EJPoCKFilG9psKSVI0nKQljOlfPGS2v2h&_nc_ohc=anlW6cSFcEEAX-OdN0Z&tn=CvZTsjQbeLrMYJCw&_nc_ht=scontent.fcmb7-1.fna&oh=00_AT_-8hrX6Dm_cBrYzBT6ixvsU86B2kD_zZFws28M_A33IQ&oe=620B58BF',
        }}
      />
    )
  })

const styles = StyleSheet.create({})

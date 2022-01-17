import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View,ImageBackground,FlatList, Button } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 
import Colors from '../../constants/Colors';
import * as Animatable from 'react-native-animatable';
import moment from 'moment'

export default function HomeScreen(props) {

    const DAYS = [
        {
            id:'1',
            day:'Monday',
            coverImage:'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        },
        {
            id:'2',
            day:'Tuesday',
            coverImage:'https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        },
        {
            id:'3',
            day:'Wenesday',
            coverImage:'https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        },
        {
            id:'4',
            day:'Thursday',
            coverImage:'https://images.unsplash.com/photo-1434754205268-ad3b5f549b11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80'
        },
        {
            id:'5',
            day:'Friday',
            coverImage:'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80'
        },
        {
            id:'6',
            day:'Saturday',
            coverImage:'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        },
        {
            id:'7',
            day:'Sunday',
            coverImage:'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        },
        
    ]


    const renderItem = ({item}) => {
        return (
            <ImageBackground source={{uri:item.coverImage}} resizeMode="cover" imageStyle={{borderRadius:15,opacity:1}} style={styles.workout} >

            {moment(Date.now()).format('dddd') == item.day ? 
            (
            <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite">
            <TouchableOpacity style={styles.workoutCover}  onPress={() => {
                props.navigation.navigate('DayWorkOut',{
                    day:item.day,
                    coverImage:item.coverImage
                })
                }} >
            <View style={styles.workoutInfo}>
                <Text style={styles.dayName}>{item.day}</Text>
                <Text></Text>
            </View>
            </TouchableOpacity>
            </Animatable.View>
            )
            :
            (
            <TouchableOpacity style={styles.workoutCover}  onPress={() => {props.navigation.navigate('DayWorkOut',{
                day:item.day,
                coverImage:item.coverImage
            })}} >
            <View style={styles.workoutInfo}>
                <Text style={styles.dayName}>{item.day}</Text>
                <Text></Text>
            </View>
            </TouchableOpacity>)
            
            }
            </ImageBackground>

        )
    }

    return (
        <View>
            
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Workouts</Text>
            </View>

            {/* List items */}
            <FlatList
                data={DAYS}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                style={{marginBottom:100,marginLeft:10}}
            />

         
        </View>
    )
}

export const HomeScreenOptions = (navData) =>({
    headerTitle:'MAXFIT VIP GYM',
    headerRight: () => (
        <View style={styles.headerright}>
            <TouchableOpacity>
                <FontAwesome5 name="cloud-moon" size={18} color="black" style={styles.headerrighticons} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navData.navigation.navigate('Profile')}>
                <FontAwesome5 name="user-alt" size={18} color="black" style={styles.headerrighticons} />
            </TouchableOpacity>
        </View>
    ),
    headerLeft:() => (
        <Image
        style={styles.logoImage}
        source={{
          uri: 'https://scontent.fcmb7-1.fna.fbcdn.net/v/t1.6435-9/208859872_203169565143798_8794676154000761999_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGzS0RYIPqaGquaNIWACrE20_Q2S3nENy_T9DZLecQ3L9hmojHDul6EJPoCKFilG9psKSVI0nKQljOlfPGS2v2h&_nc_ohc=anlW6cSFcEEAX-OdN0Z&tn=CvZTsjQbeLrMYJCw&_nc_ht=scontent.fcmb7-1.fna&oh=00_AT_-8hrX6Dm_cBrYzBT6ixvsU86B2kD_zZFws28M_A33IQ&oe=620B58BF',
        }}
      />
    )
  })

const styles = StyleSheet.create({
    logoImage:{
        width:50,
        height:50,
        marginLeft:5
    },
    headerright:{
        flexDirection:'row'
    },
    headerrighticons:{
        backgroundColor:Colors.headerRightColor,
        padding:10,
        borderRadius:100,
        marginHorizontal:5
    },
    title:{
        fontSize:27
    },
    titleContainer:{
        marginVertical:30,
        marginHorizontal:15
    },
    workout:{
        height:190,
        width:140,
        borderRadius:15,
        backgroundColor:'#fff',
        margin:10,
        position:'relative'
    },
    workoutInfo:{
        flex:1,
        justifyContent:'flex-end',
        margin:10,
        borderRadius:15,
    },
    workoutCover:{
        height:'100%',
        width:'100%',
        backgroundColor: Colors.opacityCover,
        borderRadius:15,
    },
    timeText:{
        color:'white',
        fontWeight:'bold'
    },
    dayName:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    },
   
})

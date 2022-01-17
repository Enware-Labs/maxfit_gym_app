import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View,ImageBackground,FlatList } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 
import Colors from '../../constants/Colors';

export default function HomeScreen(props) {

    const DAYS = [
        {
            day:'Monday'
        },
        {
            day:'Tuesday'
        },
        {
            day:'Wenesday'
        },
        {
            day:'Thursday'
        },
        {
            day:'Friday'
        },
        {
            day:'Saturday'
        },
        {
            day:'Sunday'
        },
        
    ]


    const renderItem = ({item}) => {
        return (
            <ImageBackground source={{uri:'https://scontent.fcmb7-1.fna.fbcdn.net/v/t1.6435-9/208859872_203169565143798_8794676154000761999_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGzS0RYIPqaGquaNIWACrE20_Q2S3nENy_T9DZLecQ3L9hmojHDul6EJPoCKFilG9psKSVI0nKQljOlfPGS2v2h&_nc_ohc=anlW6cSFcEEAX-OdN0Z&tn=CvZTsjQbeLrMYJCw&_nc_ht=scontent.fcmb7-1.fna&oh=00_AT_-8hrX6Dm_cBrYzBT6ixvsU86B2kD_zZFws28M_A33IQ&oe=620B58BF'}} resizeMode="cover" imageStyle={{borderRadius:15,opacity:1}} style={styles.workout} >
            <TouchableOpacity style={styles.workoutCover}  onPress={() => {props.navigation.navigate('DayWorkOut')}} >
            <View style={styles.workoutInfo}>
                <Text style={styles.dayName}>{item.day}</Text>
                <Text></Text>
            </View>
            </TouchableOpacity>
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
                keyExtractor={item => item.day}
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
            <TouchableOpacity>
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

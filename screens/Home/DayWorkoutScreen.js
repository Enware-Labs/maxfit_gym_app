import React from 'react'
import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import Colors from '../../constants/Colors';

export default function DayWorkoutScreen(props) {
    return (
        <View>
            <ImageBackground source={{uri:props.route.params.coverImage}} resizeMode='cover'  style={styles.workout} >

                <View style={{backgroundColor:Colors.opacityCover,height:'100%',width:'100%'}}>
                    
                <TouchableOpacity style={styles.closeContainer}>
                <TouchableOpacity style={styles.close} onPress={() => props.navigation.goBack()}>
                    <AntDesign name="close"  size={29} color="white" />
                </TouchableOpacity>
                </TouchableOpacity>

                <View style={styles.dayContainer}>
                    <Text style={styles.dayStyle}>{props.route.params.day}</Text>
                    <Text style={styles.timeStyle}>Duration : 1h</Text>
                </View>


                <View>
                    <Text style={styles.helpStyle}>If you want to change the workouts schedules, consult with your trainer</Text>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Start Now</Text>
                </TouchableOpacity>
                
            </View>
            </ImageBackground>
            
            <View>

            </View>

        </View>
    )
}


export const DailyWorkoutScreenOptions = (navData) =>({
    headerShown: false
  })

const styles = StyleSheet.create({
    workout:{
        height:260,
        width:'100%',
        position:'relative'
    },
    closeContainer:{
        position:'absolute',
        right:'-5%',
        top:'-4%',
    },
    close:{
        flexDirection:'row',
        justifyContent:'flex-end',
        borderRadius:50,
        padding:40
    },
    dayStyle:{
        fontSize:28,
        color:'white',
        width:'50%'
    },
    timeStyle:{
        color:'white'
    },
    helpStyle:{
        color:'white',
        padding:8,
        paddingHorizontal:18,
        fontSize:15
    },
    button:{
        backgroundColor: 'transparent',
        padding:10,
        color:'white',
        borderColor:'#fff',
        borderWidth:1,
        borderRadius:10,
        width:'50%',
        marginHorizontal:'25%',
        marginTop:'10%'
    },
    buttonText:{
        textAlign:'center',
        color:'white'
    },
    dayContainer:{
        padding:18
    }

})

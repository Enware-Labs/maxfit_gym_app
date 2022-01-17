import React from 'react'
import { StyleSheet, Text, View ,Image ,Button,TouchableOpacity} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 
import Colors from '../../constants/Colors'

export default function ProfileScreen() {
    return (
        <View>
        <View style={styles.mainImage}>
            <Image source={{uri:'https://avatars.githubusercontent.com/u/62742618?v=4'}} style={styles.image} />
        </View>

        <View style={styles.ProfileContent}>
            <Text style={styles.keyProfile}>Name</Text>
            <Text style={styles.objectProfile}>Gimna Katugampala</Text>
        </View>

        <View style={styles.ProfileContent}>
            <Text style={styles.keyProfile}>Email</Text>
            <Text style={styles.objectProfile}>gimnakatugampala1@gmail.com</Text>
        </View>

        <View style={styles.ProfileContent}>
            <Text style={styles.keyProfile}>Phone</Text>
            <Text style={styles.objectProfile}>+95764971707</Text>
        </View>

    
        <View style={styles.ProfileContent}>
            <Text style={styles.keyProfile}>National ID</Text>
            <Text style={styles.objectProfile}>200017203400</Text>
        </View>

        <View style={styles.ProfileContent}>
            <Text style={styles.keyProfile}>Address</Text>
            <Text style={styles.objectProfile}>393/5,Awissawella rd , Megoda kolonnawa Wellampitiya</Text>
        </View>


        <View style={styles.ProfileContent}>
            <Text style={styles.keyProfile}>Membership No.</Text>
            <Text style={styles.objectProfile}>MAX001</Text>
        </View>

        <View style={styles.logoutContainer}>
            <Button title="Logout" color="red" />
        </View>
    </View>

    )
}

export const ProfileScreenOptions = (navData) =>({
    headerTitle:'Profile',
    headerRight: () => (
        <View style={styles.headerright}>
            <TouchableOpacity onPress={() => navData.navigation.navigate('Edit')}>
                <FontAwesome5 name="pen" size={18} color="black" style={styles.headerrighticons} />
            </TouchableOpacity>
        </View>
    ),
  })

const styles = StyleSheet.create({
    mainImage:{
        alignItems:'center',
        marginVertical:15
    },
    image:{
        width:100,
        height:100,
        borderRadius:100
    },
    ProfileContent:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    keyProfile:{
        padding:10,
        fontSize:16,
        fontWeight:'bold'
    },
    objectProfile:{
        padding:10,
        width:'60%',
        textAlign:'right'
    },
    logoutContainer:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:30
    },
    headerright:{
        flexDirection:'row'
    },
    headerrighticons:{
        backgroundColor:Colors.headerRightColor,
        padding:10,
        borderRadius:100,
        marginHorizontal:5
    }
})

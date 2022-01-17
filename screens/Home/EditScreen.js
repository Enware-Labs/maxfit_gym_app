import React from 'react'
import { StyleSheet, Text, View ,ScrollView,Image,TextInput,Button} from 'react-native'
import Colors from '../../constants/Colors'

export default function EditScreen() {
    return (
        <ScrollView>
            <View style={styles.mainImage}>
            <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/wmasl-92991.appspot.com/o/utils%2F182-1828676_person-icons-person-icon.png?alt=media&token=f851c738-bfb9-4956-aa9e-b07528c4b364'}} style={styles.image} />

            <View style={styles.editbutton}>
                    <Button title='Choose Image' color={Colors.primaryColorThree}   />
            </View>

            <View style={styles.inputContainerTwo}>
                <TextInput
                style={styles.inputTwo}
                placeholder="First Name"
                // value={fname}
                selectionColor={Colors.primaryColorThree}
                />

                <TextInput
                style={styles.inputTwo}
                placeholder="Last Name"
                // value={lname}
                selectionColor={Colors.primaryColorThree}
                />
            </View>

            <View style={styles.inputContainerOne}>
                <TextInput
                style={styles.inputOne}
                placeholder="Email"
                // editable={isEditable}
                // value={email}
                selectionColor={Colors.primaryColorThree}
                />
            </View>

            
            <View style={styles.inputContainerOne}>
                <TextInput
                style={styles.inputOne}
                placeholder="Phone Number"
                maxLength={12}
                keyboardType="numeric"
                // value={phone}
                selectionColor={Colors.primaryColorThree}
                />
            </View>

            <View style={styles.inputContainerOne}>
                <TextInput
                style={styles.inputOne}
                placeholder="Membership No."
                // value={memberno}
                // editable={isEditable}
                selectionColor={Colors.primaryColorThree}
                />
            </View>

            <View style={styles.inputContainerOne}>
                <TextInput
                style={styles.inputOne}
                placeholder="National ID"
                // value={nic}
                // editable={isEditable}
                selectionColor={Colors.primaryColorThree}
                />
            </View>

            <View style={styles.inputContainerOne}>
                <TextInput
                style={styles.inputOne}
                placeholder="Address"
                // value={address}
                multiline={true}
                selectionColor={Colors.primaryColorThree}
                />
            </View>

            <View style={styles.submitBtn}>
                <Button title="Update" color={Colors.primaryColorThree}   />
            </View>
            </View>
        </ScrollView>

    )
}

export const EditProfileScreenOptions = (navData) =>({
    headerTitle:'Edit Profile',
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
    editbutton:{
        margin:20,
        fontSize:20,
        backgroundColor:Colors.primaryColorThree,
        borderRadius:2
    },
    editButtonText:{
        color:'white',
        padding:7
    },
    inputContainerTwo:{
        flexDirection:'row',
    },
    inputTwo: {
        backgroundColor: Colors.primaryInput,
        paddingVertical:7,
        borderRadius:8,
        paddingHorizontal:5,
        width:'45%',
        marginHorizontal:5,
        marginVertical:5
        
      },
    inputContainerOne:{
        flexDirection:'row',
    },
    inputOne: {
        backgroundColor: Colors.primaryInput,
        paddingVertical:7,
        borderRadius:8,
        paddingHorizontal:5,
        width:'92%',
        marginHorizontal:5,
        marginVertical:5
      },
      submitBtn:{
          width:'90%',
          marginTop:5
      },
})

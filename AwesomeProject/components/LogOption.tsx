import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const LogOption = () => {

    return (
        <TouchableOpacity>
        <View style={styles.item}>      
            <Text style={styles.insideText}>
                Continue with Reddit</Text>
        </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#ECECEC',
        padding: 10,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: 10,
        width: '100%',
        height: 50,
        alignContent: 'center',
        justifyContent: 'center'
       
    },
    insideText:{
        fontSize: 15,
        color: '#000000',
    }
    ,
    itemLeft:{
       
    },
    icon:{

    }

});

export default LogOption;
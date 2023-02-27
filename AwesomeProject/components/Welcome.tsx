import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import welcomeStyles from './styles/welcomeStyles';

function Caller(){
    if(Platform.OS === 'ios'){ // check if ios
        console.log("IOS!!!");
        alert("This is an iOS app");
    }else if(Platform.OS === 'android'){ //check if android
        alert("Android!!!");
        console.log("ANDROID!!!");
        return (<List/>); 
    }

}

function IosList(){
    return (
        <View style={welcomeStyles.container}>
            <Picker
        selectedValue={"Home"}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
            </Picker>
        </View>
    )
}

function List() {
    const [Enable , setEnable]  = useState();

    return (
        <View style={welcomeStyles.listBox}>
            <Picker
                selectedValue={Enable}
                style={welcomeStyles.picKer}
                mode={"dropdown"}
                onValueChange={(itemValue) => setEnable(itemValue)}
            >
                <Picker.Item label="Home" value="home" />
                <Picker.Item label="Popular" value="popular" />
                <Picker.Item label="News" value="news" />
            </Picker>
        </View>
);
}

function search() {
    const [Enable , setEnable]  = useState();
    return (
        <View style={welcomeStyles.listBox}>
            <Picker
                selectedValue={Enable}
                style={{ height: 5, width: 45 }}
                mode={"dialog"}
                onValueChange={(itemValue) => setEnable(itemValue)}
            >
                <Picker.Item label="Home" value="home" />
                <Picker.Item label="Popular" value="popular" />
                <Picker.Item label="News" value="news" />
            </Picker>
        </View>
);
}

const Welcome = () => {
    return (
        <View style={welcomeStyles.container}>
            <View style={welcomeStyles.header}>
                {Caller()}
                

            </View>
            <ScrollView>
            <Text style={welcomeStyles.box}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim similique corrupti nesciunt eaque ea dolores asperiores laudantium odio, doloremque aspernatur atque quos provident ad eveniet non, eum ullam, fuga sed.
            </Text>
            </ScrollView>
        </View>
    )

}

export default Welcome;
function checkIfIOS() {
    throw new Error('Function not implemented.');
}


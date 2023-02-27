import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, SafeAreaView} from 'react-native';
import LogOption from './LogOption';

const Stack = createNativeStackNavigator();

function LogoTitle() {
    return (
        <Image
        style={{ width: 50, height: 50 }}
        source={require('../assets/reddit.png')}
        />
);
}

function MainTitle() {
    return (
        <View style={{
            marginTop: 50 * 2,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize: 25, fontWeight: 'bold',
                color: 'black' }}>Dive into anything
            </Text>
        </View>
);
}

function MainImage() {
    return (
        <View style={{
            // justifyContent: 'center',
            alignItems: 'center'
        }}>
        <Image
        style={{ width: '85%',height:'60%',
            transform: [{ translateY: 30}],
        }}
        resizeMode='contain'
        source={require('../assets/big.png')}
        />
            
        </View>
);
}

function LogWrapper() {
    return(
        <View style={
            styles.optionsWrapper
        }>
            <View style={
                styles.options
            }>
                <LogOption/>
                {/* <LogOption text={'Continue with Google'}/>
                <LogOption text={'Continue with Apple'} />
                <LogOption text={'Continue with email'} /> */}
            </View>
        </View>
    )
}

const Home = ({navigation}) => {

    return (
    
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <LogoTitle />
                </View>
                <TouchableOpacity 
                style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={() => navigation.navigate('Welcome')}>
                    <Text style={styles.skipButton}>Skip</Text>
                </TouchableOpacity>
            </View>
            {MainTitle()}
            {MainImage()}
            {LogWrapper()}
        </SafeAreaView>  
    );

}

const styles = StyleSheet.create({
    container: {
        transform: [{ translateY: 10 }],
        flexDirection: 'row',
        height: 70
    },
    navbar: {
        flex: 1,
        marginLeft: '12%',
        justifyContent:'center',
        alignItems: 'center',
    },
    skipButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 10,
        transform: [{ translateX: -25 }]
    },
    options:{
        
    },
    optionsWrapper: {
        transform: [{ translateY: -75 }],
        padding: 20,
        justifyContent: 'center',
    }
});

export default Home;
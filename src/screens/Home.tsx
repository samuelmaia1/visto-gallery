import { Text, View, ImageBackground, TouchableOpacity, Alert, Image } from "react-native";
import { HomeScreenProps } from "../nav/RootParam";
import { homeStyle } from "../styles/HomeStyle";
import { GradientText } from "../components/GradientText/GradientText";

export function Home({navigation, route}: HomeScreenProps) {
    return (
        <ImageBackground
            source={require('../assets/images/background-dark.png')}
            style={homeStyle.background}
        >
            <GradientText 
                text="Visto Gallery"
                colors={['#C41C1C', '#B52828']}
                style={homeStyle.gradient}
            />

            <View style={homeStyle.buttonsContainer}>
                <TouchableOpacity onPress={() => {navigation.navigate('Dashboard', {step: 'photos'})}} style={homeStyle.button}>
                    <Image source={require('../assets/images/white-camera.png')}/>
                    <Text style={homeStyle.buttonText}>Minhas fotos</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => {navigation.navigate('Dashboard', {step: 'albums'})}} style={homeStyle.button}>
                    <Image source={require('../assets/images/white-files.png')}/>
                    <Text style={homeStyle.buttonText}>Album de fotos</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
import { Text, View, ImageBackground, TouchableOpacity, Alert, Image } from "react-native";
import { HomeScreenProps } from "../nav/RootParam";
import { style } from "../styles/HomeStyle";
import { GradientText } from "../components/GradientText";

type Props = {}

type HomeProps = HomeScreenProps & Props

export function Home({navigation, route}: HomeProps) {
    return (
        <ImageBackground
            source={require('../assets/images/background.png')}
            style={style.background}
        >
            <GradientText 
                text="Visto Gallery"
                colors={['#C41C1C', '#B52828']}
                style={style.gradient}
            />

            <View style={style.buttonsContainer}>
                <TouchableOpacity onPress={() => {navigation.navigate('Dashboard')}} style={style.button}>
                    <Image source={require('../assets/images/white-camera.png')}/>
                    <Text style={style.buttonText}>Minhas fotos</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => {navigation.navigate('Dashboard')}} style={style.button}>
                    <Image source={require('../assets/images/white-files.png')}/>
                    <Text style={style.buttonText}>Album de fotos</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
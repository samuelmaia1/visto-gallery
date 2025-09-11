import { Text, View, ImageBackground, TouchableOpacity } from "react-native";
import { HomeScreenProps } from "../nav/RootParam";
import { style } from "../styles/HomeStyle";
import { GradientText } from "../components/GradientText";

type Props = {}

type HomeProps = HomeScreenProps & Props

export function Home({navigation, route}: HomeProps) {
    return (
        <ImageBackground
            source={require('../assets/images/background-image.png')}
            style={style.background}
        >
            <GradientText 
                text="Visto Gallery"
                colors={['#C41C1C', '#FFFFFF']}
                style={style.gradient}
            />

            <View>
                <TouchableOpacity onPress={() => {}}>
                    <Text>Minhas fotos</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => {}}>
                    <Text>Criar álbum de fotos</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
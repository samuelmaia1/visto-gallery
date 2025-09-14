import { Image, View, TouchableOpacity } from "react-native";
import { headerStyle } from "../styles/HeaderStyle";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "../nav/RootParam";

type Navigation = NativeStackNavigationProp<RootParamList>

export function Header() {
    const navigation = useNavigation<Navigation>()

    return (
        <View style={headerStyle.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={require('../assets/images/home-orange-24px.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
                <Image source={require('../assets/images/camera-orange-24px.png')}/>
            </TouchableOpacity>

        </View>
    )
}
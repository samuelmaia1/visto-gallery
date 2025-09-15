import { Image, View, TouchableOpacity } from "react-native";
import { styles } from "./HeaderStyle";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "../../nav/RootParam";
import { useState } from "react";
import { NewAlbumModal } from "../NewAlbumModal/NewAlbumModal";

type Navigation = NativeStackNavigationProp<RootParamList>

export function Header() {
    const navigation = useNavigation<Navigation>()

    const [visible, setVisible] = useState<boolean>(false)

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={require('../../assets/images/home-orange-24px.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setVisible(true)}>
                <Image source={require('../../assets/images/camera-orange-24px.png')}/>
            </TouchableOpacity>

            < NewAlbumModal visible={visible} onRequestClose={() => setVisible(false)}/>
        </View>
    )
}
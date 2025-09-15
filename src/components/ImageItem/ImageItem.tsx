import { Image, View, Pressable } from "react-native"
import { styles } from "./ImageItemStyle"
import { PhotoData } from "../../interfaces/PhotoData"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootParamList } from "../../nav/RootParam"

interface ImageItemProps{
    uri: string,
    photo: PhotoData
}

type Navigation = NativeStackNavigationProp<RootParamList>

export function ImageItem({uri, photo}: ImageItemProps) {
    const [selected, setSelected] = useState<boolean>(false)
    const navigation = useNavigation<Navigation>()

    return (
        <Pressable onPress={() => navigation.navigate('PhotoPreview', {id: photo.id})}>
            <View style={[styles.container, selected && styles.selected]}>
                <Image source={{uri: uri}} style={styles.image} resizeMode="cover"/>
                {selected && <Image source={require('../../assets/images/selected-icon.png')} style={styles.icon}/>}
            </View>
        </Pressable>
    )
}
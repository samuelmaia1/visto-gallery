import { Image, View, Pressable } from "react-native"
import { styles } from "./ImageItemStyle"
import { PhotoData } from "../../interfaces/PhotoData"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootParamList } from "../../nav/RootParam"

interface ImageItemProps{
    uri: string,
    includePhoto: (id: string) => void,
    removePhoto: (id: string) => void,
    photo: PhotoData
}

type Navigation = NativeStackNavigationProp<RootParamList>

export function ImageItem({uri, includePhoto, removePhoto, photo}: ImageItemProps) {
    const [selected, setSelected] = useState<boolean>(false)
    const navigation = useNavigation<Navigation>()

    const handleSelectedLongPress = () => {
        if (selected) {
            setSelected(false)
            removePhoto(photo.id)
        } else {
            setSelected(true)
            includePhoto(photo.id)
        }
    }

    const handleSelectedPress = () => {
        if (selected) {
            setSelected(false)
            removePhoto(photo.id)
        } else {
            navigation.navigate('PhotoPreview', {id: photo.id})
        }
    }

    return (
        <Pressable onLongPress={handleSelectedLongPress} onPress={handleSelectedPress}>
            <View style={[styles.container, selected && styles.selected]}>
                <Image source={{uri: uri}} style={styles.image} resizeMode="cover"/>
                {selected && <Image source={require('../../assets/images/selected-icon.png')} style={styles.icon}/>}
            </View>
        </Pressable>
    )
}
import { Image, View } from "react-native"
import { ImageItemStyle } from "../styles/ImageItemStyle"

interface ImageItemProps{
    uri: string
}

export function ImageItem({uri}: ImageItemProps) {

    return (
        <View style={ImageItemStyle.container}>
            <Image source={{uri: uri}} style={ImageItemStyle.image}/>
        </View>
    )
}
import { Image, View, Pressable } from "react-native"
import { styles } from "./ImageItemStyle"
import { PhotoData } from "../../interfaces/PhotoData"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootParamList } from "../../nav/RootParam"

interface ImageItemProps{
    uri: string,
    photo: PhotoData
}

type Navigation = NativeStackNavigationProp<RootParamList>

export function ImageItem({uri, photo}: ImageItemProps) {
    const navigation = useNavigation<Navigation>()

    return (
        <Pressable 
            onPress={() => navigation.navigate('PhotoPreview', {id: photo.id})} 
            testID="pressable-image-item"
        >
            <View style={styles.container} testID={`image-item-${photo.id}`}>
                <Image 
                    source={{uri: uri}} style={styles.image} 
                    resizeMode="cover"
                    testID="image-item"
                />
            </View>
        </Pressable>
    )
}
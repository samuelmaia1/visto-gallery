import { View, Text, Pressable } from "react-native";
import { Album } from "../../interfaces/AlbumData";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootParamList } from "../../nav/RootParam";

interface AlbumItemProps{
    album: Album
}

type Navigation = NativeStackNavigationProp<RootParamList>

export function AlbumItem({album}: AlbumItemProps) {
    const navigation = useNavigation<Navigation>()

    return (
        <Pressable onPress={() => navigation.navigate('Album', {name: album.name})}>
            <View>
                <Text>{album.name} ({album.photosUri.length}) fotos</Text>
            </View>
        </Pressable>
    )
}
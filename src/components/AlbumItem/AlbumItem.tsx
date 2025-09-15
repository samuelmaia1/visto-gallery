import { View, Text, Pressable, Image } from "react-native";
import { Album } from "../../interfaces/AlbumData";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootParamList } from "../../nav/RootParam";
import { useEffect, useState } from "react";
import { PhotoData } from "../../interfaces/PhotoData";
import { getPhotosByAlbum } from "../../services/PhotoService";
import { styles } from "./AlbumItemStyle";
import { Shadow } from "react-native-shadow-2";

interface AlbumItemProps{
    album: Album
}

type Navigation = NativeStackNavigationProp<RootParamList>

export function AlbumItem({album}: AlbumItemProps) {
    const navigation = useNavigation<Navigation>()

    const [photos, setPhotos] = useState<PhotoData[]>([])

    useEffect(() => {

        async function loadPhotos() {
            setPhotos(await getPhotosByAlbum(album.name))
        }

        loadPhotos()

    }, [])

    return (
        <Shadow 
            distance={8} 
            startColor={'#00000020'} 
            offset={[0, 4]}
            style={{backgroundColor: '#fff', borderRadius: 10, width: '100%'}}
        >
            <Pressable onPress={() => navigation.navigate('Album', {name: album.name})}>
                <View style={styles.container}>
            
                    <View style={styles.imageContainer}>
                        <Image source={{uri: photos[0]?.uri}} style={styles.image}/>
                    </View>

                    <View style={styles.albumInfo}>
                        <Text style={styles.title}>{album.name}</Text>
                        <Text style={styles.info}>{photos.length} Fotos</Text>
                        <Text style={styles.info}>Criado em {album.createdAt}</Text>
                        <Text style={styles.info}>Última atualização: {photos[0]?.date}</Text>
                    </View>

                </View>
            </Pressable>
        </Shadow>
    )
}
import { Text, TouchableOpacity, View, Image } from "react-native";
import { AlbumScreenProps } from "../nav/RootParam";
import { albumStyle } from "../styles/AlbumStyle";
import {  useCallback, useState } from "react";
import { Album } from "../interfaces/AlbumData";
import { loadAlbumByName } from "../services/AlbumService";
import { useFocusEffect } from "@react-navigation/native";
import { PhotoData } from "../interfaces/PhotoData";
import { getPhotosByAlbum } from "../services/PhotoService";
import { ImageList } from "../components/ImageList/ImageList";

export function AlbumScreen({navigation, route}: AlbumScreenProps) {

    const {name} = route.params

    const [album, setAlbum] = useState<Album>({} as Album)
    const [photos, setPhotos] = useState<PhotoData[]>([])

    useFocusEffect(
        useCallback(() => {
            async function loadPhotos() {
                setAlbum(await loadAlbumByName(name))
                setPhotos(await getPhotosByAlbum(name))
            }
    
            loadPhotos()
        }, [])
    )

    return (
        <View style={albumStyle.container}>
            <View style={albumStyle.dataContainer}>
                <TouchableOpacity 
                    style={{flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 20}} 
                    onPress={() => navigation.goBack()}
                >
                    <Image source={require('../assets/images/back-icon.png')}/>
                    <Text>Voltar</Text>
                </TouchableOpacity>

                <View style={albumStyle.titleContainer}>

                    <Text style={albumStyle.title}>{album.name}</Text>

                    <TouchableOpacity 
                        style={albumStyle.newPhotoButton} 
                        onPress={() => navigation.navigate('Camera', {album: album.name})}
                    >
                        <Text style={albumStyle.textButton}>Adicionar fotos</Text>
                    </TouchableOpacity>

                </View>

                <Text>({photos.length}) Fotos</Text>
                <Text>Data de criação: {album.createdAt}</Text>
            </View>

            <ImageList data={photos} />
        </View>
    )
}
import { Text, TouchableOpacity, View, FlatList, Image } from "react-native";
import { AlbumScreenProps } from "../nav/RootParam";
import { albumStyle } from "../styles/AlbumStyle";
import {  useCallback, useState } from "react";
import { Album } from "../interfaces/AlbumData";
import { loadAlbumByName } from "../services/AlbumService";
import { useFocusEffect } from "@react-navigation/native";

export function AlbumScreen({navigation, route}: AlbumScreenProps) {

    const [album, setAlbum] = useState<Album>({} as Album)

    useFocusEffect(
        useCallback(() => {
            async function loadAlbum() {
                setAlbum(await loadAlbumByName(route.params.name))
            }
    
            loadAlbum()
        }, [])
    )

    return (
        <View style={albumStyle.container}>

            <View style={albumStyle.titleContainer}>

                <Text style={albumStyle.title}>{album.name}</Text>

                <TouchableOpacity style={albumStyle.newPhotoButton} onPress={() => navigation.navigate('Camera', {album: album.name})}>
                    <Text style={albumStyle.textButton}>Adicionar fotos</Text>
                </TouchableOpacity>

            </View>

            <Text>({album.photosUri?.length}) fotos</Text>
            <Text>Data de criação: {album.createdAt}</Text>

            <FlatList
                style={albumStyle.imageList}
                data={album.photosUri}
                keyExtractor={(item) => item}
                renderItem={({item}) => <ImageItem item={item}/>}
                numColumns={3}
                columnWrapperStyle={{gap: 10}}
                ItemSeparatorComponent={Separator}
            />
        </View>
    )
}

interface ImageItemProps{
    item: string
}

function ImageItem({item}: ImageItemProps) {
    return (
        <View style={albumStyle.imageContainer}> 
            <Image source={{uri: item}} style={albumStyle.image}/> 
        </View>
    )
}

function Separator() {
    return <View style={{height: 10}}></View>
}
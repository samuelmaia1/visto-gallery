import { FlatList, View } from "react-native";
import { styles } from "./AlbumsListStyle";
import { useEffect, useState } from "react";
import { loadAlbums } from "../../services/AlbumService";
import { Album } from "../../interfaces/AlbumData";
import { AlbumItem } from "../AlbumItem/AlbumItem";


export function AlbumsList() {
    const [albums, setAlbums] = useState<Album[]>([])

    useEffect(() => {

        async function getAlbums() {
            const response = await loadAlbums()

            setAlbums(response)
        }

        getAlbums()

    }, [])

    return (
        <FlatList
            style={styles.container}
            data={albums}
            keyExtractor={(item) => item.name}
            renderItem={({item}) => <AlbumItem album={item}/>}
            ItemSeparatorComponent={Separator}
        />
    )
}

function Separator() {
    return <View style={{height: 10}}></View>
}
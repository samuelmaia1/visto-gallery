import { FlatList, View } from "react-native";
import { styles } from "./AlbumsListStyle";
import { useCallback, useState } from "react";
import { loadAlbums } from "../../services/AlbumService";
import { Album } from "../../interfaces/AlbumData";
import { AlbumItem } from "../AlbumItem/AlbumItem";
import { useFocusEffect } from "@react-navigation/native";
import { ListEmptyComponent } from "../Utils/Utils";

export function AlbumsList() {
    const [albums, setAlbums] = useState<Album[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useFocusEffect(
        useCallback(() => {
            setIsLoading(true)
            
            async function getAlbums() {
                setAlbums(await loadAlbums())
            }

            getAlbums()

            setIsLoading(false)
        }, [])
    )

    return (
        <>
            {albums.length === 0 ? 
                < ListEmptyComponent /> : 
                <FlatList
                    style={styles.container}
                    data={albums}
                    keyExtractor={(item) => item.name}
                    renderItem={({item}) => <AlbumItem album={item}/>}
                    ItemSeparatorComponent={Separator}
                />
            }
        </>
        
    )
}

function Separator() {
    return <View style={{height: 10}}></View>
}
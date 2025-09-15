import { FlatList, Image, View } from "react-native";
import { PhotoData } from "../../interfaces/PhotoData";
import { ImageItem } from "../ImageItem/ImageItem";
import { styles } from "./ImageListStyle";
import { Separator } from "../Utils/Utils";

interface ImageListProps{
    data: PhotoData[],
}

export function ImageList({data}: ImageListProps) {
    return (
        <FlatList
            style={styles.container}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <ImageItem uri={item.uri} photo={item}/>}
            numColumns={3}
            columnWrapperStyle={{gap: 10}}
            ItemSeparatorComponent={Separator}
        />
    )
}


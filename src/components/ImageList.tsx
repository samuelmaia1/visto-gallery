import { FlatList } from "react-native";
import { PhotoData } from "../interfaces/PhotoData";
import { ImageItem } from "./ImageItem";
import { imageListStyle } from "../styles/ImageListStyle";

interface ImageListProps{
    data: PhotoData[]
}

export function ImageList({data}: ImageListProps) {

    return (
        <FlatList
            style={imageListStyle.container}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <ImageItem uri={item.uri} />}
            numColumns={3}
        />
    )
}
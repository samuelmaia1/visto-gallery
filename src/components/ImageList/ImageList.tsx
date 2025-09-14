import { FlatList, View } from "react-native";
import { PhotoData } from "../../interfaces/PhotoData";
import { ImageItem } from "../ImageItem/ImageItem";
import { styles } from "./ImageListStyle";

interface ImageListProps{
    data: PhotoData[],
    includePhoto: (id: string) => void,
    removePhoto: (id: string) => void
}

export function ImageList({data, includePhoto, removePhoto}: ImageListProps) {
    return (
        <FlatList
            style={styles.container}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <ImageItem uri={item.uri} includePhoto={includePhoto} removePhoto={removePhoto} photo={item}/>}
            numColumns={3}
            columnWrapperStyle={{gap: 10}}
            ItemSeparatorComponent={Separator}
        />
    )
}

function Separator() {
    return <View style={{height: 10}}></View>
}
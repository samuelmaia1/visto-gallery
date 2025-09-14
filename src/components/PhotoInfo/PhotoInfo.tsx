import { View, Text } from "react-native";
import { PhotoData } from "../../interfaces/PhotoData";
import { styles } from "./PhotoInfoStyle";

interface PhotoInfoProps{
    photo: PhotoData
}

export function PhotoInfo({photo}: PhotoInfoProps) {
    return (
        <View>
            <Text>
                <Text style={styles.propTitle}>Data: </Text>
                {photo.date}
            </Text>

            <Text>
                <Text style={styles.propTitle}>Hora: </Text>
                {photo.hour}
            </Text>

            <Text>
                <Text style={styles.propTitle}>Latitude: </Text>
                {photo.latitude}
            </Text>

            <Text>
                <Text style={styles.propTitle}>Longitude: </Text>
                {photo.longitude}
            </Text>

            <Text>
                <Text style={styles.propTitle}>Álbum: </Text>
                {photo.album}
            </Text>
        </View>
    )
}
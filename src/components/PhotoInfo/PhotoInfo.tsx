import { View, Text } from "react-native";
import { Local, PhotoData } from "../../interfaces/PhotoData";
import { styles } from "./PhotoInfoStyle";

interface PhotoInfoProps{
    photo: PhotoData,
    local?: Local
}

export function PhotoInfo({photo, local}: PhotoInfoProps) {
    return (
        <View style={{gap: 10, marginBottom: 10}}>
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

            {local && 
                <>
                    <Text>
                        <Text style={styles.propTitle}>Localização </Text>
                        {local.address.road}, {local.address.city}/{local.address.state} - {local.address.country}
                    </Text>
                </>
            }
            
        </View>
    )
}
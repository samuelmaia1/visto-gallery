import { Image, Text, View, TouchableOpacity } from "react-native";
import { PhotoPreviewScreenProps, RootParamList } from "../nav/RootParam";
import { useEffect, useState } from "react";
import { Local, PhotoData } from "../interfaces/PhotoData";
import { deletePhoto, getPhotoById } from "../services/PhotoService";
import { styles } from "../styles/PhotoPreviewStyle";
import { PhotoInfo } from "../components/PhotoInfo/PhotoInfo";
import { DeleteButton } from "../components/DeleteButton/DeleteButton";
import { ConfirmationModal } from "../components/ConfirmationModal/ConfirmationModal";

export function PhotoPreviewScreen({navigation, route}: PhotoPreviewScreenProps) {
    
    const [photo, setPhoto] = useState<PhotoData | undefined>(undefined)
    const [visible, setVisible] = useState<boolean>(false)
    const [local, setLocal] = useState<Local | undefined>(undefined)

    const {id} = route.params

    async function getPhoto() {
            const response = await getPhotoById(id)

            if (response) {
                setPhoto(response)  

                if (response.latitude && response.longitude) {
                    const localData = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${response.latitude}&lon=${response.longitude}`,
                        {
                            headers: {
                                "User-Agent": "MeuAppReactNative/1.0 (seu-email@example.com)",
                                "Accept-Language": "pt-BR"
                            }
                        }
                    )
                    const data = await localData.json()
                    setLocal(data)
                }
            }
    }

    useEffect(() => {

        async function getAllData() {
            await getPhoto()
        }

        getAllData()

    }, [])

    return (
        <View style={styles.container}>

            <TouchableOpacity 
                style={{flexDirection: 'row', alignItems: 'center', gap: 10}} 
                onPress={() => navigation.goBack()}
            >
                <Image source={require('../assets/images/back-icon.png')}/>
                <Text>Voltar</Text>
            </TouchableOpacity>

            {photo &&
                <>
                    <Image
                        source={{uri: photo.uri}}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    
                    <PhotoInfo photo={photo} local={local}/>

                    <DeleteButton onPress={() => setVisible(true)}/>

                    <ConfirmationModal
                        onCancel={() => setVisible(false)}
                        onConfirm={async () => {return await deletePhoto(photo.id)}}
                        onRequestClose={() => {
                            setVisible(false)
                            navigation.goBack()
                        }}
                        transparent={true}
                        visible={visible}
                    />
                </>
            }
            
        </View>
    )
}
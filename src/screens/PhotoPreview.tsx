import { Image, Text, View, TouchableOpacity } from "react-native";
import { PhotoPreviewScreenProps, RootParamList } from "../nav/RootParam";
import { useEffect, useState } from "react";
import { PhotoData } from "../interfaces/PhotoData";
import { deletePhoto, getPhotoById } from "../services/PhotoService";
import { styles } from "../styles/PhotoPreviewStyle";
import { PhotoInfo } from "../components/PhotoInfo/PhotoInfo";
import { DeleteButton } from "../components/DeleteButton/DeleteButton";
import { ConfirmationModal } from "../components/ConfirmationModal/ConfirmationModal";

export function PhotoPreviewScreen({navigation, route}: PhotoPreviewScreenProps) {
    
    const [photo, setPhoto] = useState<PhotoData>({} as PhotoData)
    const [visible, setVisible] = useState<boolean>(false)

    const {id} = route.params

    useEffect(() => {

        async function getPhoto() {
            const response = await getPhotoById(id)

            if (response)
                setPhoto(response)  
        }

        getPhoto()

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

            <Image
                source={{uri: photo.uri}}
                style={styles.image}
                resizeMode="contain"
            />
            
            <PhotoInfo photo={photo}/>

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
        </View>
    )
}
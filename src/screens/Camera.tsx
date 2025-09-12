import { useRef } from "react";
import { View, ActivityIndicator, StyleSheet, TouchableOpacity, Text, Image, Alert } from "react-native";
import { Camera, useCameraDevice } from "react-native-vision-camera";
import { CameraScreenProps } from "../nav/RootParam";
import { style } from "../styles/CameraStyle";
import { variables } from "../styles/GlobalStyle";


export function CameraScreen({navigation, route}: CameraScreenProps) {

    const device = useCameraDevice('back')
    const camera = useRef<Camera>(null)

    const takeImage = async () => {
        const photo = await camera?.current?.takePhoto()
    }

    return (
        <View style={{flex: 1}}>

            {!device ? 
                <ActivityIndicator size={'small'} color={variables.colors.orange}/> : 
                <Camera ref={camera} isActive={true} device={device} style={StyleSheet.absoluteFill} photo={true} />
            }

            <TouchableOpacity style={style.takePhotoButton} onPress={() => takeImage()}>
                <Image source={require('../assets/images/white-camera.png')} style={style.camImage}/>
            </TouchableOpacity>

        </View>
    )
}
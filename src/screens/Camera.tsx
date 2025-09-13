import { useRef, useState } from "react";
import { View, ActivityIndicator, StyleSheet, TouchableOpacity,  Image } from "react-native";
import { Camera, useCameraDevice } from "react-native-vision-camera";
import { CameraScreenProps } from "../nav/RootParam";
import { cameraStyle } from "../styles/CameraStyle";
import { variables } from "../styles/GlobalStyle";

export function CameraScreen({navigation, route}: CameraScreenProps) {

    const device = useCameraDevice('back')
    const camera = useRef<Camera>(null)

    const [photoPath, setPhotoPath] = useState('')

    const takePhoto = async () => {
        const photo = await camera?.current?.takePhoto()
        if (photo)
            setPhotoPath(photo.path)
    }

    return (
        <View style={{flex: 1}}>

            {!device ? 
                <ActivityIndicator size={'small'} color={variables.colors.orange}/> : 
                <Camera ref={camera} isActive={true} device={device} style={StyleSheet.absoluteFill} photo={true} />
            }

            {photoPath ? 
                <Image source={{uri: `file://${photoPath}`}} style={cameraStyle.current}/> : 
                <View style={[cameraStyle.current, cameraStyle.currentContainer]}></View>
            }

            <TouchableOpacity style={cameraStyle.takePhotoButton} onPress={() => takePhoto()}>
                <Image source={require('../assets/images/white-camera.png')} style={cameraStyle.camImage}/>
            </TouchableOpacity>

            <TouchableOpacity style={cameraStyle.closeCameraButton} onPress={() => navigation.navigate('Dashboard')}>
                <Image source={require('../assets/images/fechar.png')} style={cameraStyle.camImage}/>
            </TouchableOpacity>

        </View>
    )
}
import { useEffect, useRef, useState } from "react";
import { View, ActivityIndicator, StyleSheet, TouchableOpacity,  Image, Alert } from "react-native";
import { Camera, useCameraDevice } from "react-native-vision-camera";
import { CameraScreenProps } from "../nav/RootParam";
import { getGeoLocationPermissionStatus, requestGeoLocationPermission } from "../permissions/GeoLocationPermission";
import { getCameraPermissionStatus, requestCameraPermission } from "../permissions/CameraPermission";
import { NewPhotoData } from "../interfaces/PhotoData";
import { savePhoto, savePhotoData } from "../services/PhotoService";
import { getLocation } from "../services/LocationService";
import { dateToPattern, getHourAndMinuteByDate } from "../format/format";
import { cameraStyle } from "../styles/CameraStyle";
import { variables } from "../styles/GlobalStyle";

export function CameraScreen({navigation, route}: CameraScreenProps) {

    const device = useCameraDevice('back')
    const camera = useRef<Camera>(null)

    const [photoPath, setPhotoPath] = useState('')
    const [hasPermissions, setHasPermissions] = useState<boolean | null>(null)

    const takePhoto = async () => {
        const photo = await camera?.current?.takePhoto()

        const {album} = route.params

        if (photo) {
            const {path, height, width} = photo

            const newPhoto: NewPhotoData = await savePhoto({path, album})
            setPhotoPath(newPhoto.path)

            const coords = await getLocation()

            const date = new Date()

            await savePhotoData({
                album,
                id: newPhoto.id,
                uri: `file://${newPhoto.path}`,
                latitude: coords.latitude,
                longitude: coords.longitude,
                date: dateToPattern(date),
                hour: getHourAndMinuteByDate(date),
                height,
                width
            })
        }
    }

    useEffect(() => {

        async function checkPermissions() {
            let geoStatus = await getGeoLocationPermissionStatus()
            let camStatus = await getCameraPermissionStatus()   

            if (!geoStatus) 
                await requestGeoLocationPermission()

            if (!camStatus)
                await requestCameraPermission()

            geoStatus = await getGeoLocationPermissionStatus()
            camStatus = await getCameraPermissionStatus()

            setHasPermissions(geoStatus && camStatus)
        }

        checkPermissions()

    }, [])

    return (
        <View style={{flex: 1}}>

            {hasPermissions === null && (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color={variables.colors.orange} />
                </View>
            )}

            {hasPermissions === false && (
                <>
                    {navigation.goBack()}
                </>
            )}

            {hasPermissions === true &&
                <>
                    {!device ? 
                        <ActivityIndicator 
                            size="large" 
                            color={variables.colors.orange} 
                            testID="loading-indicator" 
                        /> : 
                        <Camera 
                            ref={camera} 
                            isActive={true} 
                            device={device} 
                            style={StyleSheet.absoluteFill} 
                            photo={true} 
                            testID="camera-view"
                        />
                    }

                    {photoPath ? 
                        <Image source={{uri: `file://${photoPath}`}} style={cameraStyle.current}/> : 
                        <View style={[cameraStyle.current, cameraStyle.currentContainer]}></View>
                    }

                    <TouchableOpacity style={cameraStyle.takePhotoButton} onPress={() => takePhoto()}>
                        <Image source={require('../assets/images/white-camera.png')} style={cameraStyle.camImage}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={cameraStyle.closeCameraButton} onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/images/fechar.png')} style={cameraStyle.camImage}/>
                    </TouchableOpacity>
                </>
            }

        </View>
    )
}
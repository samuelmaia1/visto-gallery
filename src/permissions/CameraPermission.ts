import { Alert, Linking, Platform } from "react-native";
import { Camera } from "react-native-vision-camera";

export async function requestCameraPermission() {
    const response = await Camera.requestCameraPermission()

    if (response === 'granted') 
        return true

    if (response === 'denied') {
        Alert.alert(
            'Permissão negada',
            'Você precisa permitir o acesso à câmera nas configurações do app para usar essa funcionalidade.',
            [
                {
                    text: 'Abrir configurações.',
                    onPress: () => openAppConfig(),
                    style: 'default'
                },
                {
                    text: 'Fechar',
                    style: 'cancel'
                }
            ]
        )
        return false
    }

    return false
}

export async function getCameraPermissionStatus() {
    return Camera.getCameraPermissionStatus();
}

function openAppConfig() {
    if (Platform.OS === 'ios')
        Linking.openURL('app-settings')
    else 
        Linking.openSettings()
}
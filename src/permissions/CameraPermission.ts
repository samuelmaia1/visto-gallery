import { Alert, Linking } from "react-native";
import { Camera } from "react-native-vision-camera";

export async function requestCameraPermission() {
    const response = await Camera.requestCameraPermission()

    if (response === 'granted') 
        return true

    if (response === 'denied') {
        Alert.alert(
            'Permissão negada',
            'Você precisa permitir o acesso à câmera nas configurações do app para tirar fotos e gravar vídeos.',
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

export async function getCameraPermissionStatus(): Promise<boolean> {
    return Camera.getCameraPermissionStatus() === 'granted';
}

export function openAppConfig() {
    Linking.openSettings()
}
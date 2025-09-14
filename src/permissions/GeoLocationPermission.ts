import Geolocation from "@react-native-community/geolocation";
import { Alert, Linking, PermissionsAndroid, Platform } from "react-native";
import { check, PERMISSIONS, RESULTS } from "react-native-permissions";

export async function requestGeoLocationPermission(): Promise<void> {
    if (Platform.OS === 'android')
        await requestAndroidPermission()
    if (Platform.OS === 'ios')
        await requestIosPermission()
}

async function requestAndroidPermission(): Promise<void> {
    const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
            title: 'Permissão para acessar localização',
            message: 'Permita acesso à sua localização para adicionar os dados às fotos tiradas.',
            buttonPositive: 'Permitir',
            buttonNegative: 'Negar'
        }
    )

    if (result === PermissionsAndroid.RESULTS.DENIED) {
        Alert.alert(
            'Permissão negada',
            'Você precisa permitir o acesso à localização nas configurações do app para tirar fotos e gravar vídeos.',
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
    }
}

async function requestIosPermission(): Promise<void> {
    Geolocation.requestAuthorization();

    if (await getIosStatus()) {
        Alert.alert(
            'Permissão negada',
            'Você precisa permitir o acesso à localização nas configurações do app para tirar fotos e gravar vídeos.',
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
    }
}

export async function getGeoLocationPermissionStatus(): Promise<boolean> {
    if (Platform.OS === 'android')
        return await getAndroidStatus()
    if (Platform.OS === 'ios')
        return await getIosStatus()

    return false
}

async function getAndroidStatus(): Promise<boolean> {
    return await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
}

async function getIosStatus(): Promise<boolean> {
    const result = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)

    if (result === RESULTS.GRANTED)
        return true 

    return false
}

export function openAppConfig(): void {
    Linking.openSettings()
}
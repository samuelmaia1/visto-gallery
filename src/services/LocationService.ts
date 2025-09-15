import Geolocation from "@react-native-community/geolocation"


export async function getLocation(): Promise<{latitude: number, longitude: number}> {
    return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
            position => resolve({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }),
            error => reject(error)
        )
    })
}
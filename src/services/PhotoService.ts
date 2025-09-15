import AsyncStorage from "@react-native-async-storage/async-storage";
import { SavePhotoFile, PhotoData, NewPhotoData } from "../interfaces/PhotoData";
import RNFS from 'react-native-fs';

export async function savePhoto({path, album}: SavePhotoFile): Promise<NewPhotoData> {
    const destinyPath = `${RNFS.DocumentDirectoryPath}/visto/gallery/${album}`
    
    if (!(await RNFS.exists(destinyPath)))
        await RNFS.mkdir(destinyPath)

    const fileName = `${Date.now()}.jpg`
    const newPath = `${destinyPath}/${fileName}`

    await RNFS.moveFile(path, newPath)

    return {
        path: `${destinyPath}/${fileName}`,
        id: fileName
    }
}

export async function savePhotoData(data: PhotoData): Promise<void> {
    const storedPhotos = await AsyncStorage.getItem('photos')

    const photos: PhotoData[] = storedPhotos ? JSON.parse(storedPhotos) : []
    photos.unshift(data)
    
    await AsyncStorage.setItem('photos', JSON.stringify(photos))
}

export async function getPhotoById(id: string): Promise<PhotoData | undefined> {
    const storedPhotos = await AsyncStorage.getItem('photos')

    const photos: PhotoData[] = storedPhotos ? JSON.parse(storedPhotos) : []

    return photos.find(photo => photo.id === id)
}

export async function deletePhoto(id: string): Promise<boolean> {

    const storedPhotos = await AsyncStorage.getItem('photos')

    const photos: PhotoData[] = storedPhotos ? JSON.parse(storedPhotos) : []

    const photoToDelete: PhotoData | undefined = photos.find(photo => photo.id === id)

    console.log(photoToDelete)

    if (!photoToDelete) return false

        const path = replacePrefix(photoToDelete.uri)
        if (path) {
            const exists = await RNFS.exists(path)
            if (exists) {
                await RNFS.unlink(path)
            } else {
                console.warn('Arquivo não encontrado:', path)
            }
        }

    const filteredPhotos = photos.filter(photo => photo.id !== id)

    await AsyncStorage.setItem('photos', JSON.stringify(filteredPhotos))

    return true
}
 
export async function getPhotosByAlbum(album: string): Promise<PhotoData[]> {
    const storedPhotos = await AsyncStorage.getItem('photos')

    if (!storedPhotos) 
        return []

    const photos: PhotoData[] = JSON.parse(storedPhotos)

    if (!photos)
        return [] 

    return photos.filter(photo => photo.album === album)
}

export async function getAllPhotos(): Promise<PhotoData[]> {
    const storedPhotos = await AsyncStorage.getItem('photos')

    return storedPhotos ? JSON.parse(storedPhotos) : []
}

function replacePrefix(path: string) {
    return path.startsWith('file://') ? path.replace('file://', '') : path
}
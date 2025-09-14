import AsyncStorage from "@react-native-async-storage/async-storage";
import { SavePhotoFile, PhotoData, NewPhotoData } from "../interfaces/PhotoData";
import RFNS from 'react-native-fs'
import { v4 as uuid } from "uuid";

export async function savePhoto({path, album}: SavePhotoFile): Promise<NewPhotoData> {
    const destinyPath = `${RFNS.DocumentDirectoryPath}/visto/gallery/${album}`
    await RFNS.mkdir(destinyPath)

    const id = `${uuid()}.png`

    await RFNS.moveFile(path, `${destinyPath}/${id}`)

    return {
        path: `${destinyPath}/${id}`,
        id
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

export async function getPhotosByAlbum(album: string): Promise<PhotoData[] | undefined> {
    const storedPhotos = await AsyncStorage.getItem('photos')

    if (!storedPhotos) 
        return []

    const photos: PhotoData[] = JSON.parse(storedPhotos)

    return photos.filter(photo => photo.album === album)
}

export async function getAllPhotos(): Promise<PhotoData[]> {
    const storedPhotos = await AsyncStorage.getItem('photos')

    return storedPhotos ? JSON.parse(storedPhotos) : []
}
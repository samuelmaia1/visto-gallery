import AsyncStorage from "@react-native-async-storage/async-storage";
import { SavePhotoFile, PhotoData, NewPhotoData } from "../interfaces/PhotoData";
import RFNS from 'react-native-fs';

export async function savePhoto({path, album}: SavePhotoFile): Promise<NewPhotoData> {
    const destinyPath = `${RFNS.DocumentDirectoryPath}/visto/gallery/${album}`
    
    if (!(await RFNS.exists(destinyPath)))
        await RFNS.mkdir(destinyPath)

    console.log('Destino:', destinyPath)
    console.log('Origem:', path)

    const fileName = `${Date.now()}.jpg`
    const newPath = `${destinyPath}/${fileName}`

    console.log('Novo path: ', newPath)

    await RFNS.moveFile(path, newPath)

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
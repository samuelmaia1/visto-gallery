import AsyncStorage from '@react-native-async-storage/async-storage';
import { Album } from '../interfaces/AlbumData';
import { dateToPattern, getHourAndMinuteByDate } from '../format/format';


export async function createAlbum(name: string): Promise<Album> {
  const storedAlbums = await AsyncStorage.getItem('albums')
  const albums: Album[] = storedAlbums ? JSON.parse(storedAlbums) : []

  const date = new Date()

  const newAlbum: Album = { name, createdAt: dateToPattern(date), hour: getHourAndMinuteByDate(date), photosUri: [] }
  albums.unshift(newAlbum)

  await AsyncStorage.setItem('albums', JSON.stringify(albums))
  return newAlbum
}

export async function addPhoto(name: string, imageUri: string) {
    const storedAlbums = await AsyncStorage.getItem('albums')
    const albums: Album[] = storedAlbums ? JSON.parse(storedAlbums) : []

    const album: Album | undefined = albums.find(album => album.name === name)

    if (album) {
        album.photosUri.unshift(`file://${imageUri}`)
        await AsyncStorage.setItem('albums', JSON.stringify(albums))
    } else {
        const newAlbum = await createAlbum(name)
        newAlbum.photosUri.unshift(`file://${imageUri}`)
        await AsyncStorage.setItem('albums', JSON.stringify(albums))
    }
}

export async function loadAlbumByName(name: string): Promise<Album> {
  const albums: Album[] = await loadAlbums()

  const album = albums.find(album => album.name === name)

  if (!album)
    throw new Error(`Álbum "${name}" não encontrado`)

  console.log(album.photosUri)
  return album
}

export async function loadAlbums(): Promise<Album[]> {
  const storedAlbums = await AsyncStorage.getItem('albums')
  return storedAlbums ? JSON.parse(storedAlbums) : []
}

export async function existAlbum(name: string) {
    const albums: Album[] = await loadAlbums()

    return albums.find(album => album.name === name)
}
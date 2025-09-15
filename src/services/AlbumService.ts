import AsyncStorage from '@react-native-async-storage/async-storage';
import { Album } from '../interfaces/AlbumData';
import { dateToPattern, getHourAndMinuteByDate } from '../format/format';


export async function createAlbum(name: string): Promise<Album> {
  const storedAlbums = await AsyncStorage.getItem('albums')
  const albums: Album[] = storedAlbums ? JSON.parse(storedAlbums) : []

  const date = new Date()

  if (await existAlbum(name)) {
    throw new Error('Álbum com este nome já existe.')
  }

  const newAlbum: Album = { name, createdAt: dateToPattern(date), hour: getHourAndMinuteByDate(date)}
  albums.unshift(newAlbum)

  await AsyncStorage.setItem('albums', JSON.stringify(albums))
  return newAlbum
}

export async function loadAlbumByName(name: string): Promise<Album> {
  const albums: Album[] = await loadAlbums()

  const album = albums.find(album => album.name === name)

  if (!album)
    throw new Error(`Álbum "${name}" não encontrado`)
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
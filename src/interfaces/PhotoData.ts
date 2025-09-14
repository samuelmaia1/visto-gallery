export interface PhotoData{
    id: string,
    uri: string,
    date: string,
    hour: string,
    longitude: number,
    latitude: number,
    album: string
}

export interface SavePhotoFile{
    path: string,
    album: string
}

export interface NewPhotoData {
    path: string,
    id: string
}
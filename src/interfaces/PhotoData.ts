export interface PhotoData{
    id: string,
    uri: string,
    moment: Date,
    longitude: string,
    latitude: string,
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
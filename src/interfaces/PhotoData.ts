export interface PhotoData{
    id: string,
    uri: string,
    date: string,
    hour: string,
    longitude: number,
    latitude: number,
    album: string,
    height: number,
    width: number
}

export interface SavePhotoFile{
    path: string,
    album: string
}

export interface NewPhotoData {
    path: string,
    id: string
}

export interface Local {
    display_name: string,
    address: {
        road: string,
        city: string,
        state: string,
        country: string
    }
}
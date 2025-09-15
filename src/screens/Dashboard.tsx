import {  Text, TouchableOpacity, View } from "react-native";
import { DashboardScreenProps } from "../nav/RootParam";
import { Header } from "../components/Header/Header";
import { dashboardStyle } from "../styles/DashboardStyle";
import { useCallback, useState } from "react";
import { PhotoData } from "../interfaces/PhotoData";
import { getAllPhotos } from "../services/PhotoService";
import { useFocusEffect } from "@react-navigation/native";
import { ImageList } from "../components/ImageList/ImageList";
import { ControllButtons } from "../components/ControllButtons/ControllButtons";
import { AlbumsList } from "../components/AlbunsList/AlbumsList";

export function Dashboard({navigation, route}: DashboardScreenProps) {

    const [photos, setPhotos] = useState<PhotoData[]>([])
    const [step, setStep] = useState('photos')
    const [selectedPhotos, setSelectedPhotos] = useState<string[]>([])

    useFocusEffect(
        useCallback(() => {
            async function loadPhotos() {
            setPhotos(await getAllPhotos())
        }

        loadPhotos()
        }, [])
    )

    const includePhoto = (id: string) => {
        setSelectedPhotos((prev) => [...prev, id])
    }

    const removePhoto = (id: string) => {
        setSelectedPhotos((prev) => prev.filter(photo => photo !== id))
    }

    return (
        <View style={dashboardStyle.container}>
            <Header />

            <View style={{flexDirection: 'row', justifyContent: 'center', gap: 30}}>
                <TouchableOpacity 
                    onPress={() => setStep('photos')}
                >
                    <Text 
                        style={step === 'photos' ? dashboardStyle.selectedStep : dashboardStyle.unselectedStep}
                    >
                        Fotos
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => setStep('albums')}
                >
                    <Text 
                        style={step === 'albums' ? dashboardStyle.selectedStep : dashboardStyle.unselectedStep}
                    >
                        Álbuns
                    </Text>
                </TouchableOpacity>
            </View>

            {step === 'photos' && <ImageList data={photos} includePhoto={includePhoto} removePhoto={removePhoto}/>}

            {step === 'albums' && <AlbumsList/>}

            {selectedPhotos.length > 0 && <ControllButtons selectedPhotos={selectedPhotos}/>}
        </View> 
    )
}
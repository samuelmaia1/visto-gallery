import {  Text, TouchableOpacity, View } from "react-native";
import { DashboardScreenProps } from "../nav/RootParam";
import { Header } from "../components/Header/Header";
import { dashboardStyle } from "../styles/DashboardStyle";
import { useCallback, useState } from "react";
import { PhotoData } from "../interfaces/PhotoData";
import { getAllPhotos } from "../services/PhotoService";
import { useFocusEffect } from "@react-navigation/native";
import { ImageList } from "../components/ImageList/ImageList";
import { AlbumsList } from "../components/AlbunsList/AlbumsList";
import { ListEmptyComponent } from "../components/Utils/Utils";

export function Dashboard({navigation, route}: DashboardScreenProps) {

    const [photos, setPhotos] = useState<PhotoData[]>([])
    const [step, setStep] = useState(route.params.step || 'photos')

    useFocusEffect(
        useCallback(() => {
            async function loadPhotos() {
            setPhotos(await getAllPhotos())
        }

        loadPhotos()
        }, [])
    )

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

            {step === 'photos' && 
                <>
                    {photos.length == 0 ? <ListEmptyComponent /> : < ImageList data={photos}/>}
                </>
            }

            {step === 'albums' && <AlbumsList/>}
        </View> 
    )
}
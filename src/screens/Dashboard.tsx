import {  FlatList, Image, Text, Touchable, TouchableOpacity, View } from "react-native";
import { DashboardScreenProps } from "../nav/RootParam";
import { Header } from "../components/Header";
import { dashboardStyle } from "../styles/DashboardStyle";
import { useCallback, useState } from "react";
import { PhotoData } from "../interfaces/PhotoData";
import { getAllPhotos } from "../services/PhotoService";
import { useFocusEffect } from "@react-navigation/native";
import { ImageItem } from "../components/ImageItem";
import { ImageList } from "../components/ImageList";

type Props = {}

type DashboardProps = DashboardScreenProps & Props

export function Dashboard({navigation, route}: DashboardProps) {

    const [photos, setPhotos] = useState<PhotoData[]>([])
    const [step, setStep] = useState('photos')

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
                    onPress={() => setStep('albuns')}
                >
                    <Text 
                        style={step === 'albuns' ? dashboardStyle.selectedStep : dashboardStyle.unselectedStep}
                    >
                        Álbuns
                    </Text>
                </TouchableOpacity>
            </View>

            <ImageList data={photos}/>
        </View> 
    )
}
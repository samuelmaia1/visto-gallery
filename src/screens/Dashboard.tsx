import {  FlatList, Image, View } from "react-native";
import { DashboardScreenProps } from "../nav/RootParam";
import { Header } from "../components/Header";
import { dashboardStyle } from "../styles/DashboardStyle";
import { useCallback, useState } from "react";
import { PhotoData } from "../interfaces/PhotoData";
import { getAllPhotos } from "../services/PhotoService";
import { useFocusEffect } from "@react-navigation/native";

type Props = {}

type DashboardProps = DashboardScreenProps & Props

export function Dashboard({navigation, route}: DashboardProps) {

    const [photos, setPhotos] = useState<PhotoData[]>([])

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

            

            <FlatList 
                keyExtractor={(item) => item.id}
                data={photos}
                renderItem={({item}) => <Image source={{uri: item.uri}} style={{width: 100, height: 100}} />}
            />
        </View> 
    )
}
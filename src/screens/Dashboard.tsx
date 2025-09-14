import {  View } from "react-native";
import { DashboardScreenProps } from "../nav/RootParam";
import { Header } from "../components/Header";
import { dashboardStyle } from "../styles/DashboardStyle";

type Props = {}

type DashboardProps = DashboardScreenProps & Props

export function Dashboard({navigation, route}: DashboardProps) {

    return (
        <View style={dashboardStyle.container}>
            <Header />
            
        </View> 
    )
}
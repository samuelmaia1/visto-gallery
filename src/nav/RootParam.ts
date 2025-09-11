import {  NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootParamList = {
    Home: undefined,
    Dashboard: undefined
}

export type HomeScreenProps = NativeStackScreenProps<RootParamList, 'Home'> 
export type DashboardScreenProps = NativeStackScreenProps<RootParamList, 'Dashboard'> 
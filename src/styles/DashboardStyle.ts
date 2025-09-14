import { StyleSheet } from "react-native";
import { variables } from "./GlobalStyle";


export const dashboardStyle = StyleSheet.create({
    container: {
        paddingVertical: 50,
        flex: 1,
        backgroundColor: variables.colors.white
    },
    selectedStep: {
        fontWeight: '700',
        color: variables.colors.orange
    },
    unselectedStep: {
        color: 'gray'
    }
})
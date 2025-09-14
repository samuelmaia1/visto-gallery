import { StyleSheet } from "react-native";
import { variables } from "./GlobalStyle";


export const imageItemStyle = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: 'transparent',
        borderRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: 100,
        height: 100
    },
    selected: {
        borderWidth: 2,
        borderColor: variables.colors.orange
    },
    icon: {
        position: 'absolute',
        bottom: 10,
        left: 5
    }
})
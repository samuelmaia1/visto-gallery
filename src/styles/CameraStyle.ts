import { StyleSheet } from "react-native";
import { variables } from "./GlobalStyle";


export const style = StyleSheet.create({
    takePhotoButton: {
        position: 'absolute',
        bottom: 50,
        backgroundColor: variables.colors.orange,
        alignSelf: 'center',
        padding: 20,
        borderRadius: '50%',
        width: 60,
        height: 60
    },
    camImage: {
        width: 20,
        height: 20
    }
})
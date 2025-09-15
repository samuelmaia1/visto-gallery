import { StyleSheet } from "react-native";
import { variables } from "./GlobalStyle";


export const cameraStyle = StyleSheet.create({
    takePhotoButton: {
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center',

        backgroundColor: 'darkgreen',
        
        padding: 20,
        borderRadius: '50%',
        width: 60,
        height: 60
    },
    camImage: {
        width: 20,
        height: 20
    },
    current: {
        width: 60,
        height: 60,

        borderWidth: 2,
        borderColor: variables.colors.white,
        borderRadius: 8,

        position: 'absolute',
        bottom: 50,
        left: 30,
        
    },
    currentContainer: {
        backgroundColor: variables.colors.black,
    },
    closeCameraButton: {
        position: 'absolute',
        top: 50,
        right: 30
    }
})
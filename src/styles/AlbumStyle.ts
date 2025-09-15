import { StyleSheet } from "react-native";
import { variables } from "./GlobalStyle";

export const albumStyle = StyleSheet.create({
    container: {
        paddingVertical: 70,
        paddingHorizontal: 30,
        flex: 1
    },
    title: {
        fontSize: 24,
        fontWeight: '600'
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
    },
    newPhotoButton: {
        backgroundColor: 'blue',
        borderRadius: 8,
        padding: 8
    },
    textButton: {
        fontWeight: '600',
        color: variables.colors.white
    },
    image: {
        width: 100,
        height: 100
    },
    imageList: {
        marginTop: 30
    },
    imageContainer: {
        borderWidth: 2,
        borderColor: 'transparent',
        borderRadius: 10,
        overflow: 'hidden'
    }
})
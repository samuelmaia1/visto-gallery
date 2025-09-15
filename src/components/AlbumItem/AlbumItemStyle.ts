import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 10,

        borderRadius: 8,

        flexDirection: 'row',
        gap: 10,
    },
    image: {
        width: 80,
        height: 80
    },
    title: {
        fontWeight: 600,
        marginBottom: 10
    },
    imageContainer: {
        borderWidth: 2,
        borderColor: 'transparent',
        borderRadius: 10,

        overflow: 'hidden'
    },
    info: {
        fontSize: 12,
        color: '#585656ff'
    }
})
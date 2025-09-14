import { StyleSheet } from "react-native";
import { variables } from "../../styles/GlobalStyle";

export const style = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        marginTop: 20,
        gap: 10
    },
    button: {
        padding: 10,
        width: '100%',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    sendButton: {
        backgroundColor: 'blue',
    },
    deleteButton: {
        backgroundColor: 'red'
    },
    buttonText: {
        color: variables.colors.white,
        fontWeight: 'bold'
    }
})
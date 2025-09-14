import { StyleSheet } from "react-native";
import { variables } from "../../styles/GlobalStyle";


export const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '80%',
        backgroundColor: variables.colors.white,
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
        gap: 15
    },
    button: {
        padding: 10,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        flex: 1
    },
    cancelButton: {
        backgroundColor: variables.colors.red
    },
    buttonText: {
        color: variables.colors.white,
        fontWeight: 'bold'
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: '100%',
        gap: 10
    },
    confirmButton: {
        backgroundColor: variables.colors.green
    }
})
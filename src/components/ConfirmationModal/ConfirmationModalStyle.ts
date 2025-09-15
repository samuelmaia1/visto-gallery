import { StyleSheet } from "react-native";
import { variables } from "../../styles/GlobalStyle";


export const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    container: {
        width: '80%',
        padding: 20,

        backgroundColor: variables.colors.white,

        borderRadius: 12,

        alignItems: 'center',
        gap: 15
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 8,
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
        gap: 10,

        width: '100%',
    },
    confirmButton: {
        backgroundColor: variables.colors.green
    },
    closeButton: {
        padding: 10,
        borderRadius: 8,
        width: '100%',

        backgroundColor: variables.colors.green,
        
        alignItems: 'center'
    }
})
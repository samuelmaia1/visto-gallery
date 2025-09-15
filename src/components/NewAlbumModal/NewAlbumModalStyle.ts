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
            alignItems: 'center',
            gap: 15,

            width: '80%',
            borderRadius: 12,
            padding: 20,

            backgroundColor: variables.colors.white,
        },
        button: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,

            padding: 10,
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
        input: {
            borderWidth: 2,
            borderRadius: 8,
            borderColor: 'gray',
            
            width: '100%',
        },
})
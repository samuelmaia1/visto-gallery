import { StyleSheet } from "react-native";
import { variables } from "../../styles/GlobalStyle";

export const styles = StyleSheet.create({
    button: {
        padding: 10,
        width: '100%',
        borderRadius: 8,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    deleteButton: {
        backgroundColor: variables.colors.red,

        width: '100%',
        
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center'
    },
    buttonText: {
        color: variables.colors.white,
        fontWeight: 'bold'
    }
})
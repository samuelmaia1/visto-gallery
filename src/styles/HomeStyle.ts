import { StyleSheet } from "react-native";
import { variables } from "./GlobalStyle";

export const style = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'space-around'
    },
    gradient: {
        fontSize: 40,
        fontFamily: 'MontserratAlternates-SemiBold',
        fontWeight: '600',
        textAlign: 'center'
    },
    buttonsContainer: {
        alignItems: 'center',
        gap: 30,
        paddingHorizontal: 30
    },
    button: {
        backgroundColor: '#B52828',
        padding: 10,
        width: '100%',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    buttonText: {
        color: variables.colors.white,
        fontWeight: 'bold'
    }
})  
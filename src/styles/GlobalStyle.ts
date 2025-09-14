import { StyleSheet } from "react-native";

export const variables = {
    colors: {
        black: '#333',
        white: '#FFF',
        orange: '#D7540D'
    },
    fonts: {
        inter: 'Inter-VariableFont_opsz,wght',
        montserrat: 'Montserrat-Regular'
    }
}

export const global = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
        backgroundColor: '#FFF'
    },
    text: {
        color: variables.colors.black,
        fontSize: 16,
        fontFamily: variables.fonts.montserrat
    }
})


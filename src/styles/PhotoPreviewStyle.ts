import { StyleSheet } from "react-native";
import { variables } from "./GlobalStyle";


export const styles = StyleSheet.create({
    container: {
        paddingVertical: 70,
        paddingHorizontal: 30,
        flex: 1
    },
    image: {
        height: 500,
        width: '100%',
        alignSelf: 'center',    
    },
    propTitle: {
        fontWeight: '600',
        color: variables.colors.orange
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
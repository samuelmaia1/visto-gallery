import { Image, TouchableOpacity, Text } from "react-native";
import { styles } from "./DeleteButtonStyle";

interface DeleteButtonProps{
    onPress: () => void
}

export function DeleteButton({onPress}: DeleteButtonProps) {
    return (
        <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={onPress}>
            <Image source={require('../../assets/images/trash-icon.png')}/>
            <Text style={styles.buttonText}>Deletar foto</Text>
        </TouchableOpacity>
    )
}
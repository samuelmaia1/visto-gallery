import { Image, TouchableOpacity, Text } from "react-native";
import { styles } from "./DeleteButtonStyle";
import { useState } from "react";
import { ConfirmationModal } from "../ConfirmationModal/ConfirmationModal";

interface DeleteButtonProps{
    id: string
}

export function DeleteButton({id}: DeleteButtonProps) {

    const [visible, setVisible] = useState<boolean>(false)

    async function deletePhoto(id: string) {

    }

    return (
        <>
            <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={() => setVisible(true)}>
                <Image source={require('../../assets/images/trash-icon.png')}/>
                <Text style={styles.buttonText}>Deletar foto</Text>
            </TouchableOpacity>

            <ConfirmationModal
                visible={visible}
                onConfirm={() => {}}
            />
        </>
        
    )
}
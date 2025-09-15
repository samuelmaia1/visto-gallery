import { ActivityIndicator, Modal, ModalProps, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./ConfirmationModalStyle";
import { useState } from "react";

type ConfirmationModalProps = {
    onConfirm: () => Promise<boolean>,
    onCancel: () => void
} & ModalProps

export function ConfirmationModal({onConfirm, onCancel, visible, onRequestClose} : ConfirmationModalProps) {

    const [loading, setLoading] = useState<boolean>(false)
    const [confirmationStep, setConfirmationStep] = useState<boolean>(false)
    const [feedback, setFeedback] = useState<string>('')

    const handleDeletePhoto = async () => {
        setLoading(true)

        const response = await onConfirm()

        if (response) {
            setConfirmationStep(true)
            setFeedback('Imagem(s) deletada(s) com sucesso.')
        } else {
            setConfirmationStep(true)
            setFeedback('Erro interno ao deletar. Por favor, tente novamente mais tarde.')
        }
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    
                    {!confirmationStep && 
                    <>
                        <Text>Tem certeza que deseja excluir a(s) foto(s)?</Text>
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity style={[styles.button, styles.confirmButton]} onPress={handleDeletePhoto}>
                                {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Confirmar</Text>}
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={onCancel}>
                                <Text style={styles.buttonText}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </>}

                    {confirmationStep && <>
                        <Text>{feedback}</Text>
                        <TouchableOpacity onPress={onRequestClose} style={styles.closeButton}>
                            <Text style={styles.buttonText}>Fechar</Text>
                        </TouchableOpacity>
                    </>}
                </View>
            </View>
        </Modal>
    )
}
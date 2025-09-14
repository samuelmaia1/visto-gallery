import { Modal, ModalProps, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./ConfirmationModalStyle";

type ConfirmationModalProps = {
    onConfirm: () => void
} & ModalProps

export function ConfirmationModal({onConfirm, animationType, transparent, visible, onRequestClose} : ConfirmationModalProps) {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text>Tem certeza que deseja excluir a(s) foto(s)?</Text>

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={[styles.button, styles.confirmButton]} onPress={onConfirm}>
                            <Text style={styles.buttonText}>Confirmar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => {}}>
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
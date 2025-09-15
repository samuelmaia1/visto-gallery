import { Modal, ModalProps, View, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./NewAlbumModalStyle";
import { useState } from "react";

export function NewAlbumModal({visible, onRequestClose, ...rest}: ModalProps) {

    const [name, setName] = useState<string>('')

    return (
        <Modal
            animationType="fade"
            visible={visible}   
            {...rest}
        >
            <View style={styles.overlay}>

                <View style={styles.container}>
                    
                    <Text>Nome do álbum: </Text>
                    <TextInput value={name} onChangeText={setName} style={styles.input}/>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={[styles.button, styles.confirmButton]}>
                            <Text style={styles.buttonText}>Criar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={onRequestClose}>
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
        </Modal>
    )
}
import { Modal, ModalProps, View, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./NewAlbumModalStyle";
import { useState } from "react";
import { createAlbum } from "../../services/AlbumService";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "../../nav/RootParam";
import { useNavigation } from "@react-navigation/native";

type Navigation = NativeStackNavigationProp<RootParamList>

export function NewAlbumModal({visible, onRequestClose, ...rest}: ModalProps) {

    const [name, setName] = useState<string>('')
    const [feedback, setFeedback] = useState<string>('')

    const navigation = useNavigation<Navigation>()

    const handleCreateAlbum = async () => {
        if (name.length > 0) {
            const album = await createAlbum(name)
            navigation.navigate('Album', {name})
        }
        else 
            setFeedback('O nome do álbum não pode ser vazio.')
    }

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

                        <TouchableOpacity style={[styles.button, styles.confirmButton]} onPress={handleCreateAlbum}>
                            <Text style={styles.buttonText}>Criar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={onRequestClose}>
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>

                    </View>

                    {feedback && <Text>{feedback}</Text>}

                </View>
            </View>
        </Modal>
    )
}
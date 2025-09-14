import { View , TouchableOpacity, Text, Image } from "react-native";
import { style } from "./ControllButtonsStyle";
import Animated, { SlideInUp } from "react-native-reanimated";

interface ControllButtonsProps {
    selectedPhotos: string[]
}

export function ControllButtons({selectedPhotos}: ControllButtonsProps) {
    return (
        <View 
            style={[style.container]}
        >

            <TouchableOpacity style={[style.button, style.sendButton]}>
                <Image source={require('../../assets/images/send-icon.png')}/> 
                <Text style={style.buttonText}>Enviar para álbum</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[style.button, style.deleteButton]}>
                <Image source={require('../../assets/images/trash-icon.png')}/>
                <Text style={style.buttonText}>Deletar fotos</Text>
            </TouchableOpacity>

        </View>
    )
}
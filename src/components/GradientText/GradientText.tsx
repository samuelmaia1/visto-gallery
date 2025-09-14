import MaskedView from "@react-native-masked-view/masked-view";
import { Text, TextStyle, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

interface GradientTextProps{
    text: string,
    colors: string[],
    style?: TextStyle
}

export function GradientText({text, colors, style}: GradientTextProps) {
    return (
        <MaskedView maskElement={<Text style={[{backgroundColor: 'transparent'} ,style]}>{text}</Text>}>

            <LinearGradient 
                colors={colors}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
            >
                <Text style={[style, {opacity: 0}]}>{text}</Text>
            </LinearGradient>
            
        </MaskedView>
    )
}
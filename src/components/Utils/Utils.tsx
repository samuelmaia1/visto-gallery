import { View, Image, Text } from "react-native";

export function ListEmptyComponent() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../../assets/images/empty-icon.png')}/>
            <Text>Ainda não há conteúdo aqui.</Text>
        </View>
    )
}

export function Separator() {
    return (
        <View style={{height: 10}}>

        </View>
    )
}
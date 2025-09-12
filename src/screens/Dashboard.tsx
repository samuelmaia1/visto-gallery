import { TouchableOpacity, View, Text } from "react-native";
import { DashboardScreenProps } from "../nav/RootParam";

type Props = {}

type DashboardProps = DashboardScreenProps & Props

export function Dashboard({navigation, route}: DashboardProps) {

    return (
        <View style={{justifyContent: 'center', flex: 1}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
                <Text>Camera</Text>
            </TouchableOpacity>
        </View> 
    )
}
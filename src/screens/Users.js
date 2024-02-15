
import { UPDATE_ON_USER, endpoints } from "../Endpoints/endpoints"
import { users } from "../helper/extrapropertise"
import DataView from "../GenericComponent/Dataview"
import { SafeAreaView, View, Text } from "react-native-web"
import { dataview } from "../styles/Dataview"

const Card = ({ item }) => {
    return (
        <SafeAreaView style={dataview.card} >
            <View >
                <View >
                    <Text style={dataview.textStyle}>
                        {item.name}
                    </Text>
                    <Text style={dataview.textStyle} >
                        {item.email}
                    </Text>
                    <Text style={dataview.textStyle}>
                        {item.address}
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export const Users = ({ navigation }) => {
    const queryKey = [UPDATE_ON_USER]
    const queryFunction = async () => {
        var data = await endpoints.Users.getAll()
        console.log(data);
        var accounts = await endpoints.Account.getAll()
        console.log(accounts);
        return data
    }
    const getValueToSearch = (current) => {
        return (
            current.name
        )
    }

    return (
        <SafeAreaView >
            <DataView
                queryFunction={queryFunction}
                queryKey={queryKey}
                getSearchableValue={getValueToSearch}
                Card={Card}
                dataviewTitle={"Users"}
                navigation={navigation}
            />
        </SafeAreaView>
    )

}
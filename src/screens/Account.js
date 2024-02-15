
import { UPDATE_ON_ACCOUNT, endpoints } from "../Endpoints/endpoints"
import { NODATA, users } from "../helper/extrapropertise"
import DataView from "../GenericComponent/Dataview"
import { SafeAreaView, View, Text } from "react-native-web"
import { dataview } from "../styles/Dataview"

const Card = ({ item }) => {
    return (
        <SafeAreaView style={dataview.card} >
            <View >
                <View >
                    <Text style={dataview.textStyle}>
                        {item.clientName || NODATA}
                    </Text>
                    <Text style={dataview.textStyle || NODATA} >
                        {item.email}
                    </Text>
                    <Text style={dataview.textStyle || NODATA}>
                        {item.aadhar}
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export const Accounts = ({navigation}) => {
    const queryKey = [UPDATE_ON_ACCOUNT]
    const queryFunction = async () => {
        var accounts = await endpoints.Account.getAll()
        console.log(accounts);
        return accounts
    }
    const getValueToSearch = (current) => {
        return (
            current.email +
            current.clientName +
            current.aadhar
        )
    }

    return (
        <SafeAreaView>
            <DataView
                queryFunction={queryFunction}
                queryKey={queryKey}
                getSearchableValue={getValueToSearch}
                Card={Card}
                dataviewTitle = {"Accounts"}
                navigation = {navigation}
            />
        </SafeAreaView>
    )

}
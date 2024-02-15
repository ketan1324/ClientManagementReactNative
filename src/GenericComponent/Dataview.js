import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinneer";
import { TextInput, View, Text, Button } from "react-native-web";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { dataview } from "../styles/Dataview";


function DataView({ queryFunction, queryKey, getSearchableValue, Card, DetailedElement, newDataButton, dataviewTitle, navigation }) {
    const [searchString, setSearchString] = useState("");
    const [selectedItem, setSelectedItem] = useState(undefined);

    var { data, isError, isLoading, error } = useQuery({ queryKey: queryKey, queryFn: async () => await queryFunction() });

    if (data && searchString !== "") {
        data = data.filter((current) => {
            var valueToSearchIn = getSearchableValue(current).toLowerCase();
            var valueToSearch = searchString.toLowerCase();
            return valueToSearchIn.includes(valueToSearch);
        })
    }

    if (selectedItem && DetailedElement) {
        return (
            <DetailedElement item={selectedItem} setSelectedItem={setSelectedItem} />
        )
    }

    if (isLoading) {
        return (
            <View  >
                <LoadingSpinner />
            </View >
        )
    }

    if (isError) {
        return (
            <View >
                <View role="alert">
                    {error}
                </View>
            </View>
        )
    }

    if (data) {
        return (
            <SafeAreaView style={dataview.container}>
                <View style={dataview.DataviewHeader}>
                    <View style={dataview.text}>
                        {dataviewTitle}
                    </View>
                    <Button style = {dataview.back} title="Back" onPress={() =>
                        navigation.navigate('homepage')
                    } />
                </View>
                <View style={dataview.stickyInput} >
                    <TextInput
                        style={dataview.input}
                        onChange={(e) => setSearchString(e.target.value)}
                        placeholder="Search"
                    />
                    {
                        newDataButton ?
                            <View style={dataview.textStyle}>
                                {newDataButton}
                            </View> : null
                    }
                </View>
                <View style={dataview.heightAndOverflow}>
                    <ScrollView  >
                        <View >
                            {
                                data && data.length === 0 ?
                                    <View style={dataview.card}>
                                        <Text style={dataview.textStyle}>
                                            No Data To Display
                                        </Text>
                                    </View>
                                    :
                                    <View >
                                        {
                                            data.map((item, index) =>
                                                <View style={dataview.cardContainer} key={index} onClick={() => setSelectedItem(item)}>
                                                    <Card item={item}></Card>
                                                </View>
                                            )
                                        }
                                    </View>
                            }
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView >
        )
    }
}

export default DataView;
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';

import { COLORS, SIZES, pulmonarDataData, cardiacaData } from '../constants';
import DescriptionCard from '../components/DescriptionCard/DescriptionCard';
import ItemList from '../components/ItemList/ItemList';
import Tabs from '../components/Tabs/Tabs';
import { setSelectItem } from '../redux/reducers/itemList/itemListSlice';
import { setDescriptionText } from '../redux/reducers/descriptionCard/descriptionCardSlice';
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
    const selectedTab = useSelector(state => state.tabs.tabSelected);
    const dispatch = useDispatch();
    let items = [];

    const resetDescriptionAndItemSelected = () => {
        dispatch(setDescriptionText({ description: '' }))
        dispatch(setSelectItem({}))
    }

    if(selectedTab === 0) {
        items = JSON.parse(JSON.stringify(pulmonarDataData));
        resetDescriptionAndItemSelected()
    } else if(selectedTab === 1) {
        items = JSON.parse(JSON.stringify(cardiacaData));
        resetDescriptionAndItemSelected()
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
                <Stack.Screen 
                    options={{ 
                        headerStyle: { backgroundColor: COLORS.purple },
                        headerShadowVisible: false,
                        headerTitle: "Auscultação"
                    }}
                />
                    <Tabs />
                    <View style={{ flex: 1, padding: SIZES.medium }}>
                        <View style={{ position: 'sticky', top: 0 }}>
                            <DescriptionCard />
                        </View>

                        <ScrollView>
                            <ItemList items={items} />
                        </ScrollView>
                    </View>
            </SafeAreaView>
    );
}

export default App;
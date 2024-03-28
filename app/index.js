import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Provider } from 'react-redux'
import store from '../redux/store/configureStore'

import { COLORS, SIZES, soundsData } from '../constants';
import DescriptionCard from '../components/DescriptionCard/DescriptionCard';
import ItemList from '../components/ItemList/ItemList';
import Tabs from '../components/Tabs/Tabs';

const Home = () => {
    const router = useRouter();
    const items = JSON.parse(JSON.stringify(soundsData));

    return (
        <Provider store={store}>
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
        </Provider>
    );
}

export default Home;
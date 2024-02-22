import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, SIZES, FONT } from '../constants';
import DescriptionCard from '../components/DescriptionCard/DescriptionCard';
import ItemList from '../components/ItemList/ItemList';
import Tabs from '../components/Tabs/Tabs';

const Home = () => {
    const router = useRouter();

    const items = [
        { id: 1, title: 'Item 1', iconLeft: 'heart', iconRight: 'play' },
        { id: 2, title: 'Item 2', iconLeft: 'heart', iconRight: 'play' },
        { id: 3, title: 'Item 3', iconLeft: 'heart', iconRight: 'play' },
        { id: 4, title: 'Item 4', iconLeft: 'heart', iconRight: 'play'},
        { id: 5, title: 'Item 5', iconLeft: 'heart', iconRight: 'play'},
        { id: 6, title: 'Item 6', iconLeft: 'heart', iconRight: 'play'},
        { id: 7, title: 'Item 7', iconLeft: 'heart', iconRight: 'play'},
        { id: 8, title: 'Item 8', iconLeft: 'heart', iconRight: 'play'},
        { id: 9, title: 'Item 9', iconLeft: 'heart', iconRight: 'play'},
        { id: 10, title: 'Item 10', iconLeft: 'heart', iconRight: 'play'},
        { id: 11, title: 'Item 11', iconLeft: 'heart', iconRight: 'play'},
        { id: 12, title: 'Item 12', iconLeft: 'heart', iconRight: 'play'},
        { id: 13, title: 'Item 13', iconLeft: 'heart', iconRight: 'play'},
        { id: 14, title: 'Item 14', iconLeft: 'heart', iconRight: 'play'},
        { id: 15, title: 'Item 15', iconLeft: 'heart', iconRight: 'play'},
        { id: 16, title: 'Item 16', iconLeft: 'heart', iconRight: 'play'},
        { id: 17, title: 'Item 17', iconLeft: 'heart', iconRight: 'play'},
        { id: 18, title: 'Item 18', iconLeft: 'heart', iconRight: 'play'},
        { id: 19, title: 'Item 19', iconLeft: 'heart', iconRight: 'play'},
        { id: 20, title: 'Item 20', iconLeft: 'heart', iconRight: 'play'},
    ];

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

export default Home;
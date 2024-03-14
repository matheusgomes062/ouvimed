import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, SIZES, FONT } from '../constants';
import DescriptionCard from '../components/DescriptionCard/DescriptionCard';
import ItemList from '../components/ItemList/ItemList';
import Tabs from '../components/Tabs/Tabs';

const Home = () => {
    const router = useRouter();

    const items = [
        { id: 1, title: 'Crepitaçoes Finais', iconLeft: 'heart', iconRight: 'play', group: 'ausculta_pulmonar', audio: 'Crepitaçoes Finais'},
        { id: 2, title: 'Crepitaçoes Grosseiras', iconLeft: 'heart', iconRight: 'play', group: 'ausculta_pulmonar', audio: 'Crepitaçoes Grosseiras'},
        { id: 3, title: 'Esfregar Pleural', iconLeft: 'heart', iconRight: 'play', group: 'ausculta_pulmonar', audio: 'Esfregar Pleural'},
        { id: 4, title: 'Respiração Broncovascular', iconLeft: 'heart', iconRight: 'play', group: 'ausculta_pulmonar', audio: 'Respiração Broncovascular'},
        { id: 5, title: 'Respiração Bronquica', iconLeft: 'heart', iconRight: 'play', group: 'ausculta_pulmonar', audio: 'Respiração Bronquica'},
        { id: 6, title: 'Respiração Vesicular', iconLeft: 'heart', iconRight: 'play', group: 'ausculta_pulmonar', audio: 'Respiração Vesicular'},
        { id: 7, title: 'Sibilos', iconLeft: 'heart', iconRight: 'play', group: 'ausculta_pulmonar', audio: 'Sibilos'},
        { id: 8, title: 'Sons de Respiração Reduzida', iconLeft: 'heart', iconRight: 'play', group: 'ausculta_pulmonar', audio: 'Sons de Respiração Reduzida'},
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
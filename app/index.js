import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Stack, useRouter } from 'expo-router';

import { COLORS, SIZES, FONT } from '../constants';
import DescriptionCard from '../components/DescriptionCard/DescriptionCard';
import ItemList from '../components/ItemList/ItemList';

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <Stack.Screen 
                options={{ 
                    headerStyle: { backgroundColor: COLORS.purple },
                    headerShadowVisible: false,
                    headerTitle: "Auscultação"
                }}
            />
            <ScrollView>
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <DescriptionCard />
                    <ItemList />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;
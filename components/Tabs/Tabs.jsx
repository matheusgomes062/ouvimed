import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux'
import { setTab } from '../../redux/reducers/tabs/tabsSlice'

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const dispatch = useDispatch();

    const handleTabClick = (index) => {
        setActiveTab(index);
        dispatch(setTab(index));
    };

    return (
        <View style={styles.container}>
            <View style={styles.tabsContainer}>
                <TouchableOpacity
                    style={[
                        styles.tabButton,
                        activeTab === 0 && styles.activeTabButton,
                    ]}
                    onPress={() => handleTabClick(0)}
                >
                    <Text style={[styles.tabButtonText, activeTab === 0 && styles.activeTabButtonText]}>Pulmonar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.tabButton,
                        activeTab === 1 && styles.activeTabButton,
                    ]}
                    onPress={() => handleTabClick(1)}
                >
                    <Text style={[styles.tabButtonText, activeTab === 1 && styles.activeTabButtonText]}>Cardíaca</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.tabButton,
                        activeTab === 2 && styles.activeTabButton,
                    ]}
                    onPress={() => handleTabClick(2)}
                >
                    <Text style={[styles.tabButtonText, activeTab === 2 && styles.activeTabButtonText]}>Outros</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'grey',
        padding: 5,
    },
    tabButton: {
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    activeTabButton: {
        backgroundColor: 'white',
        borderRadius: 20,
    },
    tabButtonText: {
        color: 'white',
        fontSize: 18,
    },
    activeTabButtonText: {
        color: 'black',
    },
});

export default Tabs;
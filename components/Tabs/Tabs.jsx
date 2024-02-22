import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [itemList, setItemList] = useState([]);

    const handleTabClick = (index) => {
        setActiveTab(index);

        // Update the item list based on the selected tab
        if (index === 0) {
            setItemList(['Item 1', 'Item 2', 'Item 3']);
        } else if (index === 1) {
            setItemList(['Item A', 'Item B', 'Item C']);
        } else if (index === 2) {
            setItemList(['Apple', 'Banana', 'Orange']);
        }
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
                    <Text style={[styles.tabButtonText, activeTab === 0 && styles.activeTabButtonText]}>Tab 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.tabButton,
                        activeTab === 1 && styles.activeTabButton,
                    ]}
                    onPress={() => handleTabClick(1)}
                >
                    <Text style={[styles.tabButtonText, activeTab === 1 && styles.activeTabButtonText]}>Tab 2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.tabButton,
                        activeTab === 2 && styles.activeTabButton,
                    ]}
                    onPress={() => handleTabClick(2)}
                >
                    <Text style={[styles.tabButtonText, activeTab === 2 && styles.activeTabButtonText]}>Tab 3</Text>
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
    },
    activeTabButtonText: {
        color: 'black',
    },
});

export default Tabs;
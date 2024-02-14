import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ItemList = () => {
    const items = [
        { title: 'Item 1', iconLeft: 'user', iconRight: 'chevron-down' },
        { title: 'Item 2', iconLeft: 'user', iconRight: 'chevron-down' },
        { title: 'Item 3', iconLeft: 'user', iconRight: 'chevron-down' },
    ];

    return (
        <View style={styles.container}>
            {items.map((item, index) => (
                <View key={index} style={styles.itemContainer}>
                    <View style={styles.iconTitle}>
                        <Feather name={item.iconLeft} size={24} color="black" style={styles.icon} />
                        <Text style={styles.itemTitle}>{item.title}</Text>
                    </View>
                    <Feather name={item.iconRight} size={24} color="black" style={styles.icon} />
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    itemTitle: {
        fontSize: 16,
        marginLeft: 8,
    },
    icon: {
        marginRight: 8,
    },
    iconTitle: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});


export default ItemList;

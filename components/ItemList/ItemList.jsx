import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome6, AntDesign } from '@expo/vector-icons';

const ItemList = ({ items }) => {

    const [selectedItemId, setSelectedItemId] = useState(null);

    const handleItemClick = (itemId) => {
        setSelectedItemId(itemId);
    };

    return (
        <View style={styles.container}>
            {items.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    style={[
                        styles.itemContainer,
                        selectedItemId === item.id && { backgroundColor: 'lightgray' },
                    ]}
                    onPress={() => handleItemClick(item.id)}
                >
                    <View style={styles.iconTitle}>
                        <AntDesign name={item.iconLeft} size={18} color="black" style={styles.icon} />
                        <Text style={styles.itemTitle}>{item.title}</Text>
                    </View>
                    <FontAwesome6 name={item.iconRight} size={18} color="black" style={styles.icon} />
                </TouchableOpacity>
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
        paddingVertical: 18,
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

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { FontAwesome6, AntDesign } from '@expo/vector-icons';
import { Audio } from 'expo-av';

const ItemList = ({ items }) => {

    const [selectedItemId, setSelectedItemId] = useState(null);

    const handleItemClick = (itemId) => {
        setSelectedItemId(itemId);
    };

    const [sound, setSound] = useState();

    async function playSound(item) {
        console.log('Loading Sound');
        console.log(item.group);
        console.log(item.audio);
        const audioPaths = {
            'ausculta_pulmonar_Crepitaçoes Finais': require('../../assets/audios/ausculta_pulmonar/Crepitaçoes Finais.mp3'),
            'ausculta_pulmonar_Crepitaçoes Grosseiras': require('../../assets/audios/ausculta_pulmonar/Crepitaçoes Grosseiras.mp3'),
            'ausculta_pulmonar_Esfregar Pleural': require('../../assets/audios/ausculta_pulmonar/Esfregar Pleural.mp3'),
            'ausculta_pulmonar_Respiração Broncovascular': require('../../assets/audios/ausculta_pulmonar/Respiração Broncovascular.mp3'),
            'ausculta_pulmonar_Respiração Bronquica': require('../../assets/audios/ausculta_pulmonar/Respiração Bronquica.mp3'),
            'ausculta_pulmonar_Respiração Vesicular': require('../../assets/audios/ausculta_pulmonar/Respiração Vesicular.mp3'),
            'ausculta_pulmonar_Sibilos': require('../../assets/audios/ausculta_pulmonar/Sibilos.mp3'),
            'ausculta_pulmonar_Sons de Respiração Reduzida': require('../../assets/audios/ausculta_pulmonar/Sons de Respiração Reduzida.mp3'),
        };

        const audioPath = audioPaths[`${item.group}_${item.audio}`];

        const { sound } = await Audio.Sound.createAsync(audioPath);

        console.log('Setting Sound');
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    useEffect(() => {
        return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync();
            }
        : undefined;
    }, [sound]);

    return (
        <View style={styles.container}>
            {items.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    style={[
                        styles.itemContainer,
                        selectedItemId === item.id && { backgroundColor: 'lightgray' },
                    ]}
                    
                >
                    <View style={styles.iconTitle}>
                        <AntDesign name={item.iconLeft} size={18} color="black" style={styles.icon} />
                        <Text style={styles.itemTitle}>{item.title}</Text>
                    </View>
                    <AntDesign name={item.iconRight} size={18} color="black" onPress={() => playSound(item)}/>
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

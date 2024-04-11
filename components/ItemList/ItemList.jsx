import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity, Button, TouchableHighlight } from 'react-native';
import { FontAwesome6, AntDesign } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { setSelectItem } from '../../redux/reducers/itemList/itemListSlice'

const ItemList = ({ items }) => {
    const selectedItem = useSelector(setSelectItem);
    const dispatch = useDispatch();

    const handleItemClick = (item) => {
        playSound(item)
        dispatch(setSelectItem(item))
    };

    const [sound, setSound] = useState();

    async function playSound(item) {
        const commonPath = '../../assets/audios/';
        const audioPaths = {
            'ausculta_pulmonar_Crepitaçoes Finais': require(commonPath + 'ausculta_pulmonar/Crepitaçoes Finais.mp3'),
            'ausculta_pulmonar_Crepitaçoes Grosseiras': require(commonPath + 'ausculta_pulmonar/Crepitaçoes Grosseiras.mp3'),
            'ausculta_pulmonar_Esfregar Pleural': require(commonPath + 'ausculta_pulmonar/Esfregar Pleural.mp3'),
            'ausculta_pulmonar_Respiração Broncovascular': require(commonPath + 'ausculta_pulmonar/Respiração Broncovascular.mp3'),
            'ausculta_pulmonar_Respiração Bronquica': require(commonPath + 'ausculta_pulmonar/Respiração Bronquica.mp3'),
            'ausculta_pulmonar_Respiração Vesicular': require(commonPath + 'ausculta_pulmonar/Respiração Vesicular.mp3'),
            'ausculta_pulmonar_Sibilos': require(commonPath + 'ausculta_pulmonar/Sibilos.mp3'),
            'ausculta_pulmonar_Sons de Respiração Reduzida': require(commonPath + 'ausculta_pulmonar/Sons de Respiração Reduzida.mp3'),
        };

        const audioPath = audioPaths[`${item.group}_${item.audio}`];

        const { sound } = await Audio.Sound.createAsync(audioPath);

        setSound(sound);

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
                        selectedItem === item.id && { backgroundColor: 'lightgray' },
                    ]}
                    onPress={() => handleItemClick(item)}
                >
                    <View style={styles.iconTitle}>
                        <AntDesign name={item.iconLeft} size={18} color="black" style={styles.icon} />
                        <Text style={styles.itemTitle}>{item.title}</Text>
                    </View>
                    <TouchableHighlight style={styles.playIcon}>
                        <View>
                            <FontAwesome6 name="play" size={18} color="black" />
                        </View>
                    </TouchableHighlight>
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
    },
});


export default ItemList;

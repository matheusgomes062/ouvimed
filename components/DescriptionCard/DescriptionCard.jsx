import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux'

const DescriptionCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [descriptionText, setDescriptionText] = useState('');
    const selectedItem = useSelector(state => state.itemList.selectedItem);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };


    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/icon.png')}
                style={styles.image}
            />
            {isOpen ? (
                <>
                    {
                        selectedItem.title && selectedItem.description ? (
                            <>
                                <Text style={styles.descriptionTitle}>{selectedItem.title}</Text>
                                <Text style={styles.descriptionText}>{selectedItem.description}</Text>
                            </>
                        ) : (
                            <Text style={styles.descriptionText}>Selecione um áudio para mostrar aqui</Text>
                        )
                    }
                    <TouchableOpacity style={[styles.button]} onPress={handleClose}>
                        <Text style={styles.buttonText}>Ver menos</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <View style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={styles.cardTitle}>{selectedItem.title}</Text>
                    <TouchableOpacity style={[styles.button]} onPress={handleOpen}>
                        <Text style={styles.buttonText}>Ver mais</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = {
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start', // Updated alignment to 'flex-start'
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 100,
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        alignSelf: 'flex-end'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardTitle: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    descriptionTitle: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    descriptionText: {
        fontSize: 16,
        marginBottom: 20,
    }
};

export default DescriptionCard;

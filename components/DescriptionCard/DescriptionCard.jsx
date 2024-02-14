import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

const DescriptionCard = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/icon.png')}
                style={styles.image}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ver mais</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    container: {
        flexDirection: 'column',
        alignItems: 'flex-end',
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
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
};

export default DescriptionCard;

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//Butonun reusable olması için butona tıklandığında çalıştıracağı 
//fonksiyonu parent component içinde prop olarak veriyoruz(onButtonPress):
const Button = ({ onButtonPress, children }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        //Ve TouchableOpacity'nin onPress fonksiyonuna prop'tan gelen 
        //fonksiyonu çalıştırmasını söylüyoruz:
        <TouchableOpacity onPress={onButtonPress} style={buttonStyle}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

export { Button };

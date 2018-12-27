import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        //props.children bir component'in açılış ve kapanış tagleri arasında her ne varsa 
        //göster demektir. AlbumDetail dosyasında bu component'i çağırırken açılış ve kapanış 
        //tagleri arasında 'Text' göndermiştik :<Card><Text>{props.album.title}</Text></Card>
        //Dolayısıyla burada da view içinde gönderilen text gözükecektir:
        
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginleft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export { Card };

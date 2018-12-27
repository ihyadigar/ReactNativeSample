import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp(
            {
                apiKey: 'AIzaSyAgcNRiDOc_wMlKwnTh2DIn9Nos-FFG9kk',
                authDomain: 'reactnativeauth-a22d7.firebaseapp.com',
                databaseURL: 'https://reactnativeauth-a22d7.firebaseio.com',
                projectId: 'reactnativeauth-a22d7',
                storageBucket: 'reactnativeauth-a22d7.appspot.com',
                messagingSenderId: '452129769560'
              }
        );
    }
    render() {
        return (
            <View>
                <Header headerText="Giriş" />
                <Text>Main App</Text>
            </View>
        );
    }
}

export default App;

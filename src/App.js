import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Header, Button, CardSection } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = { loggedIn: false };

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

        //Eğer giriş yapılmışsa bir "user" nesnesi oluşacak, giriş yapılmamışsa user nesnesi oluşmayacak:
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {

        if (this.state.loggedIn) {
            return (
                <CardSection>
                    <Button>
                        Çıkış Yap
                </Button>
                </CardSection>
            );
        }

        return <LoginForm />;
    }

    render() {
        return (
            <View>
                <Header headerText="Giriş" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;

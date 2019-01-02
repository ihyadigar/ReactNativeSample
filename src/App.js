import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = { loggedIn: null };

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
        //3 durumlu state için çözüm(true,false,null):
        switch (this.state.loggedIn) {
            case true:
                return <Button>Çıkış Yap</Button>;
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }

        //2 durumlu state için çözüm(true,false):
        // if (this.state.loggedIn) {
        //     return (
        //         <CardSection>
        //             <Button>
        //                 Çıkış Yap
        //         </Button>
        //         </CardSection>
        //     );
        // }

        // return <LoginForm />;
    }

    render() {
        return (
            <View>
                <Header headerText="Giriş" />
                <CardSection>
                    {this.renderContent()}
                </CardSection>
            </View>
        );
    }
}

export default App;

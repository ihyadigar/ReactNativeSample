import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import firebaseConfig from './utils/config';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp(firebaseConfig);

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
                return <CardSection><Button onButtonPress={() => firebase.auth().signOut()}>Çıkış Yap</Button></CardSection>;
            case false:
                return <LoginForm />;
            default:
                return <CardSection><Spinner size="large" /></CardSection>;
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

                {this.renderContent()}

            </View>
        );
    }
}

export default App;

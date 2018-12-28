import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    //React native'de TextInput yaygın bilinen yöntemden farklı çalışır(Form submit edildiğinde değeri okuma vb.)
    //TextInput değeri state içinde tutulmalı ve her karakter girişinde setState ile güncellenmelidir.

    state = { email: '', password: '', error: '' };

    onButtonPress() {
        const { email, password } = this.state;
        
        //Kullanıcının girdiği mail ve şifre ile firebase'in signIn metodu kullanılarak giriş yapılır
        //Eğer giriş başarısız olursa catch() metoduna düşülür ve bu adımda yeni hesap oluşturmaya yönlendirir.
        //Eğer hesap oluşturma da başarısız olursa ekranda gösterilecek error state'i
        //komponentin rerender olması için güncellenir.
        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(() => {
                this.setState({ error: 'Giriş Başarısız Oldu.' });
            });
        });

        //Yeni giriş için hata mesajını temizle
        this.setState({ error: '' });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="E-Posta:"
                        placeholder="e-posta adresinizi giriniz"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Şifre:"
                        placeholder="şifrenizi giriniz"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    <Button onButtonPress={this.onButtonPress.bind(this)}>
                        Giriş
              </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;

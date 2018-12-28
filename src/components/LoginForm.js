import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    //React native'de TextInput yaygın bilinen yöntemden farklı çalışır(Form submit edildiğinde değeri okuma vb.)
    //TextInput değeri state içinde tutulmalı ve her karakter girişinde setState ile güncellenmelidir.

    state = { email: '', password: '', error: '', loading: false };

    //Butona basıldğında yapılacakları halleden helper metodu
    onButtonPress() {
        const { email, password } = this.state;

        //Yeni giriş için hata mesajını temizle ve spinner'ı göstermek için loading değerini true yap
        this.setState({ error: '', loading: true });

        //Kullanıcının girdiği mail ve şifre ile firebase'in signIn metodu kullanılarak giriş yapılır
        //Eğer giriş başarısız olursa catch() metoduna düşülür ve bu adımda yeni hesap oluşturmaya yönlendirir.
        //Eğer hesap oluşturma da başarısız olursa ekranda gösterilecek error state'i
        //komponentin rerender olması için güncellenir.

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(() => {
                        this.setState({ error: 'Giriş Başarısız Oldu.' });
                    });
            });
    }

    //Login işlemi başarıyla gerçekleştiğinde yapılacakları halleden helper metodu:
    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    //loading değerine göre butonu mu spinner'ı mı göstereceğimizi belirleyen helper metodu
    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        }
        return (
            <Button onButtonPress={this.onButtonPress.bind(this)}>
                Giriş
            </Button>
        );
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
                    {this.renderButton()}
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

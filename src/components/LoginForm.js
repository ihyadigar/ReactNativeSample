import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    //React native'de TextInput yaygın bilinen yöntemden farklı çalışır(Form submit edildiğinde değeri okuma vb.)
    //TextInput değeri state içinde tutulmalı ve her karakter girişinde setState ile güncellenmelidir.
    
    state = { email: '', password: '' };

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

          <CardSection>
              <Button>
                  Giriş
              </Button>
          </CardSection>
      </Card>
    );
  }
}

export default LoginForm;

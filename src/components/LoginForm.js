import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    //React native'de TextInput yaygın bilinen yöntemden farklı çalışır(Form submit edildiğinde değeri okuma vb.)
    //TextInput değeri state içinde tutulmalı ve her karakter girişinde setState ile güncellenmelidir.
    
    state = { text: '' };

  render() {
    return (
      <Card>
          <CardSection>
              <Input 
                label="E-Posta:"
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
              />
          </CardSection>
          <CardSection />

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

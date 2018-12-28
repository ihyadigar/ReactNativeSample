import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
    //size activityIndicator'un büyüklüğünü belirler, aşağıda eğer bir size değeri 
    //prop olarak gelirse onu kullan yoksa 'large' yap diyoruz:
    
    return (
      <View style={styles.spinnerStyle}>
          <ActivityIndicator size={size || 'large'} />
      </View>
    );
};

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
};

export { Spinner };


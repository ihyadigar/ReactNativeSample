import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';


//react-redux kütüphanesi react ile redux arasındaki iletişimi sağlayan kütüphanedir.


const ReduxApp = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View />
        </Provider>
    );
}

export default ReduxApp;

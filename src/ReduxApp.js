import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';


//react-redux kütüphanesi react ile redux arasındaki iletişimi sağlayan kütüphanedir.

//Provider içerisinde store'u barındıran yapıdır ve Provider'ın 1 children'ı olmalıdır.

const ReduxApp = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View style={{ flex: 1 }}>
                <Header headerText="Kullanılan Kütüphaneler" />
                <LibraryList />
            </View>
        </Provider>
    );
};

export default ReduxApp;

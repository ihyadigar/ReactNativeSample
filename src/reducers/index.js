//Uygulamalarımız içinde farklı state alanlarını değiştiren birden fazla reducer olacak.
//Bu reducer'ların birbiriyle uyumlu çalışabilmesi için combineReducers isimli paket kullanılır.

import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

//Uygulamamız için 2 adet durum gerekli: 
//birisi kütüphane listesi(LibraryReducer)
//diğeri de seçili kütüphane(SelectionReducer)
export default combineReducers({
    //Burada key olarak libraries ve selectedLibraryId veriliyor
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});

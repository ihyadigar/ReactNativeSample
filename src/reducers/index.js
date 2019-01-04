//Uygulamalarımız içinde farklı state alanlarını değiştiren birden fazla reducer olacak.
//Bu reducer'ların birbiriyle uyumlu çalışabilmesi için combineReducers isimli paket kullanılır.

import { combineReducers } from 'redux';

export default combineReducers({
    libraries: () => []
});

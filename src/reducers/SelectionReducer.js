//İlk çalıştığında seçili bir değer olmayacağı için state'e default null veriyoruz
//'select_library' action'u gelmesi durumunda payload'ı yani selectedItem'ın ID'sini dönüyoruz
//Bilinmeyen bir action olması durumuna karşı default kısmında en son state'i dönüyoruz
export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
           return action.payload; 
        default:
            return state;
    } 
};

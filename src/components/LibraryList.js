import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import LibraryListItem from './LibraryListItem';

//'react-redux' içindeki "connect" fonksiyonu component'in provider içerisindeki store'a erişmesine
//ve dolayısıyla en tepedeki state'e erişmesine yardımcı olan fonksiyondur.
class LibraryList extends Component {
    renderItem(library) {
        return <LibraryListItem library={library} />;
    }

    render() {
        //FlatList'e 3 adet alan giriyoruz:
        //data kısmına prop olarak gelen veri
        //renderItem kısmına yukarıda yazdığımız renderItem helper metodu
        //keyExtractor kısmına da unique olması açısından her bir library iteminin id'si
        return (
            <FlatList
                data={this.props.libraries}
                renderItem={this.renderItem}
                keyExtractor={(library) => library.id.toString()}
            />
        );
    }
}

const mapStateToProps = state => {
    //libraries key, state.libraries value
    return { libraries: state.libraries };
};

//connect store'a erişim sağlar, mapStateToProps state'i alır yapacağı işlemi uygular ve
//LibraryList'e dönüş değerini 'props' olarak verir.
export default connect(mapStateToProps)(LibraryList);

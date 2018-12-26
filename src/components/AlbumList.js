import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    state = { albums: [] };

    componentWillMount() {
        //Aşağıdaki keyword eklenirse browser üzerinden bu noktada durdurulur ve
        //debug içeriği görüntülenebilir:
        //debugger;

        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        //  return this.state.albums.map(album => 
        //  <Text key={album.title}>{album.title}</Text>
        //  );
        //Burada "key" ibaresi kullanılmazsa uygulama bir warning oluşturur. Bir listedeki elamanlar
        //farklı key'lere sahip olmalıdır(performans açısından).Burada 'title' kısımları birbirinden
        //farklı olduğu için key olarak 'title' kullanıldı.

         return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
            );
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;

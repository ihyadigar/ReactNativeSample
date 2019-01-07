import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class LibraryListItem extends Component {
    render() {
        const { titleStyle } = styles;
        console.log(this.props)
        return (
            <CardSection>
                <Text style={titleStyle}>
                    {this.props.library.item.title}
                </Text>
            </CardSection>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

//connect fonksiyonunun ilk argümanı bir map fonksiyonu vermek, ikinci argümanı ise
//action creator'u bu komponent'e bağlamak için kullanılır:
//Burada bir map state'i olmadığı için ilk argümana null veriyoruz:
export default connect(null, actions)(LibraryListItem);

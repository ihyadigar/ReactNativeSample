import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class LibraryListItem extends Component {

    renderDescription() {    
        //console.log(this.props);    
        if (this.props.library.item.id === this.props.selectedLibraryId) {
            return (
                <CardSection>
                <Text>{this.props.library.item.description}</Text>
                </CardSection>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library.item;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = state => {
    //console.log(state)
    return { selectedLibraryId: state.selectedLibraryId };
};

//connect fonksiyonunun ilk argümanı bir map state fonksiyonu vermek, ikinci argümanı ise
//action creator'u bu komponent'e bağlamak için kullanılır:

//Burada bir map state'i olmadığı için ilk argümana null veriyoruz:
//export default connect(null, actions)(LibraryListItem);

//map state fonksiyonunu ekledikten sonra ilk argüman olarak onu veriyoruz:
export default connect(mapStateToProps, actions)(LibraryListItem);

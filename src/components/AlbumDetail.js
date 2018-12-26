import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// const AlbumDetail = (props) => {
//     return (
//         // <View>
//         //     <Text>{props.album.title}</Text>
//         // </View>

//         //Burada bir view altında image, text, button vs kullanılarak da göstermek istediğimiz şablon oluşturulabilirdi.
//         //Ancak styling kısmını kolaylaştırmak adına 'Card' isimli alt bölümler oluşturuldu:
//         // <Card>
//         //     <Text>{props.album.title}</Text>
//         // </Card>

//         //Benzer şekilde Card companentini de alt kısımlara bölerek CardSection oluşturuyoruz:
//         // <Card>
//         //     <CardSection>
//         //         <Text>{props.album.title}</Text>
//         //     </CardSection>
//         // </Card>

//         <Card>
//             <CardSection>
//                 <View>
//                     <Image source={{ uri: props.album.thumbnail_image }} />
//                 </View>
//                 <View style={styles.headerContentStyle}>
//                     <Text>{props.album.title}</Text>
//                     <Text>{props.album.artist}</Text>
//                 </View>
//             </CardSection>
//         </Card>
//     );
// };

//props olarak sadece 'album' kullanıldığı için referansları kısaltmak adına destructure edilebilir:
const AlbumDetail = ({ album }) => {
    //Ayrıca album altındaki değerler de destructure edilebilir:

    const { title, artist, thumbnail_image, image, url } = album;

    //Benzer şekilde style nesnesi de destructure edilebilir:
    const { thumbnailStyle, 
        headerContentStyle, 
        thumnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumnailContainerStyle}>
                    <Image 
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }} 
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            
            <CardSection>
                <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>
            
            <CardSection>
                <Button onButtonPress={() => Linking.openURL(url)}/>
            </CardSection>
        </Card>
    );
    //Yukarda butonu reusable yapmak için yapacağı işlemi prop olarak verdik
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    //React default olarak resimleri boyutlandırmaz ve bu nedenle gözükmez,
    //dolayısıyla elle değer vermemiz lazım:
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    //Resmin yatay olarak alanı tamamen kaplaması için 'flex' ve 'width' 
    //değerleri aşağıdaki gibi verilir:
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;

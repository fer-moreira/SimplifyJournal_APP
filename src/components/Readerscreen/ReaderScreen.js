import * as React from 'react';
import * as Font from 'expo-font';

import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    Image,
    ScrollView,
    Linking,
    ActivityIndicator,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import { main, header, article, info, misc } from './styles';

export default class HomePage extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = {
            fontLoaded: false,
            params: this.props.navigation.state.params,
            // dump_json: require('../../assets/helper/sample.json'),
            dump_json: this.props.navigation.state.params.article_data,
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            'default_girassol': require('../../assets/fonts/girassol_regular.ttf'),
        }).then(() => {
            this.setState({
                fontLoaded: true,
            });
        });
        StatusBar.setHidden(true);
    };

    keywords_text() {
        const _json = this.state.dump_json;
        const _keywords = _json.keywords;
        const tx_keywords = _keywords.join(' | ')
        return tx_keywords
    }


    article_text() {
        const _json = this.state.dump_json
        const _article = _json.article_body
        const article_body = [];

        for (let i = 0; i < _article.length; i++) {
            let element = _article[i]

            if(element.is_img){
                const img_height = (element.resolution.height/2)
                let img_element = <Image key={i} style={[article.image, {height:img_height}]} resizeMode="contain" source={{ uri: element.content }} />
                article_body.push(img_element)
            } else {
                let text_element = <Text key={i} style={[fonts.default, article.paragraph]}>{element.content}</Text>
                article_body.push(text_element)
            }
        }

        return article_body
    }


    render() {
        const dumpJson = this.state.dump_json
        const { navigate } = this.props.navigation;

        if (this.state.fontLoaded) {
            return (
                <ScrollView style={main.body}>
                    <View style={main.article}>
                        {dumpJson.article_image != "" &&
                        <View style={header.image}>
                            <ImageBackground style={header.image} source={{ uri: dumpJson.article_image }}>
                                <TouchableOpacity onPress={ () => navigate('Home') } style={[header.button]}>
                                    <Text style={[header.button_text]}>{" < "}</Text>
                                </TouchableOpacity>
                                <View style={main.header}>
                                    <Text style={[header.title, fonts.default]}>{dumpJson.article_title}</Text>                                
                                    <View style={header.logo_container}>
                                        <Image style={header.logo} source={{ uri: dumpJson.site_favicon }} />
                                        <Text style={[header.name, fonts.default]}>By {dumpJson.site_name}</Text>
                                    </View>
                                </View>           
                            </ImageBackground>
                        </View>}

                        { this.keywords_text() != "" && <Text style={[article.keywords, fonts.default]}>{this.keywords_text()}</Text> }

                        <View style={article.main}>
                            {this.article_text()}
                            <Text style={[fonts.default, article.original_link]}
                                onPress={() => Linking.openURL(this.state.dump_json.original_post)}>
                                If you liked it, we recommend that you read from the original source: {dumpJson.original_post} </Text>
                        </View>
                    </View>
                </ScrollView>
            );
        } else {
            return (
                <View style={misc.loading}>
                    <ActivityIndicator size="large" color="black" />
                </View>
            );
        }
    }
}

const fonts = StyleSheet.create({
    default: { fontFamily: 'default_girassol' },
});

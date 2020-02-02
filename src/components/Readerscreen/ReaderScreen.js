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
    Button
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
            dump_json: require('../../assets/helper/sample.json'),
            // dump_json: this.props.navigation.state.params.article_data,
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            'bookerly': require('../../assets/fonts/bookerly_regular.ttf'),
            'girassol': require('../../assets/fonts/girassol_regular.ttf'),
            'caecilia': require('../../assets/fonts/caecilia_regular.otf'),
            'antic': require('../../assets/fonts/antic_regular.ttf')
        }).then(() => {
            this.setState({
                fontLoaded: true,
            });
        });
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
                let text_element = <Text key={i} style={[fonts.bookerly, article.paragraph]}>{element.content}</Text>
                article_body.push(text_element)
            }

        }

        return article_body
    }

    render() {
        const dumpJson = this.state.dump_json

        if (this.state.fontLoaded) {
            return (
                <ScrollView style={main.body}>
                    <View style={main.article}>
                        <View style={main.starter}>
                            <View style={main.header}>
                                { dumpJson.site_name != "" &&
                                <Text style={[header.name, fonts.girassol]}>By {dumpJson.site_name}</Text> }
                                <Text style={[header.title, fonts.bookerly]}>{dumpJson.article_title}</Text>
                                <Text style={[header.pre_title, fonts.bookerly]}>{dumpJson.article_description}</Text>
                            </View>
                        </View>
                        <View style={main.header}>
                            <Text style={[header.title, fonts.bookerly]}> {dumpJson.article_title}</Text>
                            <Text style={[header.pre_title, fonts.bookerly]} >{dumpJson.article_description}</Text>
                        </View>

                        {dumpJson.article_image != "" &&
                        <View style={main.image}>
                            <ImageBackground style={main.bg_image} source={{ uri: dumpJson.article_image }} />
                        </View>}

                        { this.keywords_text() != "" && <Text style={[main.keywords, fonts.girassol]}>{this.keywords_text()}</Text> }

                        <View style={article.main}>
                            {this.article_text()}
                            <Text 
                                style={[fonts.bookerly, misc.strong, { textDecorationLine: 'underline', fontSize: 20, marginVertical: 20 }]}
                                onPress={() => Linking.openURL(this.state.dump_json.original_post)}>
                                If you liked it, we recommend that you read from the original source: {dumpJson.original_post}
                                </Text>
                        </View>
                    </View>
                </ScrollView>
            );
        } else {
            return (
                <View style={{ height: '100%', width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="black" />
                </View>
            );
        }
    }
}

const fonts = StyleSheet.create({
    bookerly: { fontFamily: 'bookerly', color: 'black' },
    girassol: { fontFamily: 'girassol', color: 'black' },
    caecilia: { fontFamily: 'caecilia', color: 'black' },
    anticdidone: { fontFamily: 'antic', color: 'black' },
});

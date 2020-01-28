import * as React from 'react';
import * as Font from 'expo-font';
// import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

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

import { createAppContainer, NavigationEvents } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


export default class HomePage extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = {
            fontLoaded: false,
            params: this.props.navigation.state.params,
            dump_json: require('../lib/sample.json'),
            // dump_json: this.props.navigation.state.params.article_data,
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            'bookerly': require('../assets/fonts/bookerly_regular.ttf'),
            'girassol': require('../assets/fonts/girassol_regular.ttf'),
            'caecilia': require('../assets/fonts/caecilia_regular.otf'),
            'antic': require('../assets/fonts/antic_regular.ttf')
        }).then(() => {
            this.setState({
                fontLoaded: true,
            });
        });
    };

    keywords_text() {
        const _json = this.state.dump_json;
        // const _keywords = _json.keywords.slice(0,6);
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
            let text_element = <Text key={i} style={[fonts.bookerly, article.paragraph]}>{ i == 0 && <Text style={article.capital_letter}>{_json.article_capitalize}</Text> }{element.content}</Text>
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

                            <View><Button title=" + " color='black' onPress={() => this.props.navigation.goBack(null)} /></View>
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

const main = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
    },
    article: {
        width: '100%',
        height: '100%',
    },
    starter: {
        height: vh(100),
        width: '100%',
    },
    header: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 50
    },
    first_image: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'stretch',
    }
});

const header = StyleSheet.create({
    name: {
        fontSize: 30,
        letterSpacing: 1,
        lineHeight: 25,
        marginBottom: 15,
    },
    title: {
        fontSize: 30,
        letterSpacing: 1,
        lineHeight: 30,
        marginBottom: 15,

    },
    pre_title: {
        fontSize: 20,
        letterSpacing: 1,
        lineHeight: 25,

    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
});

const article = StyleSheet.create({
    main: {
        marginTop: 5
    },
    paragraph: {
        fontSize: 19,
        marginVertical: 10,
        letterSpacing: 1,
        lineHeight: 25
    },
    capital_letter: {
        fontSize: 40,
        marginTop: 5,
        padding: 1
    }
});

const info = StyleSheet.create({
    logo: {
        height: 32,
        width: 32,
        borderRadius: 5
    },
    name: {
        fontSize: 15,
        fontWeight: '600',
        borderBottomWidth: 1,
    }
});

const misc = StyleSheet.create({
    generic_text: {
        fontSize: 40
    },
    strong: {
        color: 'black'
    }
});
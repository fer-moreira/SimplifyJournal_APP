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
    ActivityIndicator
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
            dump_json: this.props.navigation.state.params.article_data,
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Bookerly_Regular': require('../assets/fonts/Bookerly-Regular.ttf'),
            'Girassol_Regular': require('../assets/fonts/Girassol-Regular.ttf'),
            'Caecilia_Regular': require('../assets/fonts/Caecilia-Regular.otf'),
            'AnticDidone_Regular': require('../assets/fonts/AnticDidone-Regular.ttf')
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
        const _article = _json.body
        const article_body = [];

        for (let i = 0; i < _article.length; i++) {
            let element = _article[i]

            let text_el = <Text key={i}
                onPress={element.a && element.a_link != "" ? (() => Linking.openURL(element.a_link)) : (null)}
                style={[article.paragraph, fonts.girassol,
                element.a ? (article.link) : (null),
                element.strong ? (misc.strong) : (null)]}>{element.text}{"\n\n"}</Text>
            article_body.push(text_el)
        }

        return article_body
    }

    render() {
        const dumpJson = this.state.dump_json

        if (this.state.fontLoaded) {
            return (
                <ScrollView style={main.body}>
                    <View style={main.article}>
                        <View style={main.info} >
                            <Image onPress={() => Linking.openURL(this.state.dump_json.origin)} style={info.logo} source={{ uri: dumpJson.site_image }} />
                            {dumpJson.site_origin === "" ? (
                                <Text style={[info.name, fonts.girassol]}></Text>
                            ) : (
                                    <Text style={[info.name, fonts.girassol]}>By {dumpJson.site_origin}</Text>
                                )}
                        </View>
                        <View style={main.header}>
                            <Text style={[header.title, fonts.girassol]} >{dumpJson.title}</Text>
                            <Text style={[header.pre_title, fonts.girassol]} >{dumpJson.pre_title}</Text>
                        </View>
                        <View style={main.image}>
                            <ImageBackground style={main.bg_image} source={{ uri: dumpJson.post_image }} />
                            <Text style={[main.keywords, fonts.girassol]}>{this.keywords_text()}</Text>
                        </View>
                        <View style={article.main}>
                            <Text>{this.article_text()}</Text>
                            <Text style={[fonts.caecilia, misc.strong, article.link, { fontSize: 17, marginBottom: 20 }]} onPress={() => Linking.openURL(this.state.dump_json.origin)}>If you liked it, we recommend that you read from the original source: {this.state.dump_json.origin}</Text>
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
    bookerly: { fontFamily: 'Bookerly_Regular' },
    girassol: { fontFamily: 'Girassol_Regular' },
    caecilia: { fontFamily: 'Caecilia_Regular' },
    anticdidone: { fontFamily: 'AnticDidone_Regular' },
});

const main = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
    },
    article: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 20
    },
    info: {
        alignItems: 'center',
        padding: 20,
        marginTop: 20
    },
    header: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 15
    },
    image: {
        backgroundColor: 'white',
        height: 250,
        marginBottom: 30
    },
    bg_image: {
        width: '100%',
        height: '100%'
    },
    keywords: {
        fontSize: 12,
        color: '#686868',
        padding: 3
    }
});

const header = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10
    },
    pre_title: {
        fontSize: 17,
    }
});

const article = StyleSheet.create({
    main: {
        marginTop: 20
    },
    paragraph: {
        fontSize: 18
    },
    link: {
        textDecorationLine: 'underline'
    }
});

const info = StyleSheet.create({
    logo: {
        height: 32,
        width: 32,
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
        fontWeight: 'bold'
    }
});
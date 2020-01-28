import * as React from 'react';


import {
    Text,
    View,
    StyleSheet,
    TextInput,
    ImageBackground,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    Button
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import * as Font from 'expo-font';

export default class LoginPage extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)

        this.getArticleData = this.getArticleData.bind(this);

        this.state = {
            fontLoaded: false,
            loadingData: false,
            error: false,
            url_value: ""
        };

    }

    async componentDidMount() {
        await Font.loadAsync({
            'bookerly': require('../assets/fonts/bookerly_regular.ttf'),
            'girassol': require('../assets/fonts/girassol_regular.ttf'),
            'caecilia': require('../assets/fonts/caecilia_regular.otf'),
            'antic': require('../assets/fonts/antic_regular.ttf')
        }).then(() => {
            this.setState({ fontLoaded: true });
        });
    };

    getArticleData() {
        this.setState({
            loadingData: true
        });

        if (this.state.url_value != "") {
            return fetch('http://simpify-api.herokuapp.com/get_article', {
                method: 'GET',
                headers: {
                    'article-url': this.state.url_value,
                }
            })
                .then((response) => response.json())
                .then((json) => {
                    this.setState({
                        article_data: json,
                        loadingData: false,
                    });

                    this.CallReaderScreen();
                })
                .catch((error) => {
                    this.setState({
                        error: true,
                        errorData: error.message
                    });
                });
        } else {
            this.setState({
                loadingData: false,
            });
        }
    }

    CallReaderScreen() {
        this.props.navigation.navigate('Article', {
            article_data: this.state.article_data
        });
    }

    render() {
        if (!this.state.fontLoaded) {
            return (
                <View style={loading.div}>
                    <ActivityIndicator size="large" color="black" />
                    <Text style={loading.text}>Loading...</Text>
                    <Text style={loading.tiny_text}>This was supposed to be fast :(</Text>
                </View>
            );
        }
        else if (this.state.loadingData && this.state.fontLoaded) {
            return (
                <View style={loading.div}>
                    <Image style={[loading.writing_icon]} source={require('../assets/static/images/writing.gif')} />
                    <Text style={[loading.writing, fonts.girassol]}>writing your article...</Text>
                </View>
            );
        }
        else if (this.state.error) {
            return (
                <ImageBackground source={require('../assets/static/images/Journal_Pattern.png')} style={{
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1
                }}>
                    <View style={{
                        width: '80'
                    }}>
                        <Text style={{
                            fontSize: 25,
                            textAlign: 'center',
                            fontWeight: 'bold',
                            marginBottom: 30,
                        }}>Something went wrong {"\n"} :(</Text>
                        <Button title="OK  :(" onPress={() => this.setState({
                            error: false
                        })} color="black" />
                    </View>
                </ImageBackground>
            );
        }
        else {
            return (
                <ImageBackground source={require('../assets/static/images/Journal_Pattern.png')} style={{ height: '100%' }}>
                    <View style={main.main}>
                        <View style={main.div}>
                            <View>
                                <Text style={[logo.firstLine, fonts.caecilia]}> Simplify {"\n"}
                                    <Text style={[logo.secondLine, fonts.girassol]}><Text style={logo.first_letter}>J</Text>ournal</Text>
                                </Text>
                            </View>

                            <View style={inputs.div}>
                                <TextInput
                                    style={[inputs.text_input, fonts.girassol]}
                                    placeholder="Enter an Article to Simplify:"
                                    onChangeText={(text) => this.setState({ url_value: text })}
                                    value={this.state.url_value}
                                />

                                
                                <TouchableOpacity onPress={this.getArticleData} style={inputs.btn}>
                                    <Text style={inputs.btn_txt}>Simplify</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            );
        }
    }
}


const fonts = StyleSheet.create({
    bookerly: { fontFamily: 'bookerly' },
    girassol: { fontFamily: 'girassol' },
    caecilia: { fontFamily: 'caecilia' },
    anticdidone: { fontFamily: 'antic' },
});


const main = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
        width: '100%',
        zIndex: 100,
    },
    div: {
        width: '80%'

    }
});

const logo = StyleSheet.create({
    first_letter: { fontSize: 100 },
    firstLine: {
        fontSize: 45,
        color: 'black',
        textAlign: "right",
        textAlign: "center",
        lineHeight: 60

    },
    secondLine: {
        fontSize: 80,
        color: 'black',
        lineHeight: 70,
    },
});

const inputs = StyleSheet.create({
    div: {
        width: '100%'
    },

    text_input: {
        height: 40,
        fontWeight: "bold",
        borderColor: '#1f1e1e',
        borderWidth: 3,
        padding: 5,
        marginVertical: 10,
        backgroundColor: 'white',
    },
    btn: {
        padding: 10,
        backgroundColor: 'black'
    },
    btn_txt: {
        color: 'white',
        textAlign: 'center',
        fontSize: 22,
        fontFamily: 'girassol',
    },
});


const loading = StyleSheet.create({
    div: {
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        marginVertical: 12,
        fontSize: 30,
        textAlign: "center",
        color: 'black',
    },
    tiny_text: {
        fontSize: 15,
        textAlign: "center",
        color: 'black',
    },
    writing: {
        fontSize: 30,
        textAlign: "center",
        color: 'black',
    },
    writing_icon: {
        height:150,
        width:150 
    }
});

const error = StyleSheet.create({
    div: {
        height: '100%',
        width: '100%'
    },
    title: {
        marginVertical: 12,
        fontSize: 30,
        textAlign: "center",
        color: 'white',
    },
    text: {
        fontSize: 15,
        textAlign: "left",
        color: 'black',
        padding: 20,
        height: '80%'
    },

});

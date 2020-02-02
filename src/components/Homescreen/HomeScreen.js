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

import { main, logo, inputs, loading, error } from './styles';
import { writing_gif } from '../../styles/global_styles';

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
            'girassol': require('../../assets/fonts/girassol_regular.ttf'),
        }).then(() => {
            this.setState({ fontLoaded: true });
        });
    };

    getArticleData() {
        this.setState({
            loadingData: true
        });

        if (this.state.url_value != "") {
            return fetch('https://simplifyjournal-api.herokuapp.com/parser/json', {
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
                    <Image style={[loading.writing_icon]} source={writing_gif} />
                    <Text style={[loading.writing, fonts.default]}>writing your article...</Text>
                </View>
            );
        }
        else if (this.state.error) {
            return (
                <ImageBackground source={require('../../assets/static/images/Journal_Pattern.png')} style={{
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
                <ImageBackground source={require('../../assets/static/images/Journal_Pattern.png')} style={{ height: '100%' }}>
                    <View style={main.main}>
                        <View style={main.div}>
                            <View>
                                <Text style={[logo.firstLine, fonts.default]}> Simplify {"\n"}
                                    <Text style={[logo.secondLine, fonts.default]}><Text style={logo.first_letter}>J</Text>ournal</Text>
                                </Text>
                            </View>

                            <View style={inputs.div}>
                                <TextInput
                                    style={[inputs.text_input, fonts.default]}
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
    default: { fontFamily: 'girassol' },
});
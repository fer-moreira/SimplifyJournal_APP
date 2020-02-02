import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { text_color, background_color } from '../../styles/global_styles';

export const main = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: background_color
    },
    article: {
        width: '100%',
        height: '100%',
    },
    starter: {
        height: 100,
        width: '100%',
    },
    header: {
        width: '100%',
        padding: 10,
        justifyContent: 'flex-end'
    }
});

export const header = StyleSheet.create({
    title: {
        fontSize: 35,
        marginVertical: 5,
        color: text_color,
        textShadowColor: background_color,
        textShadowOffset:{width: 2, height: 2},
        textShadowRadius: 5,
    },
    pre_title: {
        fontSize: 20,
        letterSpacing: 1,
        lineHeight: 25,
        color: text_color
    },
    image: {
        flex: 1,
        width: '100%',
        height: 450,
        justifyContent: 'flex-end',
    },
    logo_container: {
        flexDirection: "row",
        top: 0
    },
    logo: {
        width: 40,
        height: 40
    },
    name: {
        fontSize: 20,
        color: text_color,
        padding: 5
    },
    button: {
        backgroundColor: background_color,
        position: 'absolute',
        top: -10,
        left: 0,
        borderBottomRightRadius: 20,
        padding: 5
    },
    button_text: {
        color: text_color,
        fontSize: 40
    }
});

export const article = StyleSheet.create({
    main: {
        paddingHorizontal: 15,
    },
    keywords: {
        fontSize: 10,
        paddingHorizontal: 10,
        marginBottom: 25,
        marginTop: 10,
        color: '#c3c3c3',
    },
    paragraph: {
        fontSize: 19,
        marginBottom: 12,
        color: text_color
    },
    original_link: {
        textDecorationLine: 'underline', 
        fontSize: 20, 
        color: text_color,
        marginVertical: 20
    }
});

export const info = StyleSheet.create({
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

export const misc = StyleSheet.create({
    generic_text: {
        fontSize: 40,
        color: text_color
    },
    strong: {
        color: text_color,
        fontWeight: "bold"
    },
    loading: { 
        height: '100%', 
        width: '100%', 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
});
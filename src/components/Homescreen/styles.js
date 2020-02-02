import { StyleSheet } from 'react-native';

import { text_color, background_color } from '../../styles/global_styles';

export const main = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
        width: '100%',
        zIndex: 100,
        backgroundColor: background_color
    },
    div: {
        width: '80%'
    }
});

export const logo = StyleSheet.create({
    first_letter: { fontSize: 100 },
    firstLine: {
        fontSize: 45,
        color: text_color,
        textAlign: "right",
        textAlign: "center",
        lineHeight: 60

    },
    secondLine: {
        fontSize: 80,
        color: text_color,
        lineHeight: 70,
    },
});

export const inputs = StyleSheet.create({
    div: {
        width: '100%'
    },

    text_input: {
        height: 40,
        fontWeight: "bold",
        borderColor: text_color,
        borderWidth: 3,
        padding: 5,
        marginVertical: 10,
        backgroundColor: 'white',
    },
    btn: {
        padding: 10,
        backgroundColor: text_color
    },
    btn_txt: {
        color: background_color,
        textAlign: 'center',
        fontSize: 22,
        fontFamily: 'girassol',
    },
});


export const loading = StyleSheet.create({
    div: {
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: background_color
    },
    text: {
        marginVertical: 12,
        fontSize: 30,
        textAlign: "center",
        color: text_color,
    },
    tiny_text: {
        fontSize: 15,
        textAlign: "center",
        color: text_color,
    },
    writing: {
        fontSize: 30,
        textAlign: "center",
        color: text_color,
    },
    writing_icon: {
        height:150,
        width: 100
    }
});

export const error = StyleSheet.create({
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
        color: text_color,
        padding: 20,
        height: '80%'
    },

});
import { StyleSheet } from 'react-native';

export const main = StyleSheet.create({
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

export const logo = StyleSheet.create({
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

export const inputs = StyleSheet.create({
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


export const loading = StyleSheet.create({
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
        color: 'black',
        padding: 20,
        height: '80%'
    },

});
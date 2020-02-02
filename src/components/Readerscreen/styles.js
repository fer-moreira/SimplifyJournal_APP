import { StyleSheet } from 'react-native';

export const main = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
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

export const header = StyleSheet.create({
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

export const article = StyleSheet.create({
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
        fontSize: 40
    },
    strong: {
        color: 'black'
    }
});

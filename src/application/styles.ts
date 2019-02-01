import { StyleSheet, Platform } from 'react-native';

export const colors = {
    pale: '#ffebcb',
    lightTeal: '#4fb3bf',
    teal: '#00838f',
    blueGreen: '#0d9790',
    blueGreenDark: '#136f63',
    // Rename to surface
    lightGrey: '#eee5d9',
    darkerGrey: '#d0d0c5',
    greyishBrown: '#595959',
    black: '#313131',
    sunYellow: '#f2b134',
    white: '#ffffff',
    darkGreyWithAlpha: 'rgba(0, 0, 0, 0.4)',
    turquoiseBlue: '#07a0c3',
    aquaMarine: '#03cea4',
    vermillion: '#f34213',
    melon: '#fc7a57',
    sepia: '#8b572a',
    purple: '#541388',
  };

export const values = {
    navigationIconSize: 28,
    largeIconSize: 30,
    mediumIconSize: 25,
    smallIconSize: 20,
    smallerIconSize: 18,
    roundedBorderRadius: 25,
    lessRoundedBorderRadius: 10,
    backgroundTextPadding: 5,
};

export const fontFamily = Platform.OS === 'ios' ? 'Avenir' : 'AvenirBook';

export const textStyles = StyleSheet.create({
    headline6: {
        fontFamily,
        fontSize: 16,
        fontWeight: '900',
        fontStyle: 'normal',
        lineHeight: 21,
        letterSpacing: 0,
        color: colors.teal,
    },
    headlineH1StyleBlackLeft: {
        fontFamily,
        fontSize: 24,
        fontWeight: '900',
        fontStyle: 'normal',
        lineHeight: 36,
        letterSpacing: 0,
        textAlign: 'left',
        color: colors.black,
    },
    headlineH2StyleWhiteLeft: {
        fontFamily,
        fontSize: 18,
        fontWeight: '900',
        fontStyle: 'normal',
        letterSpacing: 0,
        textAlign: 'left',
        color: colors.white,
    },
    headlineH2StyleBlackLeft: {
        fontFamily,
        fontSize: 18,
        fontWeight: '900',
        fontStyle: 'normal',
        letterSpacing: 0,
        textAlign: 'left',
        color: colors.black,
    },
    headlineH2StyleBlackCenter: {
        fontFamily,
        fontSize: 18,
        fontWeight: '900',
        fontStyle: 'normal',
        letterSpacing: 0,
        textAlign: 'center',
        color: colors.black,
    },
    headlineH3StyleBlackLeft: {
        fontFamily,
        fontSize: 16,
        fontWeight: '900',
        fontStyle: 'normal',
        letterSpacing: 0,
        textAlign: 'left',
        color: colors.black,
    },
    headlineH3StyleBlackCenter: {
        fontFamily,
        fontSize: 16,
        fontWeight: '900',
        fontStyle: 'normal',
        letterSpacing: 0,
        textAlign: 'center',
        color: colors.black,
    },
    headlineH3StyleWhiteCenter: {
        fontFamily,
        fontSize: 16,
        fontWeight: '900',
        fontStyle: 'normal',
        letterSpacing: 0,
        textAlign: 'center',
        color: colors.white,
    },
    headlineH4StyleBlackLeft: {
        fontFamily,
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 21,
        letterSpacing: 0,
        textAlign: 'left',
        color: colors.black,
    },
    paragraphBoldBlackLeft: {
        fontFamily,
        fontSize: 16,
        fontWeight: '900',
        fontStyle: 'normal',
        lineHeight: 21,
        letterSpacing: 0,
        textAlign: 'left',
        color: colors.black,
    },
    paragraphBoldWhiteLeft: {
        fontFamily,
        fontSize: 16,
        fontWeight: '900',
        fontStyle: 'normal',
        lineHeight: 21,
        letterSpacing: 0,
        textAlign: 'left',
        color: colors.white,
    },
    paragraphStyleWhiteleft: {
        fontFamily,
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 21,
        letterSpacing: 0,
        textAlign: 'left',
        color: colors.white,
    },
    paragraphStyle: {
        fontFamily,
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 21,
        letterSpacing: 0,
        textAlign: 'left',
        color: colors.black,
    },
    paragraphStyleBrown: {
        fontFamily,
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 21,
        letterSpacing: 0,
        textAlign: 'left',
        color: colors.greyishBrown,
    },
    paragraphSmallStyleLeft: {
        fontFamily,
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 21,
        letterSpacing: 0,
        textAlign: 'left',
        color: colors.greyishBrown,
    },
    paragraphURL: {
        fontFamily,
        fontSize: 15,
        fontWeight: '900',
        lineHeight: 21,
        letterSpacing: 0,
        textDecorationLine: 'underline',
        textAlign: 'left',
        color: colors.greyishBrown,
    },
    paragraphStyleWhiteCenter: {
        fontFamily,
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 21,
        letterSpacing: 0,
        textAlign: 'center',
        color: colors.white,
    },
    headlineH5StyleBlackLeft: {
        fontFamily,
        fontSize: 11,
        fontWeight: '900',
        fontStyle: 'normal',
        letterSpacing: 0,
        textAlign: 'left',
        color: colors.black,
    },
    headlineH5StyleBlackCenter: {
        fontFamily,
        fontSize: 11,
        fontWeight: '900',
        fontStyle: 'normal',
        letterSpacing: 0,
        textAlign: 'center',
        color: colors.black,
    },
    button: {
        fontFamily,
        fontSize: 18,
        fontWeight: '900',
        fontStyle: 'normal',
        letterSpacing: 0.2,
        textAlign: 'center',
        color: colors.white,
    },
    tealButton: {
        fontFamily,
        fontSize: 18,
        fontWeight: '900',
        fontStyle: 'normal',
        letterSpacing: 0.2,
        textAlign: 'center',
        color: colors.white,
    },
    whiteTealButton: {
        fontFamily,
        fontSize: 18,
        fontWeight: '900',
        fontStyle: 'normal',
        letterSpacing: 0.2,
        textAlign: 'center',
        color: colors.teal,
    },
    taskTitle: {
        fontFamily,
        fontSize: 22,
        fontWeight: '900',
        fontStyle: 'normal',
        letterSpacing: 0,
        textAlign: 'left',
        color: colors.black,
    },
});

export const applicationStyles = StyleSheet.create({
    hr: {
        borderTopWidth: 0.5,
        borderColor: colors.lightGrey,
        flexDirection: 'row',
        flex: 1,
        marginTop: 20,
        marginBottom: 10,
        marginLeft: -10,
        marginRight: -10,
    },
    tealButton: {
        backgroundColor: colors.teal,
        borderRadius: values.roundedBorderRadius,
    },
    whiteTealButton: {
        backgroundColor: colors.white,
        borderRadius: values.roundedBorderRadius,
        borderColor: colors.teal,
        borderWidth: 2,
    },
    boxShadowBelow: {
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 1,
    },
    boxShadowAbove: {
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 1,
    },
    body: {
        backgroundColor: colors.lightGrey,
    },
});

// See https://github.com/mientjan/react-native-markdown-renderer/blob/master/src/lib/styles.js for styles to override.
export const markdownStyles = StyleSheet.create({
    text: {
        textAlign: 'left',
    },
    listUnorderedItemIcon: {
        fontWeight: 'bold',
        fontSize: 35,
        marginLeft: 10,
        marginRight: 10,
        ...Platform.select({
            ios: {
                lineHeight: 36,
            },
            android: {
                lineHeight: 40,
            },
        }),
    },
});

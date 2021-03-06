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
    burntSienna: '#ED604B',
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

const fontStyle = 'normal';
const letterSpacing = 0;
const buttonLetterSpacing = 0.2;

const getNormalFontStylesForOS = (): object => (
    Platform.OS === 'android' ?
        {
            fontFamily: 'AvenirBook',
            fontWeight: 'normal',
            fontStyle,
        }
        :
        {
            fontFamily: 'Avenir',
            fontWeight: 'normal',
            fontStyle,
        }
);

const getBoldFontStylesForOS = (): object => (
    Platform.OS === 'android' ?
        {
            fontFamily: 'AvenirBlack',
            fontWeight: 'normal',
            fontStyle,
        }
        :
        {
            fontFamily: 'Avenir',
            fontWeight: '900',
            fontStyle,
        }
);

export const textStyles = StyleSheet.create({
    headline6: {
        fontSize: 16,
        lineHeight: 21,
        color: colors.teal,
        letterSpacing,
        ...getBoldFontStylesForOS(),
    },
    headlineH1StyleBlackLeft: {
        fontSize: 24,
        lineHeight: 36,
        textAlign: 'left',
        color: colors.black,
        letterSpacing,
        ...getBoldFontStylesForOS(),
    },
    headlineH2StyleWhiteLeft: {
        fontSize: 18,
        textAlign: 'left',
        color: colors.white,
        letterSpacing,
        ...getBoldFontStylesForOS(),
    },
    headlineH2StyleBlackLeft: {
        fontSize: 18,
        textAlign: 'left',
        color: colors.black,
        letterSpacing,
        ...getBoldFontStylesForOS(),
    },
    headlineH2StyleBlackCenter: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.black,
        letterSpacing,
        ...getBoldFontStylesForOS(),
    },
    headlineH3StyleBlackLeft: {
        fontSize: 16,
        textAlign: 'left',
        color: colors.black,
        letterSpacing,
        ...getBoldFontStylesForOS(),
    },
    headlineH3StyleBlackCenter: {
        fontSize: 16,
        textAlign: 'center',
        color: colors.black,
        letterSpacing,
        ...getBoldFontStylesForOS(),
    },
    headlineH3StyleWhiteCenter: {
        fontSize: 16,
        textAlign: 'center',
        color: colors.white,
        letterSpacing,
        ...getBoldFontStylesForOS(),
    },
    headlineH4StyleBlackLeft: {
        fontSize: 16,
        lineHeight: 21,
        textAlign: 'left',
        color: colors.black,
        letterSpacing,
        ...getNormalFontStylesForOS(),
    },
    paragraphBoldBlackLeft: {
        fontSize: 16,
        lineHeight: 21,
        textAlign: 'left',
        color: colors.black,
        letterSpacing,
        ...getBoldFontStylesForOS(),
    },
    paragraphBoldWhiteLeft: {
        fontSize: 16,
        lineHeight: 21,
        textAlign: 'left',
        color: colors.white,
        letterSpacing,
        ...getBoldFontStylesForOS(),
    },
    paragraphStyleWhiteleft: {
        fontSize: 16,
        lineHeight: 21,
        textAlign: 'left',
        color: colors.white,
        letterSpacing,
        ...getNormalFontStylesForOS(),
    },
    paragraphStyle: {
        fontSize: 16,
        lineHeight: 21,
        textAlign: 'left',
        color: colors.black,
        letterSpacing,
        ...getNormalFontStylesForOS(),
    },
    paragraphStyleBrown: {
        fontSize: 16,
        lineHeight: 21,
        textAlign: 'left',
        color: colors.greyishBrown,
        letterSpacing,
        ...getNormalFontStylesForOS(),
    },
    paragraphSmallStyleLeft: {
        fontSize: 12,
        lineHeight: 21,
        textAlign: 'left',
        color: colors.black,
        letterSpacing,
        ...getNormalFontStylesForOS(),
    },
    paragraphURL: {
        fontSize: 15,
        lineHeight: 21,
        textDecorationLine: 'underline',
        textAlign: 'left',
        color: colors.greyishBrown,
        letterSpacing,
        ...getBoldFontStylesForOS(),
    },
    paragraphStyleWhiteCenter: {
        fontSize: 16,
        lineHeight: 21,
        textAlign: 'center',
        color: colors.white,
        letterSpacing,
        ...getNormalFontStylesForOS(),
    },
    headlineH5StyleBlackLeft: {
        fontSize: 11,
        textAlign: 'left',
        color: colors.black,
        letterSpacing,
        ...getBoldFontStylesForOS(),
    },
    headlineH5StyleBlackCenter: {
        fontSize: 11,
        textAlign: 'center',
        color: colors.black,
        letterSpacing,
        ...getBoldFontStylesForOS(),
    },
    button: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.white,
        letterSpacing: buttonLetterSpacing,
        ...getBoldFontStylesForOS(),
    },
    tealButton: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.white,
        letterSpacing: buttonLetterSpacing,
        ...getBoldFontStylesForOS(),
    },
    whiteTealButton: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.teal,
        letterSpacing: buttonLetterSpacing,
        ...getBoldFontStylesForOS(),
    },
    taskTitle: {
        fontSize: 22,
        textAlign: 'left',
        color: colors.black,
        letterSpacing,
        ...getBoldFontStylesForOS(),
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

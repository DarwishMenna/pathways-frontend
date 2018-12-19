import React from 'react';
import { Text, View, Icon, Button, Content } from 'native-base';
import { Trans } from '@lingui/react';
import { I18nManager, Alert } from 'react-native';
import { applicationStyles, colors, textStyles, values } from '../../application/styles';
import { EmptyComponent } from '../empty_component/empty_component';
import { mapWithIndex } from '../../application/map_with_index';
import { ClearAllUserDataAction } from '../../stores/questionnaire/actions';

interface HelpContact {
    readonly title: JSX.Element;
    readonly subTitle?: JSX.Element;
}

const fixture: ReadonlyArray<HelpContact> = [
    {
        title: <Trans>Emergencies (9-1-1)</Trans>,
    },
    {
        title: <Trans>HealthLinkBC (8-1-1)</Trans>,
        subTitle: <Trans>Mutlilingual health information</Trans>,
    },
    {
        title: <Trans>Mental health & trauma support</Trans>,
    },
    {
        title: <Trans>Legal aid helplines</Trans>,
    },
    {
        title: <Trans>Other multilingual helplines</Trans>,
    },
    {
        title: <Trans>Contact app team for technical issues</Trans>,
        subTitle: <Trans>For technical issues and bugs</Trans>,
    },
];

export interface HelpComponentProps {
}

export interface HelpComponentActions {
    readonly clearAllUserState: () => ClearAllUserDataAction;
}

type Props = HelpComponentProps & HelpComponentActions;

export const HelpComponent: React.StatelessComponent<Props> = (props: Props): JSX.Element => (
    <Content padder style={applicationStyles.body}>
        <View
            style={{
                backgroundColor: colors.white,
                marginTop: -10,
                marginHorizontal: -10,
                padding: 10,
                marginBottom: 10,
            }}
        >
            <Text style={textStyles.headlineH1StyleBlackLeft}><Trans>{'Help & Support'}</Trans></Text>
            <Text style={textStyles.headlineH4StyleBlackLeft}>
                <Trans>If you are having difficulty with settlement in Canada, we suggest getting in touch with a settlement worker.</Trans>
            </Text>
            <View style={{
                marginTop: 15,
                marginBottom: 20,
            }}>
                <ContactSettlementWorkerButton />
            </View>
        </View>
        <Text style={[textStyles.headlineH5StyleBlackLeft, { margin: 10 }]}>
            <Trans>FOR ADDITIONAL ASSISTANCE</Trans>
        </Text>
        {mapWithIndex(renderContactComponent, fixture)}
        <View style={{
            marginTop: 15,
            marginBottom: 20,
        }}>
            <ClearAppMemoryButton {...props} />
        </View>
    </Content>
);

const ContactSettlementWorkerButton: React.StatelessComponent = (): JSX.Element => (
    <Button style={[applicationStyles.orangeButton, { alignSelf: 'center' }]}>
        <Text style={textStyles.button}>
            <Trans>Find a settlement agency near me</Trans>
        </Text>
    </Button>
);

const ClearAppMemoryButton: React.StatelessComponent<Props> = (props: Props): JSX.Element => {
    const alertToClearAllUserData = (): void => {
        const alertHeading = 'Delete user data';
        const alertMessage = 'Do you want to delete all user data from this phone? This includes which ' +
            'answers are chosen in the questionnaire and which topics are bookmarked.';

        // tslint:disable-next-line:no-expression-statement
        Alert.alert(alertHeading, alertMessage,
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Delete all user data', onPress: (): ClearAllUserDataAction => props.clearAllUserState() },
            ],
        );
    };
    return <Button full onPress={alertToClearAllUserData} style={[applicationStyles.orangeButton, { alignSelf: 'center' }]}>
        <Text style={textStyles.button}>
            <Trans>Delete all user data</Trans>
        </Text>
    </Button>;
};

const renderContactComponent = (contact: HelpContact, index: number): JSX.Element => (
    <View
        key={index}
        style={{
            backgroundColor: colors.white,
            marginHorizontal: -10,
            margin: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 15,
        }}
    >
        <View style={{ flexDirection: 'column' }}>
            <Text style={textStyles.headlineH4StyleBlackLeft}>{contact.title}</Text>
            {contact.subTitle ? <Text note>{contact.subTitle}</Text> : <EmptyComponent />}
        </View>
        <Icon name={I18nManager.isRTL ? 'arrow-back' : 'arrow-forward'} style={{ fontSize: values.smallIconSize }} />
    </View>
);

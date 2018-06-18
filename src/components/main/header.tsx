import React from 'react';
import { Header, Left, Button, Icon, Title, Body, Right } from 'native-base';
import { CurrentLocale } from '../language_switcher/current_locale';
import { Locale } from '../../locale';
import { I18nManager } from 'react-native';

export interface Props {
    readonly canGoBack: boolean;
    readonly currentLocale: Locale;
}

export interface Actions {
    readonly goBack: () => void;
}

export interface UiActions {
    readonly onLanguageSelect: () => void;
}

export const Component: React.StatelessComponent<Props & Actions & UiActions> = (props: Props & Actions & UiActions): JSX.Element => {
    const { canGoBack, goBack, onLanguageSelect, currentLocale }: Props & Actions & UiActions = props;
    return (
        <Header>
            <Left>
                <Button transparent disabled={!canGoBack} onPress={goBack}>
                    <Icon name={ I18nManager.isRTL ? 'arrow-forward' : 'arrow-back' } />
                </Button>
            </Left>
            <Body>
                <Title>Pathways</Title>
            </Body>
            <Right>
                <CurrentLocale onPress={onLanguageSelect} locale={currentLocale} />
            </Right>
        </Header>
    );
};

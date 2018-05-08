import React from 'react';
import { Header, Left, Button, Icon, Title, Body } from 'native-base';

export interface Props {
    canGoBack: boolean;
}

export interface Actions {
    goBack: () => void;
}

export const Component: React.StatelessComponent<Props & Actions> = (props: Props & Actions): JSX.Element => {
    const { canGoBack, goBack }: Props & Actions = props;
    return <Header>
        <Left>
            <Button transparent disabled={!canGoBack} onPress={goBack}>
                <Icon name='arrow-back' />
            </Button>
        </Left>
        <Body>
            <Title>Pathways</Title>
        </Body>
    </Header>;
};

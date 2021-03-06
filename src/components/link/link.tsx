// tslint:disable:no-expression-statement
import React from 'react';
import { Linking } from 'react-native';
import { Text } from 'native-base';
import { textStyles } from '../../application/styles';

interface AnchorProps {
    readonly href: string;
    readonly text: string;
    readonly style?: object;
}

export const openURL = (url: string): void => {
    Linking.canOpenURL(url).then((supported: boolean) => {
        if (supported) {
          Linking.openURL(url).catch((error: string) => console.error(error));
        } else {
          console.log('Can\'t handle url: ' + url);
        }
      }).catch((error: string) => console.error(error));
};

export const Link: React.StatelessComponent<AnchorProps> = (props: AnchorProps): JSX.Element => (
    <Text onPress={(): void => openURL(props.href)} style={[ textStyles.paragraphURL, props.style ]}>
        {props.text}
    </Text>
);

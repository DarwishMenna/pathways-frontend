// tslint:disable:no-class no-this no-expression-statement
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'native-base';
import { ChooseAnswerAction } from '../../stores/questionnaire';
import { Id } from '../../stores/questionnaire';
import { colors, values, textStyles } from '../../application/styles';
import { Answer as SelectorAnswer } from '../../selectors/questionnaire/answer';

export interface AnswerProps {
    readonly answer: SelectorAnswer;
}
export interface AnswerActions {
    readonly chooseAnswer: (answerId: Id) => ChooseAnswerAction;
}

type Props = AnswerProps & AnswerActions;

interface State {
    readonly answerIsSelected: boolean;
}

export class AnswerComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            answerIsSelected: this.props.answer.isChosen,
        };
        this.toggleAnswerIsSelected = this.toggleAnswerIsSelected.bind(this);
    }

    componentWillUnmount(): void {
        if (this.state.answerIsSelected !== this.props.answer.isChosen) {
            this.props.chooseAnswer(this.props.answer.id);
        }
    }

    render(): JSX.Element {
        return (
            <TouchableOpacity
                onPress={this.toggleAnswerIsSelected}
                style={{
                    padding: 10,
                    backgroundColor: this.state.answerIsSelected ? colors.orange : colors.white,
                    borderRadius: values.roundedBorderRadius,
                    borderWidth: 3,
                    borderColor: this.state.answerIsSelected ? colors.orange : colors.lightGrey,
                    margin: 3,
                }}
            >
                <Text style={this.state.answerIsSelected ? textStyles.headlineH3StyleWhiteCenter : textStyles.headlineH3StyleBlackCenter}>
                    {this.props.answer.text}
                </Text>
            </TouchableOpacity>
        );
    }

    private toggleAnswerIsSelected(): void {
        this.setState({ answerIsSelected: !this.state.answerIsSelected });
    }
}

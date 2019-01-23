import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { textStyles } from '../../application/styles';
import { View, Text } from 'native-base';
import { AnswerComponent } from './answer_component';
import { ChooseAnswerAction, Id } from '../../stores/questionnaire';
import { EmptyComponent } from '../empty_component/empty_component';
import { Answer as SelectorAnswer } from '../../selectors/questionnaire/answer';
import { Question as SelectorQuestion } from '../../selectors/questionnaire/question';

export interface QuestionProps {
    readonly question: SelectorQuestion;
}

export interface QuestionActions {
    readonly chooseAnswer: (answerId: Id) => ChooseAnswerAction;
}

type Props = QuestionProps & QuestionActions;

export const QuestionComponent: React.StatelessComponent<Props> = (props: Props): JSX.Element => (
    <View style={{ flex: 1, alignItems: 'stretch', marginBottom: 15 }}>
        <Text style={[textStyles.headlineH2StyleBlackCenter, { marginBottom: 15 }]}>{props.question.text}</Text>
        {props.question.explanation ?
            <Text style={textStyles.paragraphSmallStyleLeft}>{props.question.explanation}</Text>
            :
            <EmptyComponent />
        }
        <FlatList
            data={props.question.answers}
            renderItem={({ item }: ListRenderItemInfo<SelectorAnswer>): JSX.Element => renderAnswer(item, props)}
            keyExtractor={(answer: SelectorAnswer): string => answer.id}
        />
    </View>
);

const renderAnswer = (item: SelectorAnswer, props: Props): JSX.Element => (
    <AnswerComponent
        answer={item}
        chooseAnswer={props.chooseAnswer}
    />
);
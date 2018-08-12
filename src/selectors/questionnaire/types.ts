import * as model from '../../stores/questionnaire';

export interface Question {
    readonly id: model.Id;
    readonly number: number;
    readonly text: string;
    readonly explanation?: string;
    readonly answers: ReadonlyArray<Answer>;
}

export interface Answer {
    readonly id: model.Id;
    readonly text: string;
    readonly isChosen: boolean;
    readonly acceptMultipleAnswers: boolean;
}
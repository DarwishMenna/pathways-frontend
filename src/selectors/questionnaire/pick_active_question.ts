import { Store } from '../../stores';
import { Question } from '../../stores/questionnaire';
import { pickQuestionnaire } from './pick_questionnaire';

export const pickActiveQuestion = (appStore: Store): Question => {
    const questionnaire  = pickQuestionnaire(appStore);
    return questionnaire.questions[questionnaire.activeQuestion];
};

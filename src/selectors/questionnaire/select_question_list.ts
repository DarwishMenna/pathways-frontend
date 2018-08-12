import { Store } from '../../stores';
import { selectLocale } from '../locale/select_locale';
import { QuestionList } from './types';
import { buildQuestionList } from './build_question_list';
import { pickQuestionnaire } from './pick_questionnaire';

export const selectQuestionList = (appStore: Store): QuestionList => {
    const locale = selectLocale(appStore);
    const questionnaire = pickQuestionnaire(appStore);
    return buildQuestionList(locale, questionnaire);
};

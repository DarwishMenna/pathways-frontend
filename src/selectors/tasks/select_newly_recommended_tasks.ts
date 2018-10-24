import { Store } from '../../stores';
import { pickSavedTaskIds } from './pick_saved_task_ids';
import { pickTasks } from './pick_tasks';
import { pickQuestionnaire } from '../questionnaire/pick_questionnaire';
import { pickAnswers } from '../questionnaire/pick_answers';
import { getNewlyRecommendedTasks } from './get_newly_recommended_tasks';
import { buildSelectorTask } from './build_selector_task';
import { Task } from './task';
import R from 'ramda';

export const selectNewlyRecommendedTasks = (appStore: Store): ReadonlyArray<Task> => {
    const tasks = pickTasks(appStore);
    const savedTaskIds = pickSavedTaskIds(appStore);
    const newAnswers = pickAnswers(appStore);
    const oldAnswers = pickQuestionnaire(appStore).oldAnswers;

    return R.map(buildSelectorTask(appStore), getNewlyRecommendedTasks(oldAnswers, newAnswers, tasks, savedTaskIds));
};
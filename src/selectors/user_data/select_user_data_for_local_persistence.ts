import { Store } from '../../stores';
import { getIdsOfChosenAnswers } from '../questionnaire/get_ids_of_chosen_answers';
import { PersistedUserData } from '../../stores/user_data';
import { pickSavedTaskIds } from '../tasks/pick_saved_task_ids';
import { pickAnswers } from '../questionnaire/pick_answers';
import { pickTasks } from '../tasks/pick_tasks';
import { getIdsOfCompletedTasks } from '../tasks/get_ids_of_completed_tasks';

export const selectUserDataForLocalPersistence = (appStore: Store): PersistedUserData => ({
    chosenAnswers: getIdsOfChosenAnswers(pickAnswers(appStore)),
    savedTasks: pickSavedTaskIds(appStore),
    completedTasks: getIdsOfCompletedTasks(pickTasks(appStore)),
});

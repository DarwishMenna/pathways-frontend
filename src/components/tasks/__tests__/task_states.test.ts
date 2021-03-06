// tslint:disable:no-expression-statement
import {
    computeStateLabel,
    computeStateButtons,
    computeStateListItemIcon,
    TaskStateLabel,
    TaskStateButton,
    TaskStateListItemIcon }
from '../task_states';
import { aBoolean } from '../../../application/__tests__/helpers/random_test_values';

describe('task state', () => {
    describe('computeStateLabel', () => {
        it('returns CompletedTask for completed tasks', () => {
            const state = {
                isCompleted: true,
                isRecommended: aBoolean(),
                isSaved: aBoolean(),
            };
            expect(computeStateLabel(state)).toBe(TaskStateLabel.CompletedTask);
        });

        it('returns TaskIPlanToDo for non-completed tasks in my plan', () => {
            const state = {
                isCompleted: false,
                isRecommended: aBoolean(),
                isSaved: true,
            };
            expect(computeStateLabel(state)).toBe(TaskStateLabel.TaskIPlanToDo);
        });

        it('returns RecommendedTask for recommended non-completed tasks not in my plan', () => {
            const state = {
                isCompleted: false,
                isRecommended: true,
                isSaved: false,
            };
            expect(computeStateLabel(state)).toBe(TaskStateLabel.RecommendedTask);
        });

        it('returns None for non-recommended non-completed tasks not in my plan', () => {
            const state = {
                isCompleted: false,
                isRecommended: false,
                isSaved: false,
            };
            expect(computeStateLabel(state)).toBe(TaskStateLabel.None);
        });
    });
    describe('computeStateButtons', () => {
        it('returns NotDoneButton for completed tasks', () => {
            const state = {
                isCompleted: true,
                isRecommended: aBoolean(),
                isSaved: aBoolean(),
            };
            expect(computeStateButtons(state)).toEqual([TaskStateButton.NotDoneButton]);
        });

        it('returns RemoveFromPlanButton and DoneButton for non-completed tasks in my plan', () => {
            const state = {
                isCompleted: false,
                isRecommended: aBoolean(),
                isSaved: true,
            };
            expect(computeStateButtons(state)).toEqual([TaskStateButton.RemoveFromPlanButton, TaskStateButton.DoneButton]);
        });

        it('returns AddToPlanButton for non-completed tasks not in my plan', () => {
            const state = {
                isCompleted: false,
                isRecommended: aBoolean(),
                isSaved: false,
            };
            expect(computeStateButtons(state)).toEqual([TaskStateButton.AddToPlanButton]);
        });
    });
    describe('computeStateListItemIcon', () => {
        it('returns Checked for completed tasks', () => {
            const state = {
                isCompleted: true,
                isRecommended: aBoolean(),
                isSaved: aBoolean(),
            };
            expect(computeStateListItemIcon(state)).toBe(TaskStateListItemIcon.Checked);
        });

        it('returns UnChecked for non-completed tasks in my plan', () => {
            const state = {
                isCompleted: false,
                isRecommended: aBoolean(),
                isSaved: true,
            };
            expect(computeStateListItemIcon(state)).toBe(TaskStateListItemIcon.UnChecked);
        });

        it('returns Add for non-completed tasks not in my plan', () => {
            const state = {
                isCompleted: false,
                isRecommended: aBoolean(),
                isSaved: false,
            };
            expect(computeStateListItemIcon(state)).toBe(TaskStateListItemIcon.Add);
        });

    });
});

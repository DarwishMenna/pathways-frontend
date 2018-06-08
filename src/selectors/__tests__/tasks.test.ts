// tslint:disable:no-expression-statement
// tslint:disable:no-let
// tslint:disable:no-any

import {
    TaskBuilder,
    TaskUserSettingsBuilder,
    buildNormalizedStore ,
} from '../../stores/__tests__/helpers/tasks_helpers';
import { LocaleBuilder } from '../../stores/__tests__/helpers/locale_helpers';
import * as selector from '../tasks';
import * as stores from '../../stores/tasks';
import { Locale } from '../../locale/types';

describe('tasks selector', () => {

    describe ('denormalization', () => {
        let locale: Locale;
        let task: stores.Task;
        let taskUserSettings: stores.TaskUserSettings;
        let denormalizedTask: selector.Task;

        beforeEach(() => {
            locale = new LocaleBuilder().build();
            task = new TaskBuilder().withLocaleCode(locale.code).build();
            taskUserSettings = new TaskUserSettingsBuilder(task.id).build();
            denormalizedTask = selector.denormalizeTask(locale, task, taskUserSettings);
        });

        test('id property', () => {
            expect(denormalizedTask.id).toBe(task.id);
        });

        test('completed property', () => {
            expect(denormalizedTask.completed).toBe(taskUserSettings.completed);
        });

        test('starred property', () => {
            expect(denormalizedTask.starred).toBe(taskUserSettings.starred);
        });

        test('title property', () => {
            expect(denormalizedTask.title).toBe(task.title[locale.code]);
        });

        test('description property', () => {
            expect(denormalizedTask.description).toBe(task.description[locale.code]);
        });

        test('category property', () => {
            expect(denormalizedTask.category).toBe(task.category);
        });

        test('importance property', () => {
            expect(denormalizedTask.importance).toBe(task.importance);
        });

        test('tags property', () => {
            expect(denormalizedTask.tags).toBe(task.tags);
        });
    });

    describe('data retrieval', ()  => {
        let store: stores.Store;
        let locale: Locale;

        beforeEach(() => {
            locale = new LocaleBuilder().build();
            const taskBuilder = new TaskBuilder().withLocaleCode(locale.code);
            const taskUserSettingsBuilder = new TaskUserSettingsBuilder(taskBuilder.build().id);
            store = buildNormalizedStore(
                [taskBuilder],
                [taskUserSettingsBuilder],
                [taskBuilder.build().id],
                [taskBuilder.build().id],
            );
        });

        test('returns all saved tasks', () => {
            expect(Object.keys(selector.selectAllSavedTasks(locale, store))).toHaveLength(1);
        });

        test('returns all suggested tasks', () => {
            expect(Object.keys(selector.selectAllSuggestedTasks(locale, store))).toHaveLength(1);
        });
    });
});

// tslint:disable:no-expression-statement
import { call, put } from 'redux-saga/effects';

import { buildLocale } from '../../stores/__tests__/helpers/locale_helpers';
import { loadCurrentLocaleCode, saveCurrentLocaleCode, isReloadNeeded, reloadRTL, LocaleManager } from '../../application/locale';
import { loadCurrentLocaleActions, setLocaleActions } from '../../stores/locale';
import { applyLocaleChange, loadCurrentLocale } from '../locale';
import { anError } from '../../application/__tests__/helpers/random_test_values';

describe('the loadCurrentLocale saga', () => {

    const aLocale = buildLocale().get();

    beforeAll(() => {
        LocaleManager.registerLocale(aLocale);
    });

    it('should dispatch a call effect with loadCurrentLocaleCode', () => {
        const saga = loadCurrentLocale();
        const value = saga.next().value;
        const expected = call(loadCurrentLocaleCode);
        expect(value).toEqual(expected);
    });

    it('should dispatch a put effect with a success action upon completion of call effect', () => {
        const saga = loadCurrentLocale();
        expect(saga.next().value).toEqual(call(loadCurrentLocaleCode));
        expect(saga.next(aLocale.code).value).toEqual(put(loadCurrentLocaleActions.success(aLocale)));
    });

    it('should dispatch a failure action upon failure of call effect', () => {
        const error = anError();
        const saga = loadCurrentLocale();
        expect(saga.next().value).toEqual(call(loadCurrentLocaleCode));
        expect(saga.throw(error).value)
            .toEqual(put(loadCurrentLocaleActions.failure(error.message)));
    });

});

describe('the applyLocaleChange saga', () => {

    const aLocale = buildLocale().get();
    const setLocaleAction = setLocaleActions.request(aLocale);

    it('should dispatch a call effect with saveCurrentLocale', () => {
        const saga = applyLocaleChange(setLocaleAction);
        expect(saga.next().value).toEqual(call(saveCurrentLocaleCode, aLocale.code));
    });

    it('should dispatch a put effect with a success action upon completion of call effect', () => {
        const saga = applyLocaleChange(setLocaleAction);
        expect(saga.next().value).toEqual(call(saveCurrentLocaleCode, aLocale.code));
        expect(saga.next().value).toEqual(put(setLocaleActions.success(aLocale)));
        expect(saga.next().value).toEqual(call(isReloadNeeded, aLocale));
        expect(saga.next(true).value).toEqual(call(reloadRTL, aLocale.isRTL));
    });

    it('should dispatch a failure action upon failure of call effect', () => {
        const error = anError();
        const saga = applyLocaleChange(setLocaleAction);
        expect(saga.next().value).toEqual(call(saveCurrentLocaleCode, aLocale.code));
        expect(saga.throw(error).value)
            .toEqual(put(setLocaleActions.failure(error.message, aLocale)));
    });

});

import { Reducer, GenericStoreEnhancer, Middleware } from 'redux';
import  { LocationState } from 'redux-first-router';
import * as reduxFirstRouter from 'redux-first-router';
import createMemoryHistory from 'history/createMemoryHistory';
import * as constants from '../application/constants';
import { initialPage, Page } from '../stores/page_switcher';

const getRouteFromPage = (page: Page): string => {
    switch (page) {
        case Page.Questionnaire: 
            return '/questionnaire';
        case Page.MyPlan: 
            return '/plan';
        case Page.ExploreAll: 
            return '/explore';
        default: 
            return getRouteFromPage(initialPage);
    };
};

const routesMap = {
    [constants.SET_QUESTIONNAIRE_PAGE]: getRouteFromPage(Page.Questionnaire),
    [constants.SET_PLAN_PAGE]: getRouteFromPage(Page.MyPlan),
    [constants.SET_EXPLORE_PAGE]: getRouteFromPage(Page.ExploreAll),
};

interface ApplicationRouter {
    readonly reducer: Reducer<LocationState<string, any>>; // tslint:disable-line:no-any
    readonly enhancer: GenericStoreEnhancer;
    readonly middleware: Middleware;
}

export function buildRouter(): ApplicationRouter {
    const history = createMemoryHistory({
        initialEntries: [getRouteFromPage(initialPage)],
    });
    const router = reduxFirstRouter.connectRoutes(history, routesMap);
    return { reducer: router.reducer, enhancer: router.enhancer, middleware: router.middleware };
}

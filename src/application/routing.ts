import { RouteComponentProps } from 'react-router-native';
import { History } from 'history';
import { Id as ArticleId } from '../stores/articles';
import { Id as LearnId } from '../stores/explore';
import { Id as TaskId } from '../stores/tasks';

interface MatchParameters {
    readonly articleId: ArticleId;
    readonly learnId: LearnId;
    readonly taskId: TaskId;
}

export type RouterProps = RouteComponentProps<MatchParameters>;

export enum Routes {
    Welcome,
    Home,
    Questionnaire,
    MyPlan,
    Learn,
    LearnDetail,
    TaskDetail,
    ArticleDetail,
    Help,
}

export const routePathDefinition = (route: Routes): string => {
    switch (route) {
        default:
        case Routes.Welcome:
            return '/';
        case Routes.Home:
            return '/home';
        case Routes.Help:
            return '/help';
        case Routes.Questionnaire:
            return '/questionnaire';
        case Routes.MyPlan:
            return '/my-plan';
        case Routes.Learn:
            return '/learn';
        case Routes.LearnDetail:
            return '/learn/:learnId';
        case Routes.TaskDetail:
            return '/task/:taskId';
        case Routes.ArticleDetail:
            return '/article/:articleId';
    }
};

export const routePathWithoutParameter = (route: Routes): string => {
    if (routeHasParameter(route)) {
        throw new Error('The provided route cannot be a parameterized route');
    }

    return routePathDefinition(route);
};

export const routePathWithParameter = (route: Routes, parameter: string): string => {
    if (!routeHasParameter(route)) {
        throw new Error('The provided route must be a parameterized route');
    }

    return routePathDefinition(route).replace(/:.*/, parameter);
};

export const goToRouteWithoutParameter = (route: Routes, history: History): () => void => {
    const path = routePathWithoutParameter(route);
    // tslint:disable-next-line:no-expression-statement
    return (): void => history.push(path);
};

export const goToRouteWithParameter = (route: Routes, parameter: string, history: History): () => void => {
    const path = routePathWithParameter(route, parameter);
    // tslint:disable-next-line:no-expression-statement
    return (): void => history.push(path);
};

export const goBack = (history: History): void => (
    history.goBack()
);

const routeHasParameter = (route: Routes): boolean => (
    routePathDefinition(route).indexOf(':') !== -1
);
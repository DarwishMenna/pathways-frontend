import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Props, Actions, NavigationBar } from './navigation_bar';
import { Store } from '../../application/store';
import * as store from '../../stores/navigation_bar';

import { withI18n } from '@lingui/react';

const mapStateToProps = (): Props => ({});

const mapDispatchToProps = (dispatch: Dispatch<Store>): Actions => ({
    goToQuestionnaire: (): store.SetMainTabAction => dispatch(store.setMainTab(store.MainPage.One)),
    goToPlan: (): store.SetMainTabAction => dispatch(store.setMainTab(store.MainPage.Two)),
    goToExplore: (): store.SetMainTabAction => dispatch(store.setMainTab(store.MainPage.Three)),
});

const I18nNavigationBar = withI18n()(NavigationBar);
export const ConnectedNavigationBar = connect(mapStateToProps, mapDispatchToProps)(I18nNavigationBar);

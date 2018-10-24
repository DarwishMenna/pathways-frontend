import { connect } from 'react-redux';
import { Store } from '../../stores';
import { MainComponentProps, MainComponent, MainComponentActions } from './main_component';
import { LoaderProps, withLoader } from './loader';
import { isApplicationLoading } from '../../selectors/is_application_loading';
import { selectLocale } from '../../selectors/locale/select_locale';
import { withRouter } from 'react-router-native';
import { RouterProps } from '../../application/routing';
import { Dispatch } from 'redux';
import { Location, Action } from 'history';
import { RouteChangedAction, routeChanged } from '../../stores/router_actions';

type Props = LoaderProps & MainComponentProps & RouterProps;

const mapStateToProps = (store: Store, ownProps: RouterProps): Props => ({
    currentLocale: selectLocale(store),
    loading: isApplicationLoading(store),
    history: ownProps.history,
    location: ownProps.location,
    match: ownProps.match,
    staticContext: ownProps.staticContext,
});

const mapDispatchToProps = (dispatch: Dispatch<Store>): MainComponentActions => ({
    routeChanged: (location: Location, _: Action): RouteChangedAction => dispatch(routeChanged(location)),
});

const componentWithLoader = withLoader<MainComponentProps>(MainComponent);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(componentWithLoader);

export const MainConnectedComponent = withRouter(connectedComponent);
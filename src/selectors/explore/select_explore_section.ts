import { Store } from '../../stores';
import * as details from '../details/explore';
import { selectLocale } from '../locale';
import { selectExploreTaxonomy } from '../taxonomies';
import { RouterProps } from '../../application/routing';
import { selectIconFromExploreTaxonomy } from '../select_icon_from_explore_taxonomy';
import { ExploreSection } from './types';

export const selectExploreSection = (store: Store, routerProps: RouterProps): ExploreSection => {
    const locale = selectLocale(store);
    const sections = store.exploreSectionsInStore.sections;
    const id = routerProps.match.params.learnId;
    const theSection = sections[id];
    const exploreTaxonomy = selectExploreTaxonomy(store);
    const icon = selectIconFromExploreTaxonomy(theSection.taxonomyTerms, exploreTaxonomy);
    return details.buildExploreSection(locale, theSection, icon);
};

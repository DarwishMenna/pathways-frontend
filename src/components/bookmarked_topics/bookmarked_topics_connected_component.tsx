import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { TaskListActions } from '../tasks/task_list_component';
import { Store } from '../../stores';
import { BookmarkedTopicsComponent, BookmarkedTopicsProps } from './bookmarked_topics_component';
import { Id, RemoveFromSavedListAction, removeFromSavedList, AddToSavedListAction, addToSavedList } from '../../stores/tasks';
import { selectSavedTasks } from '../../selectors/tasks/select_saved_tasks';

const mapStateToProps = (store: Store): BookmarkedTopicsProps => ({
    bookmarkedTopics: selectSavedTasks(store),
});

type DispatchActions = AddToSavedListAction | RemoveFromSavedListAction;

const mapDispatchToProps = (dispatch: Dispatch<DispatchActions>): TaskListActions => ({
    addToSavedList: (taskId: Id): AddToSavedListAction => dispatch(addToSavedList(taskId)),
    removeFromSavedList: (taskId: Id): RemoveFromSavedListAction => dispatch(removeFromSavedList(taskId)),
});

export const BookmarkedTopicsConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(BookmarkedTopicsComponent);
import { combineReducers } from 'redux';
import ProjectsReducer from './reducer_projects';
import RolesReducer from './reducer_roles';
import ActiveProject from './reducer_active_project';

//add key to global application state called books (key books and value is whatever is returned from booksreducer)
//state always equal to object w/ a key books, value that's an array of books

const rootReducer = combineReducers({
  projects: ProjectsReducer,
  activeProject: ActiveProject,
  roles: RolesReducer
});

export default rootReducer;

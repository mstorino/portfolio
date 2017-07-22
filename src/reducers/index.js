import { combineReducers } from 'redux';
import ProjectsReducer from './reducer_projects';
import RolesReducer from './reducer_roles';
import ActiveProject from './reducer_active_project';

//add key to global application state called projects (key projects and value is whatever is returned from projectsreducer)
//state always equal to object w/ a key projects, value that's an array of projects

const rootReducer = combineReducers({
  projects: ProjectsReducer,
  activeProject: ActiveProject,
  roles: RolesReducer
});

export default rootReducer;

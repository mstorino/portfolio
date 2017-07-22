//Goal give user ability to click on project to see details about project
//define action creator and call it whenever project is clicked on

//Will contain all dif actions creators
//take as only argument (project) 
//make sure function is wired up to redux
export function selectProject(project){
	// console.log('A project has been select: ', project.title);

	//selectproject is an ActionCreator, it needs to return an action,
	//an object with a type property (two values: ALWAYS contains type [describe purpose of action] and 
	//SOMETIMES payload[piece of data describing aciton being undertaken]).
	
	return{
		type: 'PROJECT_SELECTED',
		payload: project
	};
}
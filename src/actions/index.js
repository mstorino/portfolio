//Goal give user ability to click on book to see details about book
//define action creator and call it whenever book is clicked on

//Will contain all dif actions creators
//take as only argument (book) 
//make sure function is wired up to redux
export function selectProject(project){
	// console.log('A book has been select: ', book.title);

	//selectBook is an ActionCreator, it needs to return an action,
	//an object with a type property (two values: ALWAYS contains type [describe purpose of action] and 
	//SOMETIMES payload[piece of data describing aciton being undertaken]).
	
	return{
		type: 'PROJECT_SELECTED',
		payload: project
	};
}
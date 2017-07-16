//state argument is not applciation state, only the state that this reducer is responsible for
//state = null, when arg comes in as undefined set it to null b/c if no book is selected on initial load react will throw an error

export default function(state = null, action){
	switch(action.type) {
	case 'PROJECT_SELECTED':
		return action.payload;
	}
	//base case of state where we don't care about action; state defaulted to null. So when app first boots up activeBook piece fo state will always be null. So when component renders it will try to say this.props.book.title where props is null. This will throw error because the component expects prop to be defiled so add initial check to render method in book-list.js
	return state;
}
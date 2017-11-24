function newsReducer(state = {news: []}, action){
	switch(action.type){
		case "FETCHED_NEWS":
		return Object.assign({}, state, {news: action.payload})
		default:
		return state
	}
}

export default newsReducer
function newsReducer(state = {news: []}, action){
	switch(action.type){
		case "FETCHED_NEWS":
		console.log("logging from newsReducer", action.payload)
		return Object.assign({}, state, {news: action.payload.articles})
		default:
		return state
	}
}

export default newsReducer
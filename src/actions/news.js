export function fetchNews() {
	return function(dispatch){
		fetch('http://localhost:3000/api/v1/news',{
          method: 'get',
          headers: {
            "Accept":"application/json"
          }
        })
        .then(res => res.json())
        .then(json => {
        	dispatch({type:"FETCHED_NEWS", payload: json})
        })
	}
}
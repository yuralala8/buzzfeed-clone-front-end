import React from 'react'
import { connect } from 'react-redux'
import { fetchNews } from '../actions/news'

class Main extends React.Component {
	constructor(){
		super()
		this.state = {
		}
	}

	componentDidMount(){
		this.props.fetchNews()
	}

	render(){
		console.log("logging from Main.js", this.props.news)
		return(
			<div>
			{this.props.news.map(article => <p> {article.title + article.author + article.description} </p>)}
			</div>
			)
	}
}

function mapStateToProps(state){
	return {
		news: state.news.news
	}
}

function mapDispatchToProps(dispatch){
	return {
		fetchNews: () => {
			dispatch(fetchNews())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
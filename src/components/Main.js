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
		console.log(this.props)
		return(
			<div>
			{this.props.news}
			</div>
			)
	}
}

function mapStateToProps(state){
	return {
		news: state.news.fetchNews
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
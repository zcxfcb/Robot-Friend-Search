import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/cardList';
import SearchBox from '../components/searchBox';
import './App.css';
import Scroll from '../components/scroll';
import { setSearchField, requestRobots } from '../actions.js';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => requestRobots(dispatch)
	}
}

class App extends Component {

	componentDidMount() {
		this.props.onRequestRobots();
	}


	render() {
		const {robots, isPending, error, searchField, onSearchChange} = this.props;
		const filterRobots = robots.filter(rob => {
			return rob.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return (isPending)? 
			 <h1>LOADING</h1> :
			(<div className='pa2 tc'>
				<h1>Robot Friends</h1>
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
				{(error === '')? <CardList robots={filterRobots}/> 
								 : <h2 className='light-red pa2 tc'>error loading robots</h2>
				}
				</Scroll>
			</div>
			);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

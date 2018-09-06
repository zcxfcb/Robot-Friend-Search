import React, { Component } from 'react';
import CardList from '../components/cardList';
import SearchBox from '../components/searchBox';
import './App.css'
import Scroll from '../components/scroll'

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchField: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots: users}));
	}

	onSearchChange = (event) => {
		this.setState({searchField: event.target.value});
	}

	render() {
		const {robots, searchField} = this.state;
		const filterRobots = robots.filter(rob => {
			return rob.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return (!robots.length)? 
			 <h1>LOADING</h1> :
			(<div className='pa2 tc'>
				<h1>Robot Friends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filterRobots}/>
				</Scroll>
			</div>
			);
	}
}

export default App;

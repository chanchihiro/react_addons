import React from 'react'
import ReactDOM from 'react-dom'


class ContactTable extends React.Component {
	render(){
		return(
			<table>
				{this.props.children}
			</table>
		);
	}
}

ContactTable.Header = class Header extends React.Component {
	render(){
		let tableTitles = this.props.title.map((cName, i) => {
			return(
				<th key={i}> 
					{cName}
				</th>
			);
		});

		return(
			<thead>
				<tr>
					{tableTitles}
				</tr>
			</thead>
		);
	}
}

ContactTable.Body = class Body extends React.Component {
	render(){
		let tableRows = this.props.data.map((person) => {
			return(
				<tr key={person.id}>
					<td>{person.name}</td>
					<td>{person.area}</td>
					<td>{person.number}</td>
				</tr>
			);
		});

		return(
			<tbody>
				{tableRows}
			</tbody>
		);
	}
}

export default class DispTable extends React.Component {
	render(){
		return(
			<ContactTable className="bd">
				<ContactTable.Header title={this.props.title} />
				<ContactTable.Body data={this.props.data} />
			</ContactTable>
		);
	}
}
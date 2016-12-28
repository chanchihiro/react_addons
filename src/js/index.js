import React from 'react'
import ReactDOM from 'react-dom'


let tableColumns = ['名前', '地域', '番号'];

let tableData = [
	{id: 1, name: '野口千紘', area: '東京都港区', number: '888888'},
	{id: 2, name: '山田太郎', area: '東京都渋谷区', number: '000000'},
	{id: 3, name: '鈴木謙介', area: '東京都新宿区', number: '234234'}
];


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

class DispTable extends React.Component {
	render(){
		return(
			<ContactTable className="bd">
				<ContactTable.Header title={this.props.title} />
				<ContactTable.Body data={this.props.data} />
			</ContactTable>
		);
	}
}


ReactDOM.render(
	<DispTable title={tableColumns} data={tableData} />,
	document.getElementById("content")
);





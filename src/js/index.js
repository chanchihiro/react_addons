import React from 'react'
import ReactDOM from 'react-dom'
import Perf from 'react-addons-perf'


let tableClumns = ['名前', '地域', '番号'];
let tableData = [
	{id: 1, name: '野口千紘', area: '東京都港区', number: '888888'},
	{id: 2, name: '山田太郎', area: '東京都渋谷区', number: '000000'},
	{id: 3, name: '鈴木謙介', area: '東京都新宿区', number: '234234'}
];

class ContactTable extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<table> {this.props.children} </table>
		);
	}
}

class ContactTable.Header extends React.Component {
	render(){
		let tableTitles = this.props.title.map((cName, i) => {
			return(<th key={i}> {cName} </th>);
		});
	}
}


ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);

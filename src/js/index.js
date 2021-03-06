import React from 'react'
import ReactDOM from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Todo from "./components/Todo"


let tableColumns = ['名前', '地域', '番号'];

let tableData = [
	{id: 1, name: '野口千紘', area: '東京都港区', number: '888888'},
	{id: 2, name: '山田太郎', area: '東京都渋谷区', number: '000000'},
	{id: 3, name: '鈴木謙介', area: '東京都新宿区', number: '234234'}
];


ReactDOM.render(
	<Todo />,
	document.getElementById("content")
);
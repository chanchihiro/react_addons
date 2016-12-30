import React from 'react'
import ReactDOM from 'react-dom'

import DispTable from "./components/Table"



let tableColumns = ['名前', '地域', '番号'];

let tableData = [
	{id: 1, name: '野口千紘', area: '東京都港区', number: '888888'},
	{id: 2, name: '山田太郎', area: '東京都渋谷区', number: '000000'},
	{id: 3, name: '鈴木謙介', area: '東京都新宿区', number: '234234'}
];



ReactDOM.render(
	<DispTable title={tableColumns} data={tableData} />,
	document.getElementById("content")
);



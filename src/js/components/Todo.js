import React from 'react'
import ReactDOM from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


export default class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todoItems: [
				{id: 0, name: "アイデアを出す"},
				{id: 1, name: "タスクを消化する"},
				{id: 2, name: "たくさん食べる"}
			],
			newItem: ''
		}; //ES6のとき初期値でreturnではなく、stateで設定する
		this.EditTodo = this.EditTodo.bind(this);
		this.AddTodo = this.AddTodo.bind(this);
		this.RemoveTodo = this.RemoveTodo.bind(this);
	}

	EditTodo(event){
		this.setState({newItem: event.target.value});
	}

	AddTodo(event){
		let idName = ({id: Date.now(), name: this.state.newItem});
		let newItems = this.state.todoItems.concat(idName);
		this.setState({todoItems : newItems});
		this.setState({newItem: ''});
	}

	RemoveTodo(i){
		let tempItems = this.state.todoItems;
		tempItems.splice(i, 1);
		this.setState({todoItems: tempItems});
	}


	render() {
		let currentItems = this.state.todoItems.map((item,i) =>
			<div key={item.id}>
				<input type='checkbox' defaultChecked={false} onChange={() => this.RemoveTodo(i)} />
				{item.name}
			</div>
		);
		return(
			<div>
				Todo : <input type='text' value={this.state.newItem} onChange={this.EditTodo} />
				<input type='button' value='追加' onClick={this.AddTodo} />
				<ReactCSSTransitionGroup 
					transitionName='fadingText'
					transitionEnterTimeout={1000}
					transitionLeaveTimeout={800}
					transitionAppear={true}
					transitionAppearTimeout={800}
				>
				{currentItems}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}
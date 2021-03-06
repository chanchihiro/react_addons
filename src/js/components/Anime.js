import React from 'react'
import ReactDOM from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


export default class CheckAnimate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checked : false,
			visibleText : ''
		}; //ES6のとき初期値でreturnではなく、stateで設定する
		this.checkChange = this.checkChange.bind(this); //ES6のとき、thisをbindさせないといけない
	}

	checkChange(event){
		if(event.target.checked){
			this.setState({visibleText : "普段は見えないテキスト"})
		}else{
			this.setState({visibleText : ''})
		}
		this.setState({checked : event.target.checked});
	}

	render() {
		return(
			<div>
				<input type='checkbox' checked={this.state.checked} onChange={this.checkChange}/>
				隠れたテキストを表示
				<ReactCSSTransitionGroup 
					transitionName='fadingText'
					transitionEnterTimeout={1500}
					transitionLeaveTimeout={500}
					transitionAppear={true}
					transitionAppearTimeout={800}
				>
					<h2 key={this.state.checked}>{this.state.visibleText}</h2>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}
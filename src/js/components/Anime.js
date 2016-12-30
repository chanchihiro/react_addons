import React from 'react'
import ReactDOM from 'react-dom'
import Addons from 'react-addons'


class CheckAnimate extends React.Component {
	constructor(props) {
		super(props);

		return{
			checked : false,
			visibleText : ''
		};
	}

	checkChange(event){
		if(event.target.checked){
			this.setState({visibleText : "普段は見えないテキスト"})
		}else{
			this.setState({visibleText : ''})
		}

		this.setState({checked : event.target.checked});
	}

	render(){
		return(
			<div>
				<input type='checkbox' checked={this.state.checked} onChange={this.checkChange}/>
				隠れたテキストを表示
				<ReactCSSTransitionGroup 
					transitionName='fadingText'
					transitionEnterTimeOut={1500}
					transitionLeaveTimeOut={500}
				>
					<h2 key={this.state.checked}>{this.state.visibleText}</h2>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}
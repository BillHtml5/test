import React from 'react';

class Test extends React.Component{
	//子类必须在构造函数contructor中条用super方法
	//不写会报错，子类没有自己的this对象，而是继承父类的this对象
	constructor(props){
		super(props);//固定写法
		
		this.state={
			msg:"一个Test组件"
		}
	}
	
	render(){
		return(
		
		<div>
			<h1>{this.state.msg}</h1>
		</div>
		)
	}
}

export default Test;
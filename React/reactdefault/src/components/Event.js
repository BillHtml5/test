import React from 'react';


class Event extends React.Component {
	
	constructor(props) {
		super(props);
		this.state={
			msg: 'run方法',
			msg1:'数据绑定',
		}
		//第2种改变this指向的方法
		this.getMsg2 =this.getMsg2.bind(this);
	}
	run(){
		alert('这是一个run方法')
		
	}
	
	getMsg1(){
		alert(this.state.msg1)
		}
		
	getMsg2(){
		alert(this.state.msg1)
		}
		
	getMsg3=()=>{
		alert(this.state.msg1)
		}
		
	setMsg1=()=>{
		this.setState({
			msg1:'更改后的msg1'
		})
	}
	
	setMsg2=(str)=>{
		this.setState({
			msg1:str
		})
	}
	
	render() {
		return ( 
		<div>
			<button onClick = {this.run} >run方法< /button>
			
			<hr/>
			<button onClick = {this.getMsg1.bind(this)} >获取数据--第一种改变this指向的方法< /button>

			<hr/>
			<button onClick = {this.getMsg2} >获取数据--第2种改变this指向的方法< /button>
			<hr/>
			<button onClick = {this.getMsg3} >获取数据--第3种改变this指向的方法< /button>
			<hr/>
			
			<button onClick = {this.setMsg1} >更改state数据< /button>
			<hr/>
			
			<button onClick = {this.setMsg2.bind(this,'第二次更改的msg1')} >传值更改state数据< /button>
			
			</div>
			
		)

	}

}

export default Event;

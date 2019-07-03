import React from 'react';


class Home extends React.Component{
	//绑定属性class 要写成className
	// 绑定属性for 要写 htmlFor
	//绑定属性	style也很特别，其他属性是一样的
	constructor(props){
		super(props);
		this.state={
			msg:'标题',
			style:{
                color:'red',
                fontSize:'40px'
            }
		}
	}
	
	
	render(){
		return(
			<div>
			
				<h1>{this.state.msg}</h1>
				
				<div clssName="red">className</div>
				<label htmlFor="name">姓名</label>
				<input id="name" />
			
				<div style={this.state.style}>我是一个红的的 div  行内样式</div>
			</div>
			
		
		)
	}
	
}

export default Home;
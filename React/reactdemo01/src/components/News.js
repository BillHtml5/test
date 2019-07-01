import React from 'react';


class News extends React.Component{
	
	constructor(props){
		super(props);// 用于父子组件传值
	}
	
	render(){		
		return(
		<div>
			<ul>
				<li>列表1111</li>
				<li>列表1111</li>
				<li>列表1111</li>
				<li>列表1111</li>
			</ul>
		</div>
		)
	}
}
export default News;
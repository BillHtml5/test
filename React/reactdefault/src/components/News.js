import React from 'react';
import photo from '../assets/images/bill.jpg';

class News extends React.Component{
	
	constructor(props){
		super(props);
		
	this.state={
		msg:'bill'
	}
	}
	
	render(){
		return(
		<div>
			<img src={photo}/>
		</div>
		
		)
	}
}

export default News;
import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
			username:''
		};
    }

    render() {
        return (
            <div>
                 {/* 获取表单的值

                1、监听表单的改变事件                        onChange
                2、在改变的事件里面获取表单输入的值            ref获取 
                3、把表单输入的值赋值给username              this.setState({})
                4、点击按钮的时候获取 state里面的username     this.state.username
                 */}
				 
            </div>
        );
    }
}

export default List;

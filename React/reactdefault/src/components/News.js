import React from 'react';
import photo from '../assets/images/bill.jpg';
import '../assets/css/index.css';

class News extends React.Component {

		constructor(props) {
			super(props);

			this.state = {
				msg: 'bill',
				//在render
				list: ['11111', '22222', '33333'],
				
				list2: [ < h2 key = 'key1' > 小标题1 < /h2>,<h2 key='key2'>小标题2</h2 > ],
				//对象
				list3: [{
						comtent: '1111111'
					},
					{
						comtent: '2222222'
					},
					{
						comtent: '3333333'
					},
					{
						comtent: '4444444'
					}
				]
			}
		}


		//本地图片的两中引入方式，1-import+<img src={photo}/>,2-require
		//远程引入  src=""
		render() {

			let listResult = this.state.list.map(function(value, key) {
				return <li key = {
					key
				} > {
					value
				} < /li>
			})


			return ( <
				div className = "news" >


				<
				img src = {
					photo
				}
				/> <
				img src = {
					require('../assets/images/bill.jpg')
				}
				/> <
				img src =
				"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562847165&di=566c9c35d5112a231185b0765336aa60&imgtype=jpg&er=1&src=http%3A%2F%2Fpic19.nipic.com%2F20120309%2F3145425_091538022000_2.jpg" /
				>

				<
				hr / >
				<
				ul id = "list" > {
					listResult
				} <
				/ul> <
				hr / >

				{
					this.state.list2
				} <
				hr / >

				<
				ul id = "list3" > {
					this.state.list3.map(function(value, key) {

							return ( < li key = {
									key
								} > {
									value.comtent
								} < /li>)
							})
					} <
					/ul> <
					/div>

				)
			}
		}

		export default News;

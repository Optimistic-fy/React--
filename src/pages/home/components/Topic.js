import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ToppicWrapper, TopicItem } from '../style';
import { Link } from 'react-router-dom';

class Topic extends PureComponent {
	render() {
		const { list } = this.props;
		return (
			<ToppicWrapper>
				{
					list.map((item) => (
						<TopicItem key={item.get('id')}>
							<img
								className='topic-pic'
								src={item.get('imgUrl')}
								alt=''
							/>
							{item.get('title')}
						</TopicItem>
					))
				}
				<Link className="more" to='/hottitle'>更多热门专题&nbsp;&nbsp;&gt;</Link>
			</ToppicWrapper>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home','topicList'])
});

export default connect(mapState, null)(Topic);
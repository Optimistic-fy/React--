import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper,
		 RecommendItem ,
		 AppWrapper ,
		 PicWrapper
} from '../style';
import imgUrl from './timg.jpg';

class Recommend extends PureComponent {
	render() {
		return (
			<RecommendWrapper>
				{
					this.props.list.map((item) => {
						return <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
					})
				}
				<AppWrapper>
					<PicWrapper>
						<img src={imgUrl} alt="二维码图标" />
						<div className="info">
							<p>下载简书手机App &nbsp;&gt;</p>
							<p className="everytime">随时随地发现和创作内容</p>
						</div>
					</PicWrapper>
				</AppWrapper>
			</RecommendWrapper>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'recommendList'])
})

export default connect(
    mapState, 
    null
)(Recommend);
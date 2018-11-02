import React , { PureComponent } from 'react';
import {
    HomeWrapper ,
    HomeLeft,
    HomeRight
} from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommon from './components/Recommon';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import { actionCreaters } from './store';
import { BackTop } from './style';

class Home extends PureComponent{
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTop)
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTop)
    }
    handleScrollTop(){
        window.scrollTo(0,0);
    }
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4516/cd9298634ca88ca71fc12752acf47917967a5d31.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommon />
                    <Writer />
                </HomeRight>
                { this.props.showScroll? <BackTop onClick={this.handleScrollTop}>
                    <i className="iconfont">&#xe641;</i>
                </BackTop> : null }
            </HomeWrapper>
        )
    }
}

const mapStateProps = (state) => ({
    showScroll: state.getIn(['home','showScroll'])
})

const mapDispatchProps = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreaters.getHomeInfo());
    },
    changeScrollTop(){
        if(document.documentElement.scrollTop > 400){
            dispatch(actionCreaters.toggleTopShow(true));
        }else{
            dispatch(actionCreaters.toggleTopShow(false));
        }
    }
});

export default connect(
    mapStateProps, 
    mapDispatchProps
)(Home);
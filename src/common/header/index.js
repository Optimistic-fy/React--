import React ,{ Component } from 'react';
import { HeaderWrapper,
         Logo,
         Nav,
         NavItem,
         SearchWrapper,
         NavSearch,
         Addition,
         Button,
         SearchInfo,
         SearchInfoTitle,
         SearchInfoSwitch,
         SearchInfoList,
         SearchInfoItem
} from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreaters } from './store';
import { Link } from 'react-router-dom';
import { actionCreaters as loginactionCreaters } from '../../pages/login/store';

class Header extends Component{
    getListArea(){
        const { list , focused ,page ,totalPage ,hamdleMouseEnter ,handleMouseLeave ,mouseIn ,handleChangePage } = this.props;
        const newList = list.toJS();
        const pageList = [];
        if(newList.length){  //解决key值问题  使page=1时不出现key为undefined
            for(let i = (page - 1) * 10; i< page * 10 ; i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if(focused || mouseIn){
            return (
                <SearchInfo 
                    onMouseEnter={hamdleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => {handleChangePage(page , totalPage , this.spinIcon)}}>
                            <i className="iconfont spin" ref={(icon) => {this.spinIcon = icon}}>&#xe61d;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            );
        }else{
            return null;
        }
    }
    render(){
        const { focused ,handleInputFocus ,handleInputBlur , list , login ,logout } = this.props;
        return (
            <div>
                <HeaderWrapper>
                    <Link to='/'>
                        <Logo />
                    </Link>
                    <Nav>
                        <Link to="/"><NavItem className='left active'>首页</NavItem></Link>
                        <NavItem className='left'>下载App</NavItem>
                        {
                            login ? <NavItem onClick={logout} className='right'>退出</NavItem> : 
                            <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
                        }
                        <NavItem className='right'>
                            <i className="iconfont">&#xe636;</i>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in={focused}
                                timeout={200}
                                classNames="slide"
                            >
                                <NavSearch 
                                    className={focused ? 'focused' : ''}
                                    onFocus={() => {handleInputFocus(list)}}
                                    onBlur={handleInputBlur}
                                ></NavSearch>
                            </CSSTransition>
                            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe617;</i>
                            {this.getListArea()}
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Link to='/write'>
                            <Button className='writting'>
                                <i className="iconfont">&#xe618;</i>&nbsp;
                                写文章
                            </Button>
                        </Link>
                        <Link to="/register">
                            <Button className='reg'>注册</Button>
                        </Link>
                        
                    </Addition>
                </HeaderWrapper>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header','focused']),
        list: state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        mouseIn: state.getIn(['header','mouseIn']),
        totalPage:state.getIn(['header','totalPage']),
        login:state.getIn(['login','login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list){
            if(list.size === 0){  //阻止点击一次input就执行一次ajax请求
                dispatch(actionCreaters.getList());
            }
            dispatch(actionCreaters.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreaters.searchBlur());
        },
        hamdleMouseEnter(){
            dispatch(actionCreaters.MouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreaters.MouseLeave());
        },
        handleChangePage(page , totalPage ,spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle = parseInt(originAngle ,10);
            }else{
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) +'deg)';
            if(page < totalPage){
                dispatch(actionCreaters.changePage(page + 1 ));
            }else{
                dispatch(actionCreaters.changePage( 1 ));
            }
        },
        logout(){
            dispatch(loginactionCreaters.logout());
        }
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Header);
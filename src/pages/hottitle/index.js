import React , { PureComponent } from 'react';
import {
    HotWrapp,
    Tittle,
    Trigger,
    TriggerItem,
    TriggerListall,
    TrigerList,
    ListPic,
    ListItem,
    Button
} from './style';
import { connect } from 'react-redux';
import { actionCreaters } from './store';

class Hottitle extends PureComponent{
    componentDidMount(){
            this.props.ChangeHotlist()
    }
    render(){
        const { listitem } = this.props;
        return (
            <HotWrapp>
                <Tittle>
                    <p><i className="iconfont">&#xe60b;</i>如何创建并玩转专题</p>
                </Tittle>
                <Trigger>
                    <TriggerItem className="tui"><i className="iconfont">&#xe621;</i>推荐</TriggerItem>
                    <TriggerItem><i className="iconfont">&#xe638;</i>热门</TriggerItem>
                    <TriggerItem><i className="iconfont">&#xe612;</i>城市</TriggerItem>
                    <TriggerItem><i className="iconfont">&#xe606;</i>校园</TriggerItem>
                </Trigger>
                <TriggerListall>
                    {
                        listitem.map((item) => {
                            return (
                                <TrigerList key={item.get('id')}>
                                    <ListPic>
                                        <img alt="图片" src={item.get('imgUrl')} />
                                    </ListPic>
                                    <ListItem>
                                        <p className="titles">{item.get('title')}</p>
                                        <p className="content">{item.get('content')}</p>
                                        <Button><p>+&nbsp;关注</p></Button>
                                        <hr/>
                                        <p className="article">{item.get('article')}</p>
                                    </ListItem>
                                </TrigerList>
                            )
                        })
                    }
                </TriggerListall>
            </HotWrapp>
        )
    }
}

const mapState = (state) => ({
    listitem : state.getIn(['hottitle','list'])
});
const mapDispatch = (dispatch) => ({
    ChangeHotlist() {
        dispatch(actionCreaters.getHotlist())
    }
});

export default connect(
    mapState, 
    mapDispatch
)(Hottitle);


//加如一个页面时  
// 1.在app.js中添加路由
// 2.在最外界的router中引入子router
// <Route exact path='/文件夹名' component={文件夹import的命名}></Route>

// 3.该页面的reducer中dispatch中数据为fromJS(action.数组名);
// dispatch('list',fromJS(action.list))

// 4.actionCreater中的数组为list: result.list;
// const getList = (result) => ({
//     type: actionTypes.GET_HOT_LIST,
//     list: result.list
// })
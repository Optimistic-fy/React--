import React , { PureComponent } from 'react';
import { LisiItem ,ListInfo , ListName , LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreaters } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent{
    render(){
        const { list ,getMoreList , page } = this.props;
        console.log(list);
        console.log('123');
        return (
            <div>
                {
                    list.map((item , index) => {
                        return (
                            <Link key={ index } to={ '/detail/'+ item.get('id')}>
                                <LisiItem >
                                    <ListInfo>
                                        <h3 className="title">{ item.get('title') }</h3>
                                        <p className="Info">{ item.get('Info') }</p>
                                    </ListInfo>
                                    <img className="pic" src={ item.get('imgUrl') } alt="" />
                                    <ListName>
                                        <span>{ item.get('name') }</span>
                                        <i className="iconfont">&#xe667;</i>
                                        <i className="iconfont">&#xe662;</i>
                                    </ListName>
                                </LisiItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>更多</LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        list: state.getIn(['home','articleList']),
        page: state.getIn(['home','listPage'])
    }
}
const mapDiapatchProps = (dispatch) => ({
    getMoreList(page){
        dispatch(actionCreaters.getMoreList(page))
    }
})

export default connect(
    mapStateToProps, 
    mapDiapatchProps
)(List);

// PureComponent必须要和immutable
import React , { PureComponent } from 'react';
import { WriterWrapper ,WriterTop , WriterList , WriteButton, WriterInfo} from '../style';
import { connect } from 'react-redux';
import { actionCreaters } from '../store';

class Writer extends PureComponent{
    componentDidMount(){
        this.props.getWriterList();
    }
    render(){
        const { writerList , page , totalPage , handleChangePage } = this.props;
        const newList = writerList.toJS();
        const pageList = [];
        if(newList.length){
            for (let i = ( page - 1 ) * 5; i < page * 5; i++) {
                pageList.push(
                    <WriterList key={ newList[i].id }>
                        <img src={ newList[i].imgUrl } alt="头像" />
                        <p className="name">{ newList[i].name }</p>
                        <p>{ newList[i].writetype }</p>
                    </WriterList>
                )
            }
        }
        return (
            <WriterWrapper>
                <WriterTop>
                    <span>推荐作者</span>
                    <span className="change" onClick={() => {handleChangePage(page , totalPage, this.spinIcon)}}> 
                        <i className="iconfont spin" ref={(icon) => {this.spinIcon = icon}} >&#xe61d;</i>
                            换一批
                    </span>
                </WriterTop>
                <WriterInfo>
                {   pageList   }
                </WriterInfo>
                <WriteButton>查看全部&nbsp;&nbsp;&gt;</WriteButton>
            </WriterWrapper>
        )
    }
}
const mapState = (state) => {
    return {
        writerList: state.getIn(['home','writerList']),
        page: state.getIn(['home','page']),
        totalPage: state.getIn(['home','totalPage'])
    }
};

const mapDispatch = (dispatch) => {
    return {
        getWriterList(){
            dispatch(actionCreaters.getWriterList());
        },
        handleChangePage(page , totalPage, spin){
            console.log(page,totalPage);
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle = parseInt(originAngle , 10);
            }else{
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) +'deg)';
            if(page < totalPage){
                dispatch(actionCreaters.changePage(page + 1 ));
            }else{
                dispatch(actionCreaters.changePage( 1 ));
            }
        }
    }
}

export default connect(
    mapState ,
    mapDispatch
)(Writer);
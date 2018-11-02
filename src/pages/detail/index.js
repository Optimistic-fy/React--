import React , { PureComponent } from 'react';
import { DetailWrapper, Header ,Content } from './style';
import { connect } from 'react-redux';
import { actionCreaters } from './store';
import { withRouter } from 'react-router-dom';

class Detail extends PureComponent{
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
    render(){
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content 
                    dangerouslySetInnerHTML = {{__html: this.props.content}} />
            </DetailWrapper>
        )
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail' , 'title']),
    content: state.getIn(['detail' , 'content'])
})
const mapDispatch = (dispatch) => ({
    getDetail(id){
        dispatch(actionCreaters.getDetail(id));
    } 
})

export default connect(
    mapState,
    mapDispatch
)(withRouter(Detail));
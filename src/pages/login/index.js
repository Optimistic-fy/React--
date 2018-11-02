import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper,
         LoginBox ,
         Input , 
         Button ,
         LoginTittle,
         LoginOut,
         LoginItem,
         LoginWord,
         LoginMore,
         LoginLogo
} from './style';
import { actionCreaters } from './store';
import { Redirect , Link } from 'react-router-dom';

class Login extends PureComponent{
    render(){
        const { loginStatus } = this.props;
        if( !loginStatus ){
            return (
                <LoginWrapper>
                    <LoginOut>
                        <LoginTittle>
                            <Link className="alabel" to="#">登录</Link>
                            <b>.</b>
                            <Link className="alabel regest" to="/register">注册</Link>
                        </LoginTittle>
                        <LoginBox>
                            <LoginItem>
                                <i className="iconfont">&#xe6da;</i>
                                <Input className="tel" placeholder='手机号或邮箱' innerRef={(input) => this.content = input}/>
                            </LoginItem>
                            <LoginItem>
                                <i className="iconfont">&#xe639;</i>
                                <Input className="pass" placeholder='密码' type='password' innerRef={(input) => this.pass = input} />
                            </LoginItem>
                        </LoginBox>
                        <LoginWord>
                            <Input className="check" type="checkbox" checked="checked" />
                            <span>记住我</span>
                            <span className="problem">登陆遇见问题?</span>
                        </LoginWord>
                        <Button onClick={() => this.props.login(this.content , this.pass)}>登陆</Button>
                        <LoginMore>
                            <p>————&nbsp;&nbsp;&nbsp;&nbsp;社交账号登陆&nbsp;&nbsp;&nbsp;&nbsp;————</p>
                            <LoginLogo>
                                <i className="iconfont weibo">&#xe63c;</i>
                                <i className="iconfont weixin">&#xe620;</i>
                                <i className="iconfont qq">&#xe600;</i>
                                <span className="word">其他</span>
                            </LoginLogo>
                        </LoginMore>
                    </LoginOut>
                </LoginWrapper>
            )
        }else{
            return <Redirect to='/' />
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
   login(accountElem , passElem){
       dispatch(actionCreaters.login(accountElem.value , passElem.value))
   }
})

export default connect(
    mapState,
    mapDispatch
)(Login);
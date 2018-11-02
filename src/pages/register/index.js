import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper,
         LoginBox ,
         Input , 
         Button ,
         LoginTittle,
         LoginOut,
         LoginItem,
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
                            <Link className="alabel regest" to="/login">登录</Link>
                            <b>.</b>
                            <Link className="alabel " to="#" >注册</Link>
                        </LoginTittle>
                        <LoginBox>
                            <LoginItem>
                                <i className="iconfont">&#xe6da;</i>
                                <Input className="tel" placeholder='你的昵称' innerRef={(input) => this.content = input}/>
                            </LoginItem>
                            <LoginItem>
                                <i className="iconfont">&#xe615;</i>
                                <Input className="tel telphone" placeholder='手机号' innerRef={(input) => this.content = input}/>
                            </LoginItem>
                            <LoginItem>
                                <i className="iconfont">&#xe639;</i>
                                <Input className="pass" placeholder='设置密码' type='password' innerRef={(input) => this.pass = input} />
                            </LoginItem>
                        </LoginBox>
                        <Button onClick={() => this.props.login(this.content , this.pass)}>注册</Button>
                        <p>点击 “注册” 即表示您同意并愿意遵守简书<br /><Link className="superlink" to="#">用户协议</Link> 和 <Link className="superlink" to="#">隐私政策</Link></p>
                        <LoginMore>
                            <p>————&nbsp;&nbsp;&nbsp;&nbsp;社交账号直接注册&nbsp;&nbsp;&nbsp;&nbsp;————</p>
                            <LoginLogo>
                                <i className="iconfont weixin">&#xe620;</i>
                                <i className="iconfont qq">&#xe600;</i>
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
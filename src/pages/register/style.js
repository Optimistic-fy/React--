import styled from 'styled-components';

export const LoginWrapper = styled.div`
    position: relative;
    top: 56px;
    left: 0;
    right: 0;
    bottom: 0;
    width: 400px;
    margin: 80px auto;
    box-shadow: 0 0 8px rgba(0, 0, 0, .1);
    z-index:0;
    background:#fff;
`
export const LoginOut = styled.div`
    padding: 50px;
    p{
        margin: 10px 0;
        padding: 0;
        text-align: center;
        font-size: 12px;
        line-height: 20px;
        color: #969696;
        .superlink{
            text-decoration: none;
            color: #3194d0;
        }
    }
`
export const LoginTittle = styled.div`
    width: 300px;
    height: 39px;
    padding 10px;
    margin: 10px auto 50px auto;
    box-sizing: border-box;
    text-align: center;
    .alabel{
        font-weight: 700;
        color: #ea6f5a;
        padding: 10px;
        text-decoration: none;
        border-bottom: 2px solid #ea6f5a;
    }
    .regest{
        color: #969696;
        border-bottom: none;
    }
    b{
        color: #969696;
        padding: 10px;
    }
`
export const LoginBox = styled.div`
    box-sizing: border-box;
    width:300px;
    margin: 0 auto;
`
export const LoginItem = styled.div`
    posotion: relative;
    width: 300px;
    height: 50px;
    .iconfont{
        position: absolute;
        padding: 14px 0 0 10px;
        width: 18px;
        height: 25px;
        font-size: 18px;
        color: #969696;
    }
    .tel{
        box-sizing: border-box;
        border-radius: 4px 4px 0 0;
        border-bottom: none;
    }
    .pass{
        border-radius: 0 0 4px 4px;
    }
    .telphone{
        border-radius: 0;
    }
`
export const Input = styled.input`
    posotion: relative;
    box-sizing: border-box;
    width: 298px;
    height: 50px;
    margin-bottom: 0;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    background-color: #f1f1f1;
    outline: none;
`
export const Button = styled.div`
    display: block;
    width: 300px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background: #3db922;
    border-radius: 15px;
    margin: 20px auto;
    text-align: center;
`
export const LoginMore = styled.div`
    width: 300px;
    margin: 50px auto 0 auto;
    text-align: center;
    p{
        font-size: 12px;
        color: #b5b5b5;
    }
`
export const LoginLogo = styled.div`
    posotion: relative;
    width: 300px;
    overflow: hidden;
    line-height: 50px;
    margin-bottom: 30px;
    i{
        position: absolute;
        display: block;
        width: 50px;
        height: 50px;
        font-size: 28px;
        padding:0 10px;
    }
    .weixin{
        left:50%;
        margin-left:-70px;
        color: #00bb29;
    }
    .qq{
        left:50%;
        color: #498ad5;
    }
`
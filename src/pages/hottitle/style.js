import styled from 'styled-components';
import imgUrl from './hotTitle.png';

export const HotWrapp = styled.div`
    width: 960px;
    margin: 30px auto 50px auto;
`
export const Tittle = styled.div`
    position: relative;
    width: 960px;
    min-height: 100px;
    border-radius: 4px;
    background: url(${imgUrl}) no-repeat;
    background-size: contain;
    p{
        position: absolute;
        top: 45px;
        right:50px;
        color: #fff;
        cursor: pointer;
        i{
            padding-right: 10px;
        }
    }
`
export const Trigger = styled.div`
    width: 100%;
    margin: 30px 0 0;
    text-align: left;
    .tui{
        color: #646464;
        border-bottom: 2px solid #646464;
    }
`
export const TriggerItem = styled.div`
    width:96px;
    box-sizing: border-box;
    padding: 13px 20px;
    font-size: 15px;
    font-weight: 700;
    line-height: 25px;
    color: #969696;
    cursor: pointer;
    float: left;
    i{
        padding-right: 10px;
    }
}
`
export const TriggerListall = styled.div`
    width: 990px; 
    float: left;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; 
`
export const TrigerList = styled.div`
    float: left;
    margin: 100px 0 30px 0;
    padding: 0 20px;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    background-color: hsla(0,0%,71%,.1);
`
export const ListPic = styled.div`
    width: 80px;
    height: 80px;
    margin: -40px 89px 10px;
    display: inline-block;
    border: 1px solid #ddd;
    img{
        width: 100%;
        height: 100%;
        background-size: contain;
        border-radius: 4px;
    }
`
export const ListItem = styled.div`
    text-align: center;
    width: 258px;
    .titles{
        padding: 10px 0;
        font-size: 21px;
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .content{
        font-size: 13px;
        min-height: 75px;
        line-height: 25px;
    }
    hr{
        box-sizing: content-box;
        height: 0;
        margin-top: 20px 0;
        border-top: 1px solid #e6e6e6;
        border-color: #e6e6e6;
    }
    .article{
        font-size: 14px;
    }
`
export const Button = styled.div`
    overflow: hidden;
    width: 100px;
    border-radius: 40px;
    color: #fff;
    background: #42c02e;
    border-color: #42c02e;
    margin: 0 auto;
    p{
        padding: 8px 0;
        font-size: 16px;
        font-weight: 400;
        margin: 0;
    }
`
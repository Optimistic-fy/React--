import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`
export const HomeLeft = styled.div`
    width: 625px;
    padding-top: 30px;
    margin-left: 15px;
    float:left;
    .banner-img{
        width:625px;
        height:270px;
    }
`
export const HomeRight = styled.div`
    width: 280px;
    float:right;
`
export const ToppicWrapper = styled.div`
    overflow: hidden;
    padding:20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
    .more{
        float: left;
        display: block;
        margin: 7px 0 0 18px;;
        font-size: 14px;
        color: #787878;
        cursor: pointer;
        text-decoration: none;
    }
`
export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    padding-right:10px;
    margin-left: 18px;
    margin-bottom:18px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    background: #f7f7f7;
    .topic-pic{
        display:block;
        float:left;
        height:32px;
        width:32px;
        margin-right:10px;
    }
`
export const LisiItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic{
        display: block;
        width:125px;
        height: 100px;
        float: right;
        border-radius: 5px;
        margin-top:1em;
    }
`
export const ListInfo = styled.div`
    width:500px;
    float:left;
    .title{
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
        margin-bottom:5px;
    }
    .Info{
        line-height: 24px;
        font-size: 13px;
        color: #999;
        margin:5px 0 5px 0;
    }
`
export const ListName = styled.div`
    line-height: 24px;
    font-size: 12px;
    color: #b4b4b4;
    margim:0px;
    .iconfont{
        font-size:13px;
        padding: 0 10px; 
    }
`
export const RecommendWrapper = styled.div`
    width: 280px;
    margin: 30px 0;
`
export const RecommendItem = styled.a`
    display:block;
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
    cursor: pointer;
    margin-bottom: 6px;
`
export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`
export const BackTop = styled.div`
    position: fixed;
    right:100px;
    bottom:100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    .iconfont{
        font-weight: bolder;
        font-size: 26px;
        color: #ccc;
    }
`
export const AppWrapper = styled.div`
    width: 278px;
    height: 66px;
    margin-top: 10px;
    text-align: center;
    cursor: pointer;
    border: 1px solid #dcdcdc;
    background: #fff;
`
export const PicWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    img{
        position: absolute;
        top: 50%;
        left: 20px;
        margin-top: -25px;
        width:50px;
        height: 50px;
        float:left;
    }
    .info{
        position: absolute;
        top: 50%;
        left: 100px;
        margin-top: -20px;
        width:132px;
        height:40px;
        float:left;
        font-size: 13px;
        p{
            margin:0 0 5px 0;
        }
        .everytime{
            font-size: 12px;
            color: #999;
            margin-bottom: 0;
        }
    }
`
export const WriterWrapper = styled.div`
    width: 278px;
    border-radius: 3px;
`
export const WriterTop = styled.div`
    position: relative;
    width: 278px;
    height: 20px;
    line-height: 20px;
    margin-bottom: 20px;
    span{
        color: #999;
        font-size: 13px;
        float: left;
        margin-left: 5px;
    }
    .change{
        position: absolute;
        right: 5px;
        display: block;
        cursor: pointer;
    }
    .spin{
        display: block;
        float:left;
        font-size:14px;
        marg-right:4px;
        transition: all .3s ease-in;
        transform-origin: center center;
    }
`
export const WriterInfo = styled.div`
    overflow: hidden;
`
export const WriterList = styled.div`
    position: relative;
    width: 278px;
    height: 47px;
    margin-bottom: 20px;
    img{
        position: absolute;
        left: 5px;
        width: 47px;
        height: 47px;
        border:1px solid #dcdcdc;
        border-radius:50%;
    }
    p{
        text-indent: 70px;
        font-size: 12px;
        margin: 0 20px 0 0;
        line-height: 25px;
        color: #969696;
    }
    .name{
        font-size: 14px;
        margin-right: 60px;
        color:#000;
    }
`
export const WriteButton = styled.button`
    width: 100%;
    font-size: 13px;
    padding: 7px 7px 7px 12px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    cursor: pointer;
`
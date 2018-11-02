import axios from 'axios';
import { fromJS } from 'immutable';
import * as contants from './constans';

const changeHomeData = (result) => ({
    type: contants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writerList: result.writerList
});
const addHomeList = (list , nextPage) => ({
    type: contants.ADD_HOME_LIST,
    list: fromJS(list),
    nextPage
});
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            console.log(result);
            console.log('111');
            dispatch(changeHomeData(result));
        })
    }
};
export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result , page + 1));
        })
    }
};
export const toggleTopShow = (show) => ({
    type: contants.TOGGLE_SCROLL_TOP,
    show
});
export const changePage = (page) => ({
    type: contants.CHANGE_PAGE,
    page
});
const changeWriterList = (data) => ({
    type: contants.CHANGE_WRITER_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 5)
});
export const getWriterList = () => {
    return (dispatch) => {
        axios.get('/api/writerList.json')
        .then((res) => {
            dispatch(changeWriterList(res.data.data));
        }).catch((error) => {
            console.log(error);
        })
    }
 };
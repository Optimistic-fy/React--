import * as actionTypes from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
});
export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
});
export const MouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
});
export const MouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
});
export const changePage = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page
});
export const Logout = () => ({
    type: actionTypes.CHANGE_LOGOUT,
    value: false
});
export const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data),
    totalPage:Math.ceil(data.length / 10)
});
export const getList = () => {
   return (dispatch) => {
       axios.get('api/headerList.json')
       .then((res) => {
           const data = res.data;
           dispatch(changeList(data.data));
       }).catch((error) => {
           console.log(error);
       })
   }
};
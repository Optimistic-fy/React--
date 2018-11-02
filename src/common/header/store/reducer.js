import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

//fromJS是immutable的对象，可以防止state被改变
const InitialState = fromJS({
    focused: false,
    list: [],
    page: 1,
    totalPage:1,
    mouseIn:false
});

//immutable对象的set方法，会结合之前的immutable对象的值
//和设置的值，返回一个全新的对象
export default (state = InitialState , action) => {
    switch(action.type){
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused' , true);
        case actionTypes.SEARCH_BLUR:
            return state.set('focused' , false);
        case actionTypes.CHANGE_LIST:
            return state.merge({   //merge解决需要多次set的情况
                list : action.data,
                totalPage : action.totalPage
            });
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn' , true);
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn' , false);
        case actionTypes.CHANGE_PAGE:
            return state.set('page' , action.page);
        default :
            return state;
    }
}

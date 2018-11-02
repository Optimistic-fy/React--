import { fromJS } from 'immutable';
import * as contants from './constans';

const InitialState = fromJS({
    topicList: [],
    articleList:[],
    recommendList:[],
    listPage:1,
    showScroll:false,
    writerList: [],
    page: 1,
    totalPage: 1,
});

export default (state = InitialState , action) => {
    switch(action.type){
        case contants.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList:fromJS(action.recommendList),
                writerList: fromJS(action.writerList)
            });
        case contants.ADD_HOME_LIST:
            return state.merge({
                articleList: state.get('articleList').concat(action.list),
                listPage: action.nextPage
            });
        case contants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll',action.show);
        case contants.CHANGE_WRITER_LIST:
            return state.merge({
                writerList: action.data,
                totalPage: action.totalPage
            });
        default :
            return state;
    }
}

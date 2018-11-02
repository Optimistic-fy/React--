import { fromJS } from 'immutable';
import * as actionType from './actionType';

const InitialState  = fromJS ({
    title: '',
    content: ''
});

export default (state = InitialState , action) => {
    switch(action.type){
        case actionType.CHANGE_DETIAL:
            return state.merge({
                title: action.title,
                content: action.content
            });
        default :
            return state;
    }
}

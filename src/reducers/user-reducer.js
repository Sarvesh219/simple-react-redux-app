import { CREATE_USER, DELETE_USER } from '../actions/constants/actionType';

export const initialState = {
    usersList: [],
    createUserStatus: undefined,
    deleteUserStatus: undefined
};

const handlers = {
    [CREATE_USER]: (state, action) => {
        return {
            ...state,
            usersList: [...state.usersList, action.details]
        }
    },
    [DELETE_USER]: (state, action) => {
        return {
            ...state,
            usersList: state.usersList.filter(item => item !== action.name)
        }
    }
};

export default function demoReducer(state = initialState, action) {
    const handler = handlers[action.type];
    if (!handler) return state;
    return { ...state, ...handler(state, action) };
}
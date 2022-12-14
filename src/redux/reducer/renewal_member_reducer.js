import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, SET_MEMBER, REMOVE_MEMBER, SIGNUP, SIGNUP_FAILURE, SIGNUP_SUCCESS, SET_PROFILE_ID, GET_PROFILE, GET_PROFILE_FAILURE, GET_PROFILE_SUCCESS } from '../actions/types';
import { INIT, SUCCESS, FAILURE } from "@utility/ALERT_MESSAGE";

const initialUserState = {
    login: {
        status: INIT,
        error: '',
    },
    signUp: {
        status: INIT,
        error: ''
    },
    currentMember: null,
    profileId: null,
    profileInfo: {
        status: INIT,
        data: {},
        error: null
    }
};

export default function (state = initialUserState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                login: {
                    status: INIT,
                    error: ''
                }
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                login: {
                    status: SUCCESS,
                    error: ''
                }
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                login: {
                    status: FAILURE,
                    error: action.data
                }
            };
        case SET_MEMBER:
            return {
                ...state,
                currentMember: action.data
            };
        case REMOVE_MEMBER:
            return {
                ...state,
                currentMember: null
            };
        case SIGNUP:
            return {
                ...state,
                signUp: {
                    status: INIT,
                    error: ''
                }
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                signUp: {
                    status: SUCCESS,
                    error: ''
                }
            };
        case SIGNUP_FAILURE:
            return {
                ...state,
                signUp: {
                    status: FAILURE,
                    error: action.data
                }
            };
        case SET_PROFILE_ID:
            return {
                ...state,
                profileId: action.data
            };
        case GET_PROFILE:
            return {
                ...state,
                profileInfo: {
                    status: INIT,
                    data: {},
                    error: ''
                }
            };
        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                profileInfo: {
                    status: SUCCESS,
                    data: action.data,
                    error: ''
                }
            };
        case GET_PROFILE_FAILURE:
            return {
                ...state,
                profileInfo: {
                    status: FAILURE,
                    data: {},
                    error: action.data
                }
            };
        default:
            return state;
    }
}

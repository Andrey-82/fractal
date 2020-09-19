import { createStore } from 'redux';
import { Fractal } from '../utils/classes';
import { IFractal, IAction } from '../utils/types';
import {defaultParams, defaultParamsIFS, defaultParamsIFS3D} from '../utils/consts';
import {
    CHANGE_TYPE_FRACTAL,
    SET_FRACTAL_FROM_HASH,
    CHANGE_NAME_FRACTAL,
    CHANGE_NORM_FRACTAL,
    CHANGE_COLOR_FRACTAL,
    CHANGE_SCALE_RANGE_FRACTAL,
    CHANGE_DEPTH_ITERATION_FRACTAL,
    CHANGE_SCALE_X_TO_Y_FRACTAL,
    CHANGE_MOTION_FRACTAL,
    CHANGE_X_COORD_CENTER_FRACTAL,
    CHANGE_Y_COORD_CENTER_FRACTAL,
    CHANGE_SPEED_MOTION_FRACTAL,
    CHANGE_SPEED_NORM_FRACTAL,
    CHANGE_SPEED_COLOR_FRACTAL,
    TOGGLE_ANIMATION_FRACTAL,
    SET_START_TIME_FRACTAL,
    APPLY_OWN_PARAAMS_FRACTAL,
    PUSH_TO_HISTORY,
    BACK_TO_HISTORY,
} from './constsActions';

const reducer = (state = Fractal.getParamsFromUrl(), action: IAction): IFractal => {
    let newState: IFractal;
    switch (action.type) {
        case CHANGE_TYPE_FRACTAL:
            let newDefaultParams = defaultParams;
            switch (action.typeFractal) {
                case 'complex': newDefaultParams = defaultParams; break;
                case 'ifs': newDefaultParams = defaultParamsIFS; break;
                case 'ifs3d': newDefaultParams = defaultParamsIFS3D; break;
                default: break;
            }
            newState = {...state, ...newDefaultParams}; break;
        case SET_FRACTAL_FROM_HASH:
            newState = {...state, ...action.hash}; break;
        case CHANGE_NAME_FRACTAL:
            newState = {...state, name: action.name}; break;
        case CHANGE_NORM_FRACTAL:
            newState = {...state, norm: action.norm}; break;
        case CHANGE_COLOR_FRACTAL:
            newState = {...state, colorStyle: action.colorStyle}; break;
        case CHANGE_SCALE_RANGE_FRACTAL:
            newState = {...state, scaleRange: action.scaleRange}; break;
        case CHANGE_DEPTH_ITERATION_FRACTAL:
            newState = {...state, depthIter: action.depthIter}; break;
        case CHANGE_SCALE_X_TO_Y_FRACTAL:
            newState = {...state, scaleXtoY: action.scaleXtoY}; break;
        case CHANGE_X_COORD_CENTER_FRACTAL:
            newState = {...state, xCenter: action.xCenter}; break;
        case CHANGE_Y_COORD_CENTER_FRACTAL:
            newState = {...state, yCenter: action.yCenter}; break;
        case TOGGLE_ANIMATION_FRACTAL:
            newState = {...state, animated: action.animated}; break;
        case SET_START_TIME_FRACTAL:
            newState = {...state, startTime: action.startTime}; break;
        case CHANGE_MOTION_FRACTAL:
            newState = {...state, motion: action.motion}; break;
        case CHANGE_SPEED_MOTION_FRACTAL:
            newState = {...state, speedMotion: action.speedMotion}; break;
        case CHANGE_SPEED_NORM_FRACTAL:
            newState = {...state, speedNorm: action.speedNorm}; break;
        case CHANGE_SPEED_COLOR_FRACTAL:
            newState = {...state, speedColorStyle: action.speedColorStyle}; break;
        case APPLY_OWN_PARAAMS_FRACTAL:
            newState = {...state, name: action.name,
                norm: action.norm,
                colorStyle: action.colorStyle,
                motion: action.motion
            };break;
        case PUSH_TO_HISTORY:
            newState = {...state};
            action.step && newState.history.push(action.step);
            break;
        case BACK_TO_HISTORY:
            newState = {...state};
            const history = newState.history;
            const length = history.length;
            if (length > 1) {
                history.splice(-1, 1);
                newState.scaleRange = history[length - 2].scaleRange;
                newState.xCenter = history[length - 2].xCenter;
                newState.yCenter = history[length - 2].yCenter;
            }
            break;
        default: return state;
    }
    return newState;
}

export const store = createStore(reducer);
export const dispatch = store.dispatch;

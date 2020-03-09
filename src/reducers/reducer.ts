import { createStore } from 'redux';
import { defaultParams } from '../utils/consts';
import { Fractal } from '../utils/classes';
import {
    CHANGE_NAME_FRACTAL,
    CHANGE_NORM_FRACTAL,
    CHANGE_COLOR_FRACTAL,
    CHANGE_MOTION_FRACTAL,
    CHANGE_X_COORD_CENTER_FRACTAL,
    CHANGE_Y_COORD_CENTER_FRACTAL,
    CHANGE_SPEED_MOTION_FRACTAL,
    CHANGE_SPEED_NORM_FRACTAL,
    CHANGE_SPEED_COLOR_FRACTAL,
    TOGGLE_ANIMATION_FRACTAL,
    APPLY_OWN_PARAAMS_FRACTAL,
} from './constsActions';
import { IFractal } from '../utils/types';

interface IAction {
    type: string,
    name?: string,
    norm?: string,
    colorStyle?: string,
    motion?: string,
    speedMotion?: number,
    speedNorm?: number,
    speedColorStyle?: number,
    xCenter?: number,
    yCenter?: number,
    animated?: boolean,
}

const reducer = (state = Fractal.getParamsFromUrl(), action: IAction): IFractal => {
    let newState: IFractal;
    switch (action.type) {
        case CHANGE_NAME_FRACTAL:
            newState = {...state, name: action.name}; break;
        case CHANGE_NORM_FRACTAL:
            newState = {...state, norm: action.norm}; break;
        case CHANGE_COLOR_FRACTAL:
            newState = {...state, colorStyle: action.colorStyle}; break;
        case CHANGE_X_COORD_CENTER_FRACTAL:
            newState = {...state, xCenter: action.xCenter}; break;
        case CHANGE_Y_COORD_CENTER_FRACTAL:
            newState = {...state, yCenter: action.yCenter}; break;
        case TOGGLE_ANIMATION_FRACTAL:
            newState = {...state, animated: action.animated}; break;
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
            }; break;
        default: return state;
    }
    Fractal.setParamsToUrl(newState);
    return newState;
}

export const store = createStore(reducer);
export const dispatch = store.dispatch;

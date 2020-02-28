import { createStore } from 'redux';
import { defaultParams } from '../utils/consts';
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

const reducer = (state = defaultParams, action: IAction): IFractal => {
    let newState: IFractal;
    switch (action.type) {
        case CHANGE_NAME_FRACTAL:
            newState = {...state, name: action.name};
            return newState;
        case CHANGE_NORM_FRACTAL:
            newState = {...state, norm: action.norm};
            return newState;
        case CHANGE_COLOR_FRACTAL:
            newState = {...state, colorStyle: action.colorStyle};
            return newState;
        case CHANGE_X_COORD_CENTER_FRACTAL:
            newState = {...state, xCenter: action.xCenter};
            return newState;
        case CHANGE_Y_COORD_CENTER_FRACTAL:
            newState = {...state, yCenter: action.yCenter};
            return newState;
        case TOGGLE_ANIMATION_FRACTAL:
            newState = {...state, animated: action.animated};
            return newState;
        case CHANGE_MOTION_FRACTAL:
            newState = {...state, motion: action.motion};
            return newState;
        case CHANGE_SPEED_MOTION_FRACTAL:
            newState = {...state, speedMotion: action.speedMotion};
            return newState;
        case CHANGE_SPEED_NORM_FRACTAL:
            newState = {...state, speedNorm: action.speedNorm};
            return newState;
        case CHANGE_SPEED_COLOR_FRACTAL:
            newState = {...state, speedColorStyle: action.speedColorStyle};
            return newState;
        case APPLY_OWN_PARAAMS_FRACTAL:
            newState = {...state, name: action.name,
                norm: action.norm,
                colorStyle: action.colorStyle,
                motion: action.motion
            };
            return newState;
        default: return state;
    }
}

export const store = createStore(reducer);
export const dispatch = store.dispatch;

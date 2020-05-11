import { ChangeEvent } from 'react';
import {
    CHANGE_TYPE_FRACTAL,
    CHANGE_NAME_FRACTAL,
    CHANGE_NORM_FRACTAL,
    CHANGE_SCALE_RANGE_FRACTAL,
    CHANGE_DEPTH_ITERATION_FRACTAL,
    CHANGE_SCALE_X_TO_Y_FRACTAL,
    CHANGE_COLOR_FRACTAL,
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
/* 
 * Экшен креаторы
 */
 export const changeType = (typeFractal: string) => ({
     type: CHANGE_TYPE_FRACTAL,
     typeFractal,
 })
 
 export const changeName = (event: ChangeEvent<HTMLSelectElement>) => ({
     type: CHANGE_NAME_FRACTAL,
     name: event.target.value,
 })
 
 export const changeNorm = (event: ChangeEvent<HTMLSelectElement>) => ({
     type: CHANGE_NORM_FRACTAL,
     norm: event.target.value,
 })
 
 export const changeScaleRange = (s: number) => ({
     type: CHANGE_SCALE_RANGE_FRACTAL,
     scaleRange: s,
 })
 
 export const changeDepthIter = (depth: number) => ({
     type: CHANGE_DEPTH_ITERATION_FRACTAL,
     depthIter: depth,
 })
 
 export const changeScaleXtoY = (XtoY: number) => ({
     type: CHANGE_SCALE_X_TO_Y_FRACTAL,
     scaleXtoY: XtoY,
 })
 
 export const changeColor = (event: ChangeEvent<HTMLSelectElement>) => ({
     type: CHANGE_COLOR_FRACTAL,
     colorStyle: event.target.value,
 })
 
 export const changeMotion = (event: ChangeEvent<HTMLSelectElement>) => ({
     type: CHANGE_MOTION_FRACTAL,
     motion: event.target.value,
 })
 
 export const changeXCenter = (x: number) => ({
     type: CHANGE_X_COORD_CENTER_FRACTAL,
     xCenter: x,
 })
 
 export const changeYCenter = (y: number) => ({
     type: CHANGE_Y_COORD_CENTER_FRACTAL,
     yCenter: y,
 })
 
 export const changeSpeedMotion = (event: ChangeEvent<HTMLInputElement>) => ({
     type: CHANGE_SPEED_MOTION_FRACTAL,
     speedMotion: +event.target.value,
 })
 
 export const changeSpeedNorm = (event: ChangeEvent<HTMLInputElement>) => ({
     type: CHANGE_SPEED_NORM_FRACTAL,
     speedNorm: +event.target.value,
 })
 
 export const changeSpeedColorStyle = (event: ChangeEvent<HTMLInputElement>) => ({
     type: CHANGE_SPEED_COLOR_FRACTAL,
     speedColorStyle: +event.target.value,
 })
 
 export const toggleAnimated = (event: ChangeEvent<HTMLInputElement>) => ({
     type: TOGGLE_ANIMATION_FRACTAL,
     animated: event.target.checked,
 })
 
 export const setStartTime = (time: number) => ({
     type: SET_START_TIME_FRACTAL,
     startTime: time,
 })
 
 export const clickApplyButton = (
     name: string | undefined, 
     norm: string | undefined, 
     colorStyle: string | undefined, 
     motion: string | undefined
 ) => ({
     type: APPLY_OWN_PARAAMS_FRACTAL,
     name,
     norm,
     colorStyle,
     motion,
 })
 
 export const pushToHistory = (xCenter: number, yCenter: number, scaleRange: number) => ({
     type: PUSH_TO_HISTORY,
     step: {
         xCenter,
         yCenter,
         scaleRange,
     },
 })
 
 export const backToHistory = () => ({type: BACK_TO_HISTORY})

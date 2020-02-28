import { ChangeEvent } from 'react';
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
/* 
 * Экшен креаторы
 */
 export const changeName = (event: ChangeEvent<HTMLSelectElement>) => ({
     type: CHANGE_NAME_FRACTAL,
     name: event.target.value,
 })
 
 export const changeNorm = (event: ChangeEvent<HTMLSelectElement>) => ({
     type: CHANGE_NORM_FRACTAL,
     norm: event.target.value,
 })
 
 export const changeColor = (event: ChangeEvent<HTMLSelectElement>) => ({
     type: CHANGE_COLOR_FRACTAL,
     colorStyle: event.target.value,
 })
 
 export const changeMotion = (event: ChangeEvent<HTMLSelectElement>) => ({
     type: CHANGE_MOTION_FRACTAL,
     motion: event.target.value,
 })
 
 export const changeXCenter = (event: ChangeEvent<HTMLInputElement>) => ({
     type: CHANGE_X_COORD_CENTER_FRACTAL,
     xCenter: +event.target.value,
 })
 
 export const changeYCenter = (event: ChangeEvent<HTMLSelectElement>) => ({
     type: CHANGE_Y_COORD_CENTER_FRACTAL,
     yCenter: +event.target.value,
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

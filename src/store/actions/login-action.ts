import {Action, createAction,props} from '@ngrx/store'
import { GET_LOGIN, SET_LOGIN } from '../type'

export const setEmailId = createAction(
    SET_LOGIN,
    props<{emailId:string}>()
)



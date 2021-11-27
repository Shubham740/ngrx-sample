import {createReducer,on} from '@ngrx/store'
import * as LoginPageAction from '../actions/login-action'

export interface Login{
    emailId:string
}

export const initialState :Login={
    emailId:""
}

export const loginReducer = createReducer(
    initialState,
    on(LoginPageAction.setEmailId,state=>({...state, emailId:state.emailId}))
)
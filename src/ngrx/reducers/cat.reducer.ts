import { createReducer, on } from "@ngrx/store";
import { CatState } from "../states/cat.state";
import  * as CatAction from "../actions/cat.action";
export const catInitState : CatState = {
    cats : [],
    error : null,   
    isLoading : false
}
export const catReducer = createReducer(catInitState,
    on (CatAction.getCats, (state) => {
        return {
            ...state,
            isLoading : true
        }
    }),
    on (CatAction.getCatsSuccess, (state, {data}) => {
        return {
            ...state,
            isLoading : false,
            cats : data
        }
    }),
    on (CatAction.getCatsError, (state, {error}) => {
        return {
            ...state,
            isLoading : false,
            error : error
        }
    }),
)
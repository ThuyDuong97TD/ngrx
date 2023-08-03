import {createReducer, on} from '@ngrx/store'
import { CounterActions } from '../actions/counter.action';
import { CounterState } from '../states/counter.state';


export const counterInitState : CounterState = {
    count : 0,

};

export const counterReducer = 
createReducer(counterInitState,
    on(CounterActions.increment, (state)=> {
        return {
            ...state,
            count : state.count + 1
            
        };
    })
);







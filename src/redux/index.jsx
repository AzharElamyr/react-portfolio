import {createStore} from "redux";

// action types
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO"
// actions

export const add_todo = (payload)=>{
    return {
        type: ADD_TODO,
        payload
    }
}

export const remove_todo = (payload)=>{
    return {
        type: REMOVE_TODO,
        payload
    }
}

// initial state
const initial = {
    todos: [],
    };

// reducers
const ToDoReducers = (state = initial, action)=>{
    switch (action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case REMOVE_TODO:
            return{
                ...state,
                todos: [...state.todos.filter((item, id)=>id !== action.payload)]
            }
        default: return state;
    }
}

// store
export const store = createStore(ToDoReducers);


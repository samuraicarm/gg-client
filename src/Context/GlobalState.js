import React, {createContext, useReducer, useEffect} from React

//intial state 

const initalState = {
    playlist: [],
    watched: [],
}

//create context
 
export const GlobalContext = createContext(intialState);

//provider components

export const GlobalProvider = props => {
    const [state, dispatch] =useReducer(AppReducer, intitalState)
}
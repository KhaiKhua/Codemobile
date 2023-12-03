import { useState } from "react";

export  const addItem =(item)=>{
    return{
        type:'addItem',
        payload:item
    };
};
export  const deleteItem =(id)=>{
    return{
        type:'deleteItem',
        payload:id
    };
};
const initialState = [
    {
        id: 1,
        name: 'khai'
    },
    {
        id: 2,
        name: 'hung',
    },
    {
        id: 3,
        name: 'manh',
    }
];

const reducer =(state= initialState,action)=>{
    switch(action.type){
        case 'addItem':
            return [...state, action.payload];
        case 'deleteItem':
            return state.filter(item=> item.id !== action.payload);
    default : 
        return state;
    }
};
export default reducer;
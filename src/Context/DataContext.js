import React, { createContext,useEffect,useReducer,useState } from 'react'
import productitems from '../products.json'
import { reducerFunction } from './DataReducer'
import {UPDATE,CLEAR,FILTER} from './Action'
export const AppContext=createContext()

const initalState={
    products:productitems,
    showItems:[],
    filter:{
    price:'',
    ideal:'',
    size:'',
    brand:''
    }
}
const DataContext = ({children}) => {
    // const [highToLow,setHighToLow]=useState(false)
    // const [lowToHigh,setLowToHigh]=useState(false)
    // const [filteredProducts,setFilteredProducts]=useState(products)
   
    const [state,dispatch]=useReducer(reducerFunction,initalState)

    // const  filtering=()=>{
    //     if(lowToHigh){
    //         const lowsort=products.sort((a,b)=>a.price.toString().localeCompare(b.price.toString(),undefined,{numeric:true}) )  
    //         setFilteredProducts(lowsort)
    //     }
    //    if(highToLow){
    //         const highsort=products.sort((a,b)=>b.price.toString().localeCompare(a.price.toString(),undefined,{numeric:true}))
    //         setFilteredProducts(highsort)
    //     }
    // } 
    const updatefilter=(e)=>{
        const name = e.target.name;
        const value=e.target.innerText;
        console.log(name , value)
        
        dispatch({type:UPDATE,payload:{name,value}})
    }
    const removefilter=()=>{
        dispatch({type:CLEAR})
    }    
    // useEffect(()=>{
    //         filtering()
    // },[filtering])

    useEffect(()=>{
        dispatch({type:FILTER})
    },[state.filter])

    const  contexts={...state,updatefilter,removefilter}

    return (
        <AppContext.Provider value={contexts}>
            {children}
        </AppContext.Provider>
    )
}

export default DataContext

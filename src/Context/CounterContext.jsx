import { createContext, useState } from "react";

export const CounterContext =createContext(0)

export default function CounterContextprovider({children}){
    const [counter, setcounter] = useState(0)
function increament(){
    setcounter(counter+1)
}
function decrement(){
    setcounter(counter-1)
}
    return <CounterContext.Provider value={ {counter, increament,decrement} }>
        {children}
    </CounterContext.Provider>
}
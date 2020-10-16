import React, { useState, createContext } from 'react'

export const LotsContext = createContext<any>([])

export const LotsProvider = (props: any) => {
    
    const [lots, setLots] = useState([])

    return (
        <LotsContext.Provider value={{lots, setLots}}>
            {props.children}
        </LotsContext.Provider>
    )
}

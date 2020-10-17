import React, { useState, createContext } from 'react'

export const LotsContext = createContext<any>([])

export const LotsProvider = (props: any) => {

    const [lots, setLots] = useState<Lot[]>([])

    const addLot = (lot: Lot): void => {
        setLots([lot, ...lots])
    }

    return (
        <LotsContext.Provider value={{ lots, setLots, addLot }}>
            {props.children}
        </LotsContext.Provider>
    )
}

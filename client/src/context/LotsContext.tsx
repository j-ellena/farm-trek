import React, { useState, createContext } from 'react'

export const LotsContext = createContext<any>([])

export const LotsProvider = (props: any) => {

    const [lots, setLots] = useState<Lot[]>([])

    const addLot = (lot: Lot): void => {
        setLots([lot, ...lots])
    }

    const deleteLot = (id: number): void => {
        setLots(lots.filter((lot: Lot) => lot.id !== id))
    }

    return (
        <LotsContext.Provider value={{ lots, setLots, addLot, deleteLot }}>
            {props.children}
        </LotsContext.Provider>
    )
}

import React, { useState, createContext } from 'react'

export const LotsContext = createContext<any>({})

export const LotsProvider = (props: any) => {

  const { children } = props

  const [lots, setLots] = useState<Lot[]>([])

  const addLot = (lot: Lot): void => {
    setLots([lot, ...lots])
  }

  const deleteLot = (id: number): void => {
    setLots(lots.filter((lot: Lot) => lot.id !== id))
  }

  const updateLot = (lot: Lot): void => {
    const index = lots.findIndex((item) => item.id === lot.id)
    const updatedLots = [...lots]
    updatedLots[index] = lot
    setLots(updatedLots)
  }

  const contextValue = {
    lots, setLots, addLot, deleteLot, updateLot,
  }

  return (
    <LotsContext.Provider value={contextValue}>
      {children}
    </LotsContext.Provider>
  )
}

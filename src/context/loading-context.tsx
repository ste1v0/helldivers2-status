import React, { createContext, useContext, useState } from 'react'

type LoadingContext = {
    isLoading: boolean
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoadingContext = createContext<LoadingContext | null>(null)

export function useLoadingContext() {
    const context = useContext(LoadingContext)

    if (!context) {
        throw new Error('useLoadingContext must be used within a LoadingContextProvider')
    }

    return context
}

export function LoadingContextProvider({ children } : { children : React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <LoadingContext.Provider
            value={{isLoading, setIsLoading}}
        >
            {children}
        </LoadingContext.Provider>
    )
}
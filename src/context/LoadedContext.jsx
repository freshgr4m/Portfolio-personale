import { createContext, useContext, useState } from 'react'

const LoadedContext = createContext(false)

export function LoadedProvider({ children }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <LoadedContext.Provider value={{ loaded, setLoaded }}>
      {children}
    </LoadedContext.Provider>
  )
}

export const useLoaded = () => useContext(LoadedContext)

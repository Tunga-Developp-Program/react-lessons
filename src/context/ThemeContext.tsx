import React, {createContext} from 'react'

export const ThemeContext = createContext<any>("")

const ThemeContextProvider = (props:any) => {
  return (
    <ThemeContext.Provider value={{names:["Eric","Dai"]}} >
{/* all components that will be enclosed by the themeContext provider */}
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider

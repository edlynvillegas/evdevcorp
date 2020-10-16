import React, { createContext, useState } from 'react'

export const UIContext = createContext();

const UIProvider = ({ children }) => {
    const [isSidebar, setSidebar] = useState(false)

    return (
        <UIContext.Provider value={{isSidebar, setSidebar}}>
            {children}
        </UIContext.Provider>
    )
}

export default React.memo(UIProvider);
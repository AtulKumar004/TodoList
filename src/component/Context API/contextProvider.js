import React, { Children, useState } from 'react'

export const globalcontext =  React.createContext() ;
function contextProvider({ Children }) {
    const [togal, setTogal] = useState(true);
    let value = { togal, setTogal }

  return (
    <globalcontext.Provider>
        {Children}
    </globalcontext.Provider>
  )
}

export default contextProvider;
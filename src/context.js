import React, { Children } from 'react'

const Context = React.createContext();

export function Provider(props) {
    return (
       <Context.Provider>
           {props.children}
       </Context.Provider>
    )
}

export const Consumer = Context.consumer;

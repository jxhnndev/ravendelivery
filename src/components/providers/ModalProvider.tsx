"use client";

import { createContext, useContext, useState } from 'react';

interface CurrentStateContextType {
    activeModalNumber: number;
    handleClick?: () => void;
    setActiveModalNumber?: any
  }

const StateContext = createContext<CurrentStateContextType>({
    activeModalNumber: 0,
})



export const ModalProvider = ({ children }: any) => {
    const [activeModalNumber, setActiveModalNumber] = useState(0);

    const handleClick = () => {
      console.log("testing")
    };
    
  
  
    return (
      <StateContext.Provider value={{activeModalNumber, setActiveModalNumber, handleClick}}>
       {children}
      </StateContext.Provider>
    );
  };
  
export const useModalContext = () => useContext(StateContext);
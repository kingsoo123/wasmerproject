"use client";

import React, { useState, useEffect } from "react";

export const WasmerContext = React.createContext();

export const WaserProvider = ({ children }) => {
  const [signIn, setSignIn] = useState(false);
  return (
    <WasmerContext.Provider
      value={{
        signIn,
        setSignIn,
      }}
    >
      {children}
    </WasmerContext.Provider>
  );
};

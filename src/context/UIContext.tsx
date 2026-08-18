'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface UIContextValue {
  contentVisible: boolean;
  toggle: () => void;
}

const UIContext = createContext<UIContextValue>({
  contentVisible: true,
  toggle: () => {},
});

export const useUI = () => useContext(UIContext);

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [contentVisible, setContentVisible] = useState(true);
  return (
    <UIContext.Provider value={{ contentVisible, toggle: () => setContentVisible(v => !v) }}>
      {children}
    </UIContext.Provider>
  );
};

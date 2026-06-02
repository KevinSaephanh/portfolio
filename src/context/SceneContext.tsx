'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface SceneContextValue {
  contentVisible: boolean;
  toggle: () => void;
}

const SceneContext = createContext<SceneContextValue>({
  contentVisible: true,
  toggle: () => {},
});

export const useScene = () => useContext(SceneContext);

export const SceneProvider = ({ children }: { children: ReactNode }) => {
  const [contentVisible, setContentVisible] = useState(true);
  return (
    <SceneContext.Provider value={{ contentVisible, toggle: () => setContentVisible(v => !v) }}>
      {children}
    </SceneContext.Provider>
  );
};

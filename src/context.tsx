import { createContext } from 'react';


export type ContextType = {
  removeSpecificMessage: (message: string) => void;
}

export const MessagesContext = createContext<ContextType>({
  removeSpecificMessage: () => console.warn('no theme provider'),
});

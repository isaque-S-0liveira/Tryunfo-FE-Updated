// /src/context/cardProvider.tsx
import { useState } from 'react';
import allCardContext from './allCardContext';
import { CardType } from '../types/card';

type AllCardProviderProps = {
  children: React.ReactNode;
};

function AllCardProvider({ children }: AllCardProviderProps) {
  const [allCardCT, setAllCardCT] = useState<CardType[]>([]);

  return (
    <allCardContext.Provider value={ { allCardCT, setAllCardCT } }>
      { children }
    </allCardContext.Provider>
  );
}

export default AllCardProvider;

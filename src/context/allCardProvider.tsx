// /src/context/cardProvider.tsx
import { useState } from 'react';
import allCardContext from './allCardContext';

type AllCardProviderProps = {
  children: React.ReactNode;
};

function AllCardProvider({ children }: AllCardProviderProps) {
  const [allCardCT, setAllCardCT] = useState<string>('');

  return (
    <allCardContext.Provider value={ { allCardCT, setAllCardCT } }>
      { children }
    </allCardContext.Provider>
  );
}

export default AllCardProvider;

// /src/context/cardProvider.tsx
import { useState } from 'react';
import cardContext from './cardContext';
import { CardType } from '../types/card';
import initialCardState from '../helpers/initialCardState';

type CardProviderProps = {
  children: React.ReactNode;
};

function CardProvider({ children }: CardProviderProps) {
  const [cardCT, setCardCT] = useState<CardType>(initialCardState);

  return (
    <cardContext.Provider value={ { cardCT, setCardCT } }>
      { children }
    </cardContext.Provider>
  );
}

export default CardProvider;

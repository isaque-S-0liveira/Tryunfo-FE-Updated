// /src/context/cardContext.ts
import { createContext } from 'react';
import { CardType } from '../types/card';

type AllCardContextType = {
  allCardCT: CardType[];
  setAllCardCT: React.Dispatch<React.SetStateAction<CardType[]>>
};

const allCardContext = createContext({} as AllCardContextType);

export default allCardContext;

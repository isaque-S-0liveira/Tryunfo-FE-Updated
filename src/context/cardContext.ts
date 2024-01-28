// /src/context/cardContext.ts
import { createContext } from 'react';
import { CardType } from '../types/card';

type CardContextType = {
  cardCT: CardType;
  setCardCT: React.Dispatch<React.SetStateAction<CardType>>
};
const cardContext = createContext({} as CardContextType);

export default cardContext;

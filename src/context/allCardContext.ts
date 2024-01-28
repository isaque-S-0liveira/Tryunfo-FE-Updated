// /src/context/cardContext.ts
import { createContext } from 'react';

type AllCardContextType = {
  allCardCT: string;
  setAllCardCT: React.Dispatch<React.SetStateAction<string>>
};

const allCardContext = createContext({} as AllCardContextType);

export default allCardContext;

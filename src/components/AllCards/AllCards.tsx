import { useContext, useEffect, useState } from 'react';
import Title from '../Title/Title';
import './AllCards.css';
import Card from '../Card/Card';
import { CardType } from '../../types/card';
import allCardContext from '../../context/allCardContext';

function AllCards() {
  // Estado para armazenar os cartões
  const [allCards, setAllCards] = useState<CardType[]>([]);
  const { allCardCT } = useContext(allCardContext);

  useEffect(() => {
    // Recupera os cartões do localStorage ao montar o componente
    const stringJSONRecuperada = localStorage.getItem('allCards');
    const cardsFromStorage = JSON.parse(stringJSONRecuperada || '[]');
    setAllCards(cardsFromStorage);
  }, [allCardCT]);

  return (
    <section
      id="all-cards-main"
      className={ `container mt-5 ${allCards.length === 0 && 'd-none '}` }
    >
      <Title className="h3 text-center pt-5" title="todas as cartas" color="#fff" />
      <div className="row">
        {allCards.map((card: CardType) => (
          <Card
            key={ card.id }
            className="mt-5 mb-5 col-12 col-lg-4"
            nome={ card.nome }
            descricao={ card.descricao }
            Attr01={ card.Attr01 }
            Attr02={ card.Attr02 }
            Attr03={ card.Attr03 }
            imagemLink={ card['imagem-link'] }
            raridade={ card.raridade }
            SuperTrunfo={ card['Super-trunfo'] }
            attrFontSize=".9em"
          />
        ))}
      </div>
    </section>
  );
}

export default AllCards;

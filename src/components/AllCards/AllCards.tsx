import { useContext } from 'react';
import allCardContext from '../../context/allCardContext';
import Title from '../Title/Title';
import './AllCards.css';
import Card from '../Card/Card';

function AllCards() {
  const { allCardCT } = useContext(allCardContext);
  return (
    <section
      id="all-cards-main"
      className={ `container mt-5 ${allCardCT.length === 0 && 'd-none '}` }
    >
      <Title className="h3 text-center pt-5" title="todas as cartas" color="#fff" />
      <div className="row">
        {allCardCT.map((card) => (

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

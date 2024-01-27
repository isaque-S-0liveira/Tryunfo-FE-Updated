import { useContext } from 'react';
import cardContext from '../../context/cardContext';
import Card from '../Card/Card';
import Form from '../Form/Form';
import './GeneratorCheap.css';

function GeneratorCheap() {
  const { cardCT } = useContext(cardContext);
  return (
    <section id="generatorCheapContainer" className="container mt-5">
      <div className="row pt-5">
        <Form />
        <Card
          preview
          className="d-none d-md-block col-md-6"
          nome={ cardCT.nome }
          descricao={ cardCT.descricao }
          Attr01={ cardCT.Attr01 }
          Attr02={ cardCT.Attr02 }
          Attr03={ cardCT.Attr03 }
          imagemLink={ cardCT['imagem-link'] }
          raridade={ cardCT.raridade }
          SuperTrunfo={ cardCT['Super-trunfo'] }
          attrFontSize="1em"
        />
      </div>
    </section>
  );
}

export default GeneratorCheap;

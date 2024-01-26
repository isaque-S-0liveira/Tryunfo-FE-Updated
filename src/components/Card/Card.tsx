/* eslint-disable react/jsx-max-depth */
import { useContext, useEffect, useState } from 'react';
import CardContext from '../../context/cardContext';
import './Card.css';
import Title from '../Title/Title';
import pointGenerator from '../../helpers/pointGenerator';
import Atrribute from './Attribute';
import SuperTryunfo from '../../assets/logo_tryunfo.png';
import validarImagem from '../../helpers/validateImg';

function Card({ className }: { className: string }) {
  const IMG_LINK = 'imagem-link';
  const GIF_DEFAULT = 'https://i.pinimg.com/originals/32/44/01/324401aa18cc80c55f338dcd4674cb80.gif';
  const { cardCT } = useContext(CardContext);
  const [imagemValida, setImagemValida] = useState(true);

  useEffect(() => {
    if (cardCT[IMG_LINK].length > 0) {
      validarImagem(cardCT[IMG_LINK], setImagemValida);
    } else {
      setImagemValida(false);
    }
  }, [cardCT[IMG_LINK]]);

  return (
    <section id="card-main-container" className={ `col-6 ${className}` }>
      <Title
        className="h3 text-color-primary text-center mb-5"
        title="pré-visualização"
      />
      <div id="card-container" className="container">
        <div className="pt-3 pb-3 ">
          <header className="card-header">
            <span id={ cardCT.raridade } className="Raridade">{cardCT.raridade}</span>
            <h3>{cardCT.nome ? cardCT.nome : 'Nome'}</h3>
          </header>
          <div id="card-img-container">
            <img
              id="card-img"
              src={ imagemValida ? cardCT[IMG_LINK] : GIF_DEFAULT }
              alt="Imagem do card"
              className="img-fluid h-100"
            />
            { cardCT['Super-trunfo'] && (
              <img id="super-tryunfo-img" src={ SuperTryunfo } alt="Super-Tryunfo" />
            )}
          </div>
          <div id="descricao-container">

            <p>{cardCT.descricao ? cardCT.descricao : 'Descrição do card'}</p>
          </div>
          <div id="atributos-container">
            <div id="atributos-itens" className="mt-4">

              <Atrribute
                label={ `Attr01${pointGenerator(40)}` }
                value={ cardCT.Attr01 }
              />
              <Atrribute
                label={ `Attr02${pointGenerator(40)}` }
                value={ cardCT.Attr02 }
              />
              <Atrribute
                label={ `Attr03${pointGenerator(40)}` }
                value={ cardCT.Attr03 }
              />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Card;
